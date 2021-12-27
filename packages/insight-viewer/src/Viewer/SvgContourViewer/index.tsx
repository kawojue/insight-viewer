import polylabel from 'polylabel'
import React, { useRef } from 'react'
import { useOverlayContext } from '../../contexts'
import { Contour, Point } from '../../types'
import { svgStyle, polygonStyle } from './SvgContourViewer.styles'
import {
  SvgContoursDrawProps,
  SvgContourViewerProps,
} from './SvgContourViewer.types'

function svgContoursDraw<T extends Contour>({
  contours,
  showOutline,
  focusedContour,
  polygonAttrs,
  pixelToCanvas,
}: SvgContoursDrawProps<T>) {
  return contours.map(contour => {
    const { polygon, label, id } = contour
    const isFocusedPolygon = polygon === focusedContour?.polygon
    const transformedPoints: Point[] = polygon.map(point =>
      pixelToCanvas(point)
    )

    const polygonAttributes =
      typeof polygonAttrs === 'function'
        ? polygonAttrs(contour, showOutline)
        : undefined

    const [labelXPosition, labelYPosition] = polylabel([transformedPoints], 1)
    const polygonPoints = transformedPoints
      .map(([x, y]) => `${x},${y}`)
      .join(' ')

    return (
      <React.Fragment key={id}>
        {showOutline && (
          <polygon
            style={{ ...polygonStyle, ...polygonAttributes?.style }}
            data-border="border"
            data-focus={isFocusedPolygon || undefined}
            points={polygonPoints}
          />
        )}
        <polygon
          style={{ ...polygonStyle, ...polygonAttributes?.style }}
          data-focus={isFocusedPolygon || undefined}
          points={polygonPoints}
        />
        <text x={labelXPosition} y={labelYPosition}>
          {label ?? id}
        </text>
      </React.Fragment>
    )
  })
}

export function SvgContourViewer<T extends Contour>({
  style,
  width,
  height,
  contours,
  className,
  focusedContour,
  showOutline = false,
  polygonAttrs,
}: SvgContourViewerProps<T>): JSX.Element {
  const svgRef = useRef<SVGSVGElement>(null)
  const { pixelToCanvas, enabledElement } = useOverlayContext()

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      style={{ ...svgStyle, ...style }}
      className={className}
    >
      {contours.length === 0 || !enabledElement
        ? null
        : svgContoursDraw({
            showOutline,
            contours,
            focusedContour,
            pixelToCanvas,
            polygonAttrs,
          })}
    </svg>
  )
}
