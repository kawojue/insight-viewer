import React, { ReactElement } from 'react'

import { PolygonViewerProps } from './PolygonViewer.types'
import { getPolyViewerInfo } from '../../utils/common/getPolyViewerInfo'
import { textStyle, polygonStyle } from '../AnnotationViewer/AnnotationViewer.styles'
import { useOverlayContext } from '../../contexts'

export function PolygonViewer({
  annotation,
  showOutline,
  showAnnotationLabel,
  hoveredAnnotation,
  annotationAttrs,
}: PolygonViewerProps): ReactElement {
  const { pixelToCanvas } = useOverlayContext()

  const { isHoveredAnnotation, polygonAttributes, labelPosition, polygonLabel, polygonPoints } = getPolyViewerInfo({
    annotation,
    showOutline,
    hoveredAnnotation,
    annotationAttrs,
    pixelToCanvas,
  })

  return (
    <>
      {showOutline && (
        <polygon
          style={{
            ...polygonStyle[isHoveredAnnotation ? 'hoveredOutline' : 'outline'],
            ...polygonAttributes?.style,
          }}
          data-select={isHoveredAnnotation || undefined}
          points={polygonPoints}
        />
      )}
      <polygon
        style={{
          ...polygonStyle.default,
          ...polygonAttributes?.style,
        }}
        data-select={isHoveredAnnotation || undefined}
        points={polygonPoints}
      />
      {showAnnotationLabel && labelPosition && (
        <text style={{ ...textStyle.default }} x={labelPosition[0]} y={labelPosition[1]}>
          {polygonLabel}
        </text>
      )}
    </>
  )
}
