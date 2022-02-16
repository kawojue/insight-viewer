import { Box, Text } from '@chakra-ui/react'
import InsightViewer, { useImage } from '@lunit/insight-viewer'
import useImageSelect from './useImageSelect'
import CustomProgress from '../../components/CustomProgress'
import { ViewerWrapper } from '../../components/Wrapper'

export default function ImageSelectableViewer(): JSX.Element {
  const { ImageSelect, selected } = useImageSelect()
  const { loadingState, image } = useImage({
    wadouri: selected,
    loaderOptions: {
      webWorkerManagerOptions: {
        webWorkerTaskPaths: [
          'http://localhost:3000/workers/610.bundle.min.worker.js',
          'http://localhost:3000/workers/888.bundle.min.worker.js',
        ],
        taskConfiguration: {
          decodeTask: {
            initializeCodecsOnStartup: false,
          },
        },
      },
    },
  })

  return (
    <>
      <Box mb={6}>
        <ImageSelect />
      </Box>

      <Box mb={3}>
        <Text>
          <b data-cy-loaded={loadingState}>{loadingState}</b>
          {image && <span data-cy-image> ({image.imageId})</span>}
        </Text>
      </Box>

      <ViewerWrapper>
        <InsightViewer image={image} Progress={CustomProgress} />
      </ViewerWrapper>
    </>
  )
}
