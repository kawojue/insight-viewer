import OSDViewer from '@lunit/osd-react-renderer'
import { useCallback, useState } from 'react'

function App() {
  const [num, setNum] = useState(0)

  const onZoom = useCallback(() => {
    setNum(10)
    console.log(num)
  }, [num])

  return (
    <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0 }}>
      <OSDViewer options={{}}>
        <viewport zoom={10} rotation={90} onZoom={onZoom} />
        <tiledImage url="https://image-pdl1.api.opt.scope.lunit.io/slides/images/dzi/41f49f4c-8dcd-4e85-9e7d-c3715f391d6f/3/122145f9-7f68-4f85-82f7-5b30364c2323/D_202103_Lunit_NSCLC_011_IHC_22C3.svs" />
      </OSDViewer>
    </div>
  )
}

export default App
