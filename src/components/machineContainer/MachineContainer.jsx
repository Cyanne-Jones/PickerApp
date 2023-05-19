import './MachineContainer.css'
import { Chassis } from '../chassis/Chassis'
import { HandleContainer } from '../handleContainer/HandleContainer'

export const MachineContainer = () => {
  return (
  <div className='machineContainer'>
    <Chassis />
    <HandleContainer />
  </div>)
}