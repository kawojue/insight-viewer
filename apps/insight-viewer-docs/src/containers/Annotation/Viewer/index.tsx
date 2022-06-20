/* eslint-disable import/no-unresolved */
import React, { useState, ChangeEvent } from 'react'
import { Box, Switch, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { Resizable } from 're-resizable'
import InsightViewer, {
  useAnnotation,
  useImage,
  useViewport,
  AnnotationOverlay,
  AnnotationMode,
  Annotation,
} from '@lunit/insight-viewer'
import { IMAGES } from '../../../const'
import { FREELINE_ANNOTATIONS } from '../../../../mocks/freeLines'
import { POLYGON_ANNOTATIONS } from '../../../../mocks/polygons'
import { LINE_ANNOTATIONS } from '../../../../mocks/lines'
import { TEXT_ANNOTATIONS } from '../../../../mocks/texts'

export type InitialAnnotations = {
  [mode in AnnotationMode]: Annotation[]
}

const INITIAL_ANNOTATIONS: InitialAnnotations = {
  line: LINE_ANNOTATIONS,
  freeLine: FREELINE_ANNOTATIONS,
  polygon: POLYGON_ANNOTATIONS,
  text: TEXT_ANNOTATIONS,
  // TODO: Changed the mock data when adding Circle mode
  circle: POLYGON_ANNOTATIONS,
}

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
} as const

/** Mock svg Size */
const DEFAULT_SIZE = { width: 700, height: 700 }

function AnnotationViewerContainer(): JSX.Element {
  const [annotationMode, setAnnotationMode] = useState<AnnotationMode>('polygon')
  const [isEdit, setIsEdit] = useState(false)
  const [isShowLabel, setIsShowLabel] = useState(false)
  const { loadingState, image } = useImage({
    wadouri: IMAGES[11],
  })
  const { viewport, setViewport } = useViewport()
  const { annotations, hoveredAnnotation, selectedAnnotation, removeAnnotation, hoverAnnotation, selectAnnotation } =
    useAnnotation({
      initialAnnotation: INITIAL_ANNOTATIONS[annotationMode],
    })

  const handleEditModeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsEdit(event.target.checked)
  }

  const handleShowLabelModeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsShowLabel(event.target.checked)
  }

  const handleAnnotationModeChange = (mode: AnnotationMode) => {
    setAnnotationMode(mode)
  }

  return (
    <Box data-cy-loaded={loadingState}>
      <Box>
        edit mode <Switch onChange={handleEditModeChange} isChecked={isEdit} />
      </Box>
      <Box>
        show label <Switch onChange={handleShowLabelModeChange} isChecked={isShowLabel} />
      </Box>
      <RadioGroup onChange={handleAnnotationModeChange} value={annotationMode}>
        <Stack direction="row">
          <p style={{ marginRight: '10px' }}>Select Head mode</p>
          <Radio value="polygon">Polygon</Radio>
          <Radio value="line">line</Radio>
          <Radio value="freeLine">Free Line</Radio>
          <Radio value="text">Text</Radio>
          <Radio value="circle">Circle - Not implemented yet</Radio>
        </Stack>
      </RadioGroup>
      <Resizable style={style} defaultSize={DEFAULT_SIZE}>
        <InsightViewer image={image} viewport={viewport} onViewportChange={setViewport}>
          {loadingState === 'success' && (
            <AnnotationOverlay
              width={700}
              height={700}
              annotations={annotations}
              hoveredAnnotation={hoveredAnnotation}
              selectedAnnotation={selectedAnnotation}
              mode={annotationMode}
              showAnnotationLabel={isShowLabel}
              onFocus={isEdit ? hoverAnnotation : undefined}
              onRemove={isEdit ? removeAnnotation : undefined}
              onSelect={selectAnnotation}
            />
          )}
        </InsightViewer>
      </Resizable>
    </Box>
  )
}

export default AnnotationViewerContainer
