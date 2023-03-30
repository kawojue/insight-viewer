/* eslint-disable import/no-unresolved */
import React, { useRef, useState, ChangeEvent, useEffect } from 'react'
import { Box, Switch, Radio, RadioGroup, Stack, Button } from '@chakra-ui/react'
import { Resizable } from 're-resizable'
import InsightViewer, { MeasurementOverlay, useImage, useMeasurement, MeasurementMode } from '@lunit/insight-viewer'
import { useViewport } from '@lunit/insight-viewer/viewport'
import useImageSelect from '../../../components/ImageSelect/useImageSelect'

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
} as const

/** Mock svg Size */
const DEFAULT_SIZE = { width: 700, height: 700 }

function MeasurementDrawerContainer(): JSX.Element {
  const viewerRef = useRef<HTMLDivElement>(null)

  const [measurementMode, setMeasurementMode] = useState<MeasurementMode>('ruler')
  const [isEditing, setIsEditing] = useState(false)
  const [isDrawing, setIsDrawing] = useState(true)

  const { ImageSelect, selected } = useImageSelect()
  const { loadingState, image } = useImage({
    wadouri: selected,
  })

  const { viewport, setViewport } = useViewport({
    image,
    element: viewerRef.current,
  })
  const {
    measurements,
    hoveredMeasurement,
    selectedMeasurement,
    addMeasurement,
    hoverMeasurement,
    removeMeasurement,
    selectMeasurement,
    removeAllMeasurement,
  } = useMeasurement({})

  const handleMeasurementModeClick = (mode: MeasurementMode) => {
    setMeasurementMode(mode)
  }

  const handleEditModeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsEditing(event.target.checked)
  }
  const handleDrawModeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsDrawing(event.target.checked)
  }

  useEffect(() => {
    function handleKeyDown({ code }: KeyboardEvent) {
      if (code === 'KeyD') {
        setIsDrawing((prev) => !prev)
      }
      if (code === 'KeyE') {
        setIsEditing((prev) => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [setIsDrawing, setIsEditing])

  return (
    <>
      <Box>
        <ImageSelect />
      </Box>
      <Box>
        Draw enabled (D) <Switch data-cy-edit={isDrawing} onChange={handleDrawModeChange} isChecked={isDrawing} />
      </Box>
      <Box>
        Edit enabled (E) <Switch data-cy-edit={isEditing} onChange={handleEditModeChange} isChecked={isEditing} />
      </Box>
      <RadioGroup onChange={handleMeasurementModeClick} value={measurementMode}>
        <Stack direction="row">
          <Radio value="ruler">Ruler</Radio>
          <Radio value="area">Area</Radio>
        </Stack>
      </RadioGroup>
      <Button data-cy-name="remove-button" marginBottom="10px" colorScheme="blue" onClick={removeAllMeasurement}>
        remove all
      </Button>

      <Box data-cy-loaded={loadingState} className={`measurement ${measurementMode}`}>
        <Resizable style={style} defaultSize={DEFAULT_SIZE}>
          <InsightViewer viewerRef={viewerRef} image={image} viewport={viewport} onViewportChange={setViewport}>
            {loadingState === 'success' && (
              <MeasurementOverlay
                width={DEFAULT_SIZE.width}
                height={DEFAULT_SIZE.height}
                measurements={measurements}
                selectedMeasurement={selectedMeasurement}
                hoveredMeasurement={hoveredMeasurement}
                onAdd={addMeasurement}
                onFocus={hoverMeasurement}
                onSelect={selectMeasurement}
                onRemove={removeMeasurement}
                isEditing={isEditing}
                isDrawing={isDrawing}
                mode={measurementMode}
                // If no mode is defined, the default value is ruler.
              />
            )}
          </InsightViewer>
        </Resizable>
      </Box>
    </>
  )
}

export default MeasurementDrawerContainer
