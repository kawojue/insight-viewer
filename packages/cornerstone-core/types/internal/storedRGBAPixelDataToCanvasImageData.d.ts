/**
 * Converts stored RGBA color pixel values to display pixel values using a LUT.
 *
 * @param image A Cornerstone Image Object
 * @param lut Lookup table array
 * @param canvasImageDataData canvasImageData.data buffer filled with white pixels
 *
 */
export default function _default(image: new (width?: number, height?: number) => HTMLImageElement, lut: any[], canvasImageDataData: Uint8ClampedArray): void;
