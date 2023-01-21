import { ReactComponent as IllustrationMusic } from '../images/illustration-hero.svg'
import Button from './Button'

import './Card.scss'
import LinkButton from './LinkButton'
import Plan from './Plan'

const Card = () => {
  return (
    <div className="card">
      {/* 410 - 320 x 630 50 */}
      <IllustrationMusic />
      <div className='card-content'>
        <h2>Order Summary</h2>
        <p>
          You can now listen to millions of songs,<br />
          audiobooks, and postcasts on any device anywhere you like!
        </p>
        <Plan />
        <Button>Proceed to Payment</Button>
        <LinkButton>Cancel Order</LinkButton>
      </div>
    </div>
  )
}

export default Card