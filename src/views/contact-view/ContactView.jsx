import './styles.scss'
import { PageContainer, PageWrapper } from '../../components/container/Container'
import PageTitle from '../../components/pagetitle/PageTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const ContactView = () => {
  return (
    <PageContainer>
      <PageWrapper>
        <PageTitle title='Contact' />
        <div className="contact-section--container">
          <div className="name--container">
            <h4>Jayden Cipriano</h4>
          </div>
          <div className="email--container">
            <a href="mailto:contact.jayden.cipriano@gmail.com">contact.jayden.cipriano@gmail.com</a>
          </div>
          <div className="socials--container">
            <a href="https://github.com/cjacqo" target='_blank' rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#" target='_blank' rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" target='_blank' rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </PageWrapper>
    </PageContainer>
  )
}

export default ContactView