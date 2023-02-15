import { getCircleEditPoints } from './getCircleEditPoints'
import { getCircleRadiusByCenter } from './getCircleRadius'

import type { Point, Annotation, Measurement, EditMode, MeasurementMode } from '../../types'

export type EditPoints = [Point, Point]

export function getEditPointPosition(
  points: Point[],
  editTarget: Measurement | Annotation | null,
  drawingMode?: MeasurementMode,
  editingMode?: EditMode | null,
  fixedPoints?: [Point, Point]
): EditPoints | null {
  // if there's more than 2 points, it cannot edit(can just move)
  if (points.length !== 2) return null

  if (
    (editTarget?.type === 'area' || editTarget?.type === 'circle') &&
    (!editingMode || editingMode === 'move' || editingMode === 'textMove')
  ) {
    const [centerPoint, endPoint] = points
    const radius = getCircleRadiusByCenter(centerPoint, endPoint)
    const editPoints = getCircleEditPoints(centerPoint, radius)
    return editPoints
  }

  if (
    fixedPoints &&
    (editTarget?.type === 'area' || editTarget?.type === 'circle') &&
    (editingMode === 'startPoint' || editingMode === 'endPoint')
  ) {
    const [start, end] = fixedPoints
    const currentEditingPoints: [Point, Point] =
      editingMode === 'startPoint'
        ? [
            [start[0], start[1]],
            [end[0], end[1]],
          ]
        : [
            [end[0], end[1]],
            [start[0], start[1]],
          ]

    return currentEditingPoints
  }

  if (drawingMode === 'area' && fixedPoints) {
    const [start, end] = fixedPoints

    return [
      [start[0], start[1]],
      [end[0], end[1]],
    ]
  }
  // line annotation or ruler measurement
  const [startPoint, endPoint] = points

  return [startPoint, endPoint]
}
