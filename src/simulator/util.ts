export default class Util {
  static loadImage(src: string) {
    return new Promise<HTMLImageElement>((resolve) => {
      const image = new Image();
      image.src = src;
      image.onload = () => {
        resolve(image);
      };
    });
  }
}
