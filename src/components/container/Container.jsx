import './styles.scss'
import PropTypes from 'prop-types'

const AppContainer = ({ children }) => {
  return (
    <div className="app--container">
      {children}
    </div>
  )
}

const PageContainer = ({ children }) => {
  return (
    <div className="page--container">
      {children}
    </div>
  )
}

const PageWrapper = ({ children }) => {
  return (
    <div className="page--wrapper">
      {children}
    </div>
  )
}

AppContainer.propTypes = {
  children: PropTypes.any.isRequired
}

PageContainer.propTypes = {
  children: PropTypes.any.isRequired
}

PageWrapper.propTypes = {
  children: PropTypes.any.isRequired
}

export {
  AppContainer,
  PageContainer,
  PageWrapper
}