import PropTypes from 'prop-types'

const PageTitle = ({ title }) => {
  return (
    <div className='page-title--container'>
      <h1 className="page-title">{title}</h1>
    </div>
  )
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default PageTitle