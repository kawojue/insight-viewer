import React, { ReactElement } from 'react'
import polylabel from 'polylabel'

import { PolylineDrawerProps } from './PolylineDrawer.types'
import { polyline } from '../AnnotationDrawer/AnnotationDrawer.styles'
import { textStyle } from '../AnnotationViewer/AnnotationViewer.styles'
import { getArrowPosition } from '../../utils/common/getArrowPosition'
import { useOverlayContext } from '../../contexts'

const PolylineElement = ({
  isPolygon,
  ...rest
}: React.SVGProps<SVGPolygonElement | SVGPolylineElement> & { isPolygon: boolean }) =>
  isPolygon ? <polygon {...rest} /> : <polyline {...rest} />

export function PolylineDrawer({
  lineHead,
  points,
  isSelectedMode,
  selectedAnnotationLabel,
  isPolygonSelected,
  setAnnotationEditMode,
}: PolylineDrawerProps): ReactElement {
  const { pixelToCanvas } = useOverlayContext()

  const canvasPoints = points.map(pixelToCanvas)

  const polylinePoints = canvasPoints
    .map((point) => {
      const [x, y] = point
      return `${x},${y}`
    })
    .join()

  const getArrowPoints = () => {
    const arrowPosition = getArrowPosition(canvasPoints)
    const arrowPoints = arrowPosition
      .map((point) => {
        const [x, y] = point
        return `${x},${y}`
      })
      .join()

    return arrowPoints
  }

  const labelPosition = selectedAnnotationLabel ? polylabel([points.map(pixelToCanvas)]) : null

  return (
    <g data-cy-annotation onMouseDown={() => setAnnotationEditMode('move')}>
      {points && points.length > 0 && (
        <>
          <PolylineElement isPolygon={!!isPolygonSelected} style={polyline.outline} points={polylinePoints} />
          {lineHead === 'arrow' && (
            <>
              <PolylineElement isPolygon={!!isPolygonSelected} style={polyline.outline} points={getArrowPoints()} />
              <PolylineElement
                isPolygon={!!isPolygonSelected}
                style={polyline[isSelectedMode ? 'select' : 'default']}
                points={getArrowPoints()}
              />
            </>
          )}
          <PolylineElement
            isPolygon={!!isPolygonSelected}
            style={polyline[isSelectedMode ? 'select' : 'default']}
            points={polylinePoints}
          />
        </>
      )}
      {selectedAnnotationLabel && labelPosition && (
        <text style={{ ...textStyle.default }} x={labelPosition[0]} y={labelPosition[1]}>
          {selectedAnnotationLabel}
        </text>
      )}
    </g>
  )
}
