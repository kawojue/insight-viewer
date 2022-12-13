import { useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Base from './Base'
import Custom from './Custom'
import Renewal from './Renewal'

export default function App(): JSX.Element {
  const [active, setActive] = useState(0)

  function handleChange(index: number): void {
    setActive(index)
  }

  return (
    <Tabs isLazy onChange={handleChange}>
      <TabList>
        <Tab>Base Interaction</Tab>
        <Tab className="custom-tab">Custom Interaction</Tab>
        <Tab className="renewal-tab">Renewal Interaction</Tab>
      </TabList>

      <TabPanels>
        <TabPanel p={0} pt={6}>
          {active === 0 && <Base />}
        </TabPanel>
        <TabPanel p={0} pt={6}>
          {active === 1 && <Custom />}
        </TabPanel>
        <TabPanel p={0} pt={6}>
          {active === 2 && <Renewal />}
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
