import Log from './Log';
import LogTypes from './LogTypes';

class Transpiler {
  static transpile(code: string, onLog?: (log: Log) => void) {
    return new Promise<string>((resolve, reject) => {
      const log = (message: string, type: LogTypes) => {
        if (type === 'info') {
          console.info(message);
        } else if (type === 'warning') {
          console.warn(message);
        } else {
          console.error(message);
        }

        onLog?.({ message, type });
      };

      let transpiledCode = '';
      let codeTransfered = false;

      const sse = new WebSocket(process.env.REACT_APP_API_URL!);

      log('[local]: Connecting...', 'info');

      sse.onopen = function () {
        log('[local]: Connected!', 'info');
        log('[local]: Sending code...', 'info');

        sse.send(JSON.stringify({ action: 'transpile', message: code }));
      };

      sse.onmessage = function (e) {
        const data = JSON.parse(e.data);

        if (data.action === 'output') {
          transpiledCode += data.message;
        } else if (data.action === 'output-finished') {
          codeTransfered = true;

          log(
            '[local]: Success! Check the simulator to see the results.',
            'info',
          );
        } else {
          const message = data.message.endsWith('\n')
            ? data.message.slice(0, -1)
            : data.message;

          let type: LogTypes = 'error';
          if (['stdout', 'internal'].includes(data.action)) {
            type = 'info';
          } else if (data.action === 'stderr') {
            type = 'warning';
          }

          log(`[${data.action}]: ` + message, type);
        }
      };

      sse.onclose = function () {
        sse.close();

        log('[local]: Connection closed.', 'info');

        if (codeTransfered) {
          resolve(transpiledCode);
        } else {
          reject();
        }
      };

      sse.onerror = function (e) {
        sse.close();

        log(`[local]: Connection error: ${e}.`, 'error');

        reject();
      };
    });
  }
}

export default Transpiler;
