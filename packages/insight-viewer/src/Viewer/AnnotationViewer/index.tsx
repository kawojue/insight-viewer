import React, { useRef } from 'react'
import { useOverlayContext } from '../../contexts'
import { Annotation } from '../../types'
import { svgStyle } from './AnnotationViewer.styles'
import { AnnotationsDrawProps, AnnotationViewerProps } from './AnnotationViewer.types'
import { LineViewer } from '../LineViewer'
import { PolygonViewer } from '../PolygonViewer'

function AnnotationsDraw<T extends Annotation>({
  mode,
  annotations,
  showOutline,
  showAnnotationLabel,
  focusedAnnotation,
  annotationAttrs,
  pixelToCanvas,
}: AnnotationsDrawProps<T>) {
  return annotations.map(annotation => {
    const viewerProps = {
      annotation,
      showOutline,
      focusedAnnotation,
      showAnnotationLabel,
      annotationAttrs,
      pixelToCanvas,
    }

    return (
      <React.Fragment key={annotation.id}>
        {mode === 'polygon' && <PolygonViewer {...viewerProps} />}
        {(mode === 'freeLine' || mode === 'line') && <LineViewer {...viewerProps} />}
      </React.Fragment>
    )
  })
}

export function AnnotationViewer<T extends Annotation>({
  style,
  width,
  height,
  annotations,
  className,
  focusedAnnotation,
  mode = 'polygon',
  showOutline = false,
  showAnnotationLabel = false,
  annotationAttrs,
}: AnnotationViewerProps<T>): JSX.Element {
  const svgRef = useRef<SVGSVGElement>(null)
  const { pixelToCanvas, enabledElement } = useOverlayContext()

  return (
    <svg ref={svgRef} width={width} height={height} style={{ ...svgStyle.default, ...style }} className={className}>
      {annotations.length === 0 || !enabledElement
        ? null
        : AnnotationsDraw({
            mode,
            annotations,
            focusedAnnotation,
            showOutline,
            showAnnotationLabel,
            pixelToCanvas,
            annotationAttrs,
          })}
    </svg>
  )
}
