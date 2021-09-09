import { Box, Heading } from '@chakra-ui/react'
import InsightViewer, { useImage } from '@lunit/insight-viewer'
import CodeBlock from '../../components/CodeBlock'
import { ViewerWrapper } from '../../components/Wrapper'
import { CODE } from './Code'
import { CODE_SANDBOX } from '../../const'

const IMAGE_ID = 'wadouri:/msw/with-jwt'
const requestInterceptor = (request: Request) => {
  request.headers.set('Authorization', 'Bearer blahblah')
}

export default function WithJwt(): JSX.Element {
  const { image } = useImage({
    imageId: IMAGE_ID,
    requestInterceptor,
  })

  return (
    <>
      <Box mb={6}>
        <Heading as="h4">jwt header</Heading>
      </Box>
      <Box>
        <ViewerWrapper>
          <InsightViewer image={image} />
        </ViewerWrapper>
        <CodeBlock code={CODE} codeSandbox={CODE_SANDBOX.httpHeader} />
      </Box>
    </>
  )
}
