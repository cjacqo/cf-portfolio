import './styles.scss'
import { Link } from 'react-router-dom'
import { PageContainer } from '../../components/container/Container'
import Me from '../../assets/me/profile-photo.jpg'

const HomeView = () => {
  return (
    <PageContainer>
      <div className='header__content-wrapper'>
        <div className='name-container header__item-wrapper'>
          <h1>Jayden<br />Cipriano</h1>
          <img src={Me} alt='Jayden Cipriano' />
        </div>
        <hr />
        <div className='about-container header__item-wrapper'>
          <p>I am a fullstack web developer / designer, currently based in<br />Las Vegas, Nevada.</p>
          {/* <p>Fullstack Web Developer<br /><span className='slash'>/</span><br />Designer</p> */}
        </div>
        <div className='section__content-wrapper'>
          <Link
            className='work-button'
            to={'/cf-portfolio/work'}>
              See Work
          </Link>
        </div>
      </div>
    </PageContainer>
  )
}

export default HomeView