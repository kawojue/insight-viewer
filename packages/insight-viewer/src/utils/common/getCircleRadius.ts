/* eslint-disable no-restricted-properties */
import { Point } from '../../types'
import { Image } from '../../Viewer/types'
import { IMAGER_PIXEL_SPACING } from './const'

const calcRadius = (x: number, y: number, col: number, row: number) => {
  const radius = Math.sqrt(Math.pow(Math.abs(x) * col, 2) + Math.pow(Math.abs(y) * row, 2))

  return Number(radius.toFixed(2))
}

export function getCircleRadius(
  startPoint: Point,
  endPoint: Point,
  currentImage: Image | null
): { radius: number; unit: 'px' | 'mm' } {
  const [x1, y1] = startPoint
  const [x2, y2] = endPoint

  const x = x2 - x1
  const y = y2 - y1

  if (!currentImage) {
    return { radius: calcRadius(x, y, 1, 1), unit: 'px' }
  }

  const imagerPixelSpacing = currentImage.data.string(IMAGER_PIXEL_SPACING)

  if (imagerPixelSpacing) {
    const [columnPixelSpacing, rowPixelSpacing] = imagerPixelSpacing.split('\\').map(Number)

    return { radius: calcRadius(x, y, columnPixelSpacing, rowPixelSpacing), unit: 'mm' }
  }

  return { radius: calcRadius(x, y, 1, 1), unit: 'px' }
}
