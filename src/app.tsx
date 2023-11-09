import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Welcome to ProtoTypeZone</h2>
      <div className="calendarApp--screen-day-a">
        <h3>Today is November, 7</h3>
      </div>
      
      <div className="calendarApp--screen-day-b">
      
      </div>
      
      <br/>
      
      <div className="calendarApp--screen-month-a">
        <h3>Welcome to November view a</h3>
        
        <div>
          
        </div>
      </div>
    </>
  )
}
