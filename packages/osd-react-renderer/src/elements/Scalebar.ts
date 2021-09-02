import OpenSeadragon from 'openseadragon'
import '../plugins/OpenSeadragonScalebar'
import { ScalebarLocation, ScalebarProps } from '../types'
import Base from './Base'

declare module 'openseadragon' {
  interface Viewer {
    scalebar: (option: ScalebarProps) => void
  }
}

const defaultScalebarOptions: ScalebarProps = {
  barThickness: 3,
  color: '#443aff',
  fontColor: '#53646d',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  pixelsPerMeter: 0,
  location: ScalebarLocation.BOTTOM_RIGHT,
  stayInsideImage: true,
}

class Scalebar extends Base {
  options: ScalebarProps = defaultScalebarOptions

  set parent(p: Base | null) {
    this._parent = p
    this._parent?.viewer.scalebar(this.options)
  }

  constructor(viewer: OpenSeadragon.Viewer, props: ScalebarProps) {
    super(viewer)
    this.options = { ...defaultScalebarOptions, ...props }
  }

  commitUpdate(props: ScalebarProps): void {
    this.options = { ...defaultScalebarOptions, ...props }
    this._parent?.viewer.scalebar(this.options)
  }
}
export default Scalebar