import LogTypes from './LogTypes';

export default interface Log {
  readonly message: string;
  readonly type: LogTypes;
}
