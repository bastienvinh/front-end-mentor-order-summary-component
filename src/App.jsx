import { Fragment } from 'react'
import './App.scss'
import Card from './components/Card'

import BackgroundImage from './images/pattern-background-desktop.png'

function App() {
  return (
    <Fragment>
      <div className='background-image-desktop'>
        <img src={BackgroundImage} />
      </div>
      <Card />
    </Fragment>
  )
}

export default App
