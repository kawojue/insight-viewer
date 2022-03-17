import { Annotation } from '../../types'
import { AnnotationViewerProps } from '../AnnotationViewer/AnnotationViewer.types'

export interface AnnotationOverlayProps extends AnnotationViewerProps {
  isDrawing?: boolean
  onFocus?: (annotation: Annotation | null) => void
  onAdd?: (annotation: Annotation) => void
  onRemove?: (annotation: Annotation) => void
  device?: 'all' | 'mouse-only' | 'touch-only' | 'stylus-only' | 'mouse-and-stylus'
}
