import React, { useEffect } from 'react'
import ViewContext, { ContextDefaultValue } from '../Context'
import { ViewportContextProvider } from '../Context/Viewport'
import { DICOMImageViewer, DICOMImagesViewer, WebImageViewer } from '../Viewer'
import { handleError } from '../utils/common'
import { cornerstoneMessage, viewportMessage } from '../utils/messageService'
import CircularProgress from '../components/CircularProgress'
import { Viewer, ContextProp, WithChildren, Viewport } from '../types'
import useFrame, { UseFrame } from './useFrame'

export default function useInsightViewer(
  {
    onError = handleError,
    Progress = CircularProgress,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setHeader = _request => {},
    images = [],
  }: Partial<ContextProp> & {
    images?: string[]
  } = {
    ...ContextDefaultValue,
    images: [],
  }
): {
  DICOMImageViewer: Viewer
  WebImageViewer: Viewer
  useFrame: UseFrame
  setViewport: typeof viewportMessage.sendMessage
} {
  function DICOMImageViewerWithContent({
    imageId,
    children,
  }: WithChildren<{
    imageId: string
    viewport?: Viewport
  }>): JSX.Element {
    return (
      <ViewContext.Provider value={{ onError, Progress, setHeader }}>
        {images.length > 1 ? (
          <DICOMImagesViewer imageId={imageId} images={images}>
            {children}
          </DICOMImagesViewer>
        ) : (
          <DICOMImageViewer imageId={imageId}>{children}</DICOMImageViewer>
        )}
      </ViewContext.Provider>
    )
  }

  function WebImageViewerWithContent({
    imageId,
    children,
  }: WithChildren<{
    imageId: string
    viewport?: Viewport
  }>): JSX.Element {
    return (
      <ViewContext.Provider value={{ onError, Progress, setHeader }}>
        <WebImageViewer imageId={imageId}>{children}</WebImageViewer>
      </ViewContext.Provider>
    )
  }

  useEffect(() => {
    cornerstoneMessage.sendMessage(true)

    return () => {
      cornerstoneMessage.sendMessage(false)
    }
  }, [])

  return {
    DICOMImageViewer: DICOMImageViewerWithContent,
    WebImageViewer: WebImageViewerWithContent,
    useFrame,
    setViewport: viewportMessage.sendMessage,
  }
}
