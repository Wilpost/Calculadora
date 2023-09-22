import PropTypes from 'prop-types'

export const Screen = ({ children }) => {
  return <div className='btn-container'>{children}</div>
}

Screen.propTypes = {
  children: PropTypes.node
}
