import { LOADING_STATE } from './const'
import { LoadingState } from './types'
import { CornerstoneImage } from '../../utils/cornerstoneHelper'

interface ImageLoadState {
  loadingState: LoadingState
  image: CornerstoneImage | undefined
}

interface ImageLoadAction {
  type: LoadingState
  payload?: CornerstoneImage
}

export function imageLoadReducer(
  state: ImageLoadState,
  action: ImageLoadAction
): ImageLoadState {
  const { type, payload } = action

  switch (type) {
    case LOADING_STATE.LOADING:
      return {
        ...state,
        loadingState: LOADING_STATE.LOADING,
      }
    case LOADING_STATE.SUCCESS:
      return {
        loadingState: LOADING_STATE.SUCCESS,
        image: payload,
      }
    case LOADING_STATE.FAIL:
      return {
        ...state,
        loadingState: LOADING_STATE.FAIL,
      }
    default:
      return state
  }
}

export const INITIAL_IMAGE_LOAD_STATE = {
  loadingState: LOADING_STATE.INITIAL,
  image: undefined,
}
