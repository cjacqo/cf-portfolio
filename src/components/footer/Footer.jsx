import './styles.scss'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const SocialContainer = ({ social, link, icon }) => {
  return (
    <div className={`social ${social}-social`}>
      <a href={link} target='_blank' rel="noreferrer">
        <FontAwesomeIcon icon={icon} />
      </a>
    </div>
  )
}

const Footer = () => {
  return (
    <div className='footer--container'>
      <SocialContainer social={'github'} link={'https://github.com/cjacqo'} icon={faGithub} />
      <SocialContainer social={'twitter'} link={'https://twitter.com/cjacqo'} icon={faTwitter} />
      <SocialContainer social={'linkedin'} link={'https://www.linkedin.com/in/jayden-cipriano-527542217/'} icon={faLinkedin} />
    </div>
  )
}

SocialContainer.propTypes = {
  social: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired
}

export default Footer