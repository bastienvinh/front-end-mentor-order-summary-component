import './LinkButton.scss'

const LinkButton = ({ children }) => {
  return (
    <button className='link-button'>{children}</button>
  )
}

export default LinkButton