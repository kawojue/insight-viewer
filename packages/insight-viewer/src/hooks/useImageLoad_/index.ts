import { useState, useEffect } from 'react'
import {
  loadImage as cornerstoneLoadImage,
  CornerstoneImage,
} from '../../utils/cornerstoneHelper'
import getHttpClient from '../../utils/httpClient'
import { formatError } from '../../utils/common'
import { ViewerProp, RequestInterceptor } from '../../types'
import { LOADING_STATE } from './const'
import { LoadingState } from './types'

type DefaultGetImage = (arg: {
  imageId: string
  requestInterceptor: RequestInterceptor
}) => Promise<CornerstoneImage>
export type GetImage = DefaultGetImage | (() => Promise<CornerstoneImage>)

const _getImage: DefaultGetImage = async ({ imageId, requestInterceptor }) => {
  try {
    return await cornerstoneLoadImage(imageId, {
      loader: getHttpClient(requestInterceptor),
    })
  } catch (e) {
    throw formatError(e)
  }
}

/**
 * If successful, return cornerstone image.
 * If not successful, throw error.
 * getImage is pluggable for unit test.
 */
export async function loadImage({
  imageId,
  requestInterceptor,
  onError,
  getImage = _getImage,
}: Required<ViewerProp> & {
  getImage?: GetImage
  imageId: string
}): Promise<CornerstoneImage> {
  try {
    return await getImage({
      imageId,
      requestInterceptor,
    })
  } catch (e) {
    onError(e)
    throw e
  }
}

export default function useImageLoad_({
  imageId,
  requestInterceptor,
  setLoader,
  onError,
  setLoadingState,
}: Required<ViewerProp> & {
  imageId: string
  setLoader: () => Promise<boolean>
  setLoadingState: React.Dispatch<React.SetStateAction<LoadingState>>
}): CornerstoneImage | undefined {
  const [hasLoader, setHasLoader] = useState(false)
  const [image, setImage] = useState<CornerstoneImage>()

  // eslint-disable-next-line no-extra-semi
  ;(async function asyncLoad(): Promise<void> {
    if (!hasLoader) setHasLoader(await setLoader())
  })()

  useEffect(() => {
    if (!hasLoader) return
    setLoadingState(LOADING_STATE.LOADING)

    loadImage({
      imageId,
      requestInterceptor,
      onError,
    })
      .then(res => {
        setLoadingState(LOADING_STATE.SUCCESS)
        setImage(res)
      })
      .catch(() => setLoadingState(LOADING_STATE.FAIL))
  }, [hasLoader, imageId, requestInterceptor, onError, setLoadingState])

  return image
}
