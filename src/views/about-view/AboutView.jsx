import './styles.scss'
import { PageContainer, PageWrapper } from '../../components/container/Container'
import PropTypes from 'prop-types'
import PageTitle from '../../components/pagetitle/PageTitle'


const SkillSection = ({ title, id, items }) => {
  return (
    <div className="content--wrapper" id={id}>
      <div className="skill--section">
        <div className="skill-title--wrapper">
          <h3>{title}</h3>
        </div>
        <div className="skills--wrapper">
          <ul className='skills--list'>
            {
              items.map((item, i) => (
                <li key={i} className='skills--item'>{item}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

const AboutView = () => {
  return (
    <PageContainer>
      <PageWrapper>
        <PageTitle title='About Me' />
        <div className='about-me--container'>
          <div className="about-me--wrapper">
            <div className="title--wrapper">
              <h2>BIO</h2>
            </div>
            <p className='about-me--content'>
              My name is Jayden Cipriano. I am a Front End Web Developer. I have been developing 
              and designing websites using HTML, CSS and JavaScript, as well as frameworks such as 
              React for almost 5 years. My introduction to web development began when I was 20, while 
              working at an advertising agency in Las Vegas, Nevada. My job required me to familiarize 
              myself with HTML and CSS in order to make adjustments to our client&apos;s emails for their 
              marketing campaigns. That is where my passion for this field began and I haven&apos;t stopped 
              since. Between then and now, I have worked on many personal sites as well as for a few clients. 
              My skills are listed below.
            </p>
          </div>
        </div>
        <div className="skills--container">
          <div className="skills-section--wrapper">
            <div className="title--wrapper" id="skillsTitleWrapper">
              <h2>Skills</h2>
            </div>
            <SkillSection
              title={'Frontend Development'}
              id={'frontEndDev'}
              items={['React', 'Angular', 'TypeScript', 'JavaScript']} />
            <SkillSection
              title={'Backend Development'}
              id={'backEndDev'}
              items={['Node', 'Express']} />
            <SkillSection
              title={'Databases'}
              id={'databases'}
              items={['MongoDB', 'SQL', 'PostgreSQL']} />
            <SkillSection
              title={'Mobile Development'}
              id={'mobileDev'}
              items={['React Native']} />
          </div>
        </div>
      </PageWrapper>
    </PageContainer>
  )
}

SkillSection.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
}

export default AboutView