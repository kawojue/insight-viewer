import { Box, Stack } from '@chakra-ui/react'
import ImageViewer, {
  useImage,
  useMultiframeImages,
} from '@lunit/insight-viewer'
import CustomProgress from '../../components/CustomProgress'
import { ViewerWrapper } from '../../components/Wrapper'

const IMAGE_ID = 'wadouri:/msw/no-content-length/1'

const IMAGES = [
  'wadouri:/msw/no-content-length/2',
  'wadouri:/msw/no-content-length/3',
  'wadouri:/msw/no-content-length/4',
]

export default function Custom(): JSX.Element {
  const { image } = useImage({
    imageId: IMAGE_ID,
  })
  const { frame, images } = useMultiframeImages({
    imageIds: IMAGES,
  })

  return (
    <Box>
      <Stack direction="row" spacing="24px">
        <ViewerWrapper>
          <ImageViewer image={image} Progress={CustomProgress} />
        </ViewerWrapper>
        <ViewerWrapper>
          <ImageViewer image={images[frame]} Progress={CustomProgress} />
        </ViewerWrapper>
        å
      </Stack>
    </Box>
  )
}
