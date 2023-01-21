import { ReactComponent as IconMusic } from "../images/icon-music.svg"

import './Plan.scss'

const Plan = () => {
  return (
    <div className="plan">
      <IconMusic />
      <div className="purchase-type">
        <p className="time-type">Annual Plan</p>
        <p className="price">$59.99/year</p>
      </div>
      <a href="#" className="change-plan">Change</a>
    </div>
  )
}

export default Plan