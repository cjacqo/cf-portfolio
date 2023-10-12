import './styles.scss'
import PropTypes from 'prop-types'
import { PageContainer, PageWrapper } from '../../components/container/Container'
import MeetUp from '../../assets/work/meet-up.png'
import Pokedex from '../../assets/work/pokedex.png'
import MoviesAPI from '../../assets/work/moviesapi.png'
import ListOMovies from '../../assets/work/listomovies.png'
import ChatApp from '../../assets/work/chatapp.png'
import PageTitle from '../../components/pagetitle/PageTitle'

const workItems = [
  {
    id: 0,
    img: MeetUp,
    title: 'Meet Up',
    description: 'Meet Up is an app that makes use of the Google Calendar API to display a list of events in multiple cities. Users are first prompted to authorize access via OAuth and then are permited to filter events by city, expand an event\'s details and view charts that show genres of events, as well as total number of events within a city. It is a PWS and was built using a TDD approach with a little BDD.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Google Calendar API', 'Recharts'],
    githubLink: 'https://github.com/cjacqo/meet-up-2',
    projectLink: 'https://cjacqo.github.io/meet-up-2'
  },
  {
    id: 1,
    img: Pokedex,
    title: 'Pokedex App',
    description: 'Pokedex is a simple application that uses the Poke API to list pokemon in a card view. Each card will expand to showcase more details about the selected pokemon, such as it\'s evolutions, health, and moves. The pokemon are organized by type and can be searched by name. Also, I created a game, just like the game on each episode, for users to guess a pokemon based on the outline of an image.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/cjacqo/pokedex-app',
    projectLink: 'https://cjacqo.github.io/pokedex-app'
  },
  {
    id: 2,
    img: MoviesAPI,
    title: 'Movies API',
    description: 'This is the server-side component of a my movies application. It is a REST API used to access a list of movies, users and more. It will return a list of all movies to a user, data of a movie (description, genre, director, image), information about a genre, information about a director, allow users to register/deregister, and allow users to add/remove movies from their list of favorites.',
    technologies: ['Node', 'Express', 'MongoDB', 'Mongoose', 'Heroku'],
    githubLink: 'https://github.com/cjacqo/movie_api',
    projectLink: 'https://list-o-movies-311c22237892.herokuapp.com/documentation.html'
  },
  {
    id: 3,
    img: ListOMovies,
    title: 'List O Movies',
    description: 'List O Movies connects to my REST API. This application allows users to sign-up, view a list of movies in a card view, add/remove movies from their favorites, make changes to their account and delete their account. Each movie includes a brief description, directors of the movie and the genre. The front-end is hosted on Netlify while the REST API is hosted on Heroku.',
    technologies: ['Bootstrap', 'React', 'React-Dom', 'React-Router', 'Mongoose', 'Express'],
    githubLink: 'https://github.com/cjacqo/listOMovies',
    projectLink: 'https://list-o-movies.netlify.app/login'
  },
  {
    id: 4,
    img: ChatApp,
    title: 'Chat App',
    description: 'A mobile application built with React Native. The main purpose of this app is to provide users with the ability to send and receive messages that can either be text, an image or their location. It was built using React Native and Firestore for the database and authorization. Users are asked to sign up upon first opening the app, then are able to send/receive messages.',
    technologies: ['React Native', 'React Native Gifted Chat', 'React Native Maps', 'Firestore DB', 'Firestore Authentications', 'Expo', 'AsyncStorage'],
    githubLink: 'https://github.com/cjacqo/chat-app'
  }
]

const WorkItem = (item) => {
  const { img, title, description, technologies, githubLink, projectLink } = item.item
  return (
    <div className='work-item--container'>
      <div className="content--container img--container">
        <img src={img} alt={title} />
      </div>
      <div className="work-item-info--container">
        <div className="content--container work-item-title--container">
          <h4 className='work-item--title'>{title}</h4>
        </div>
        <div className="content--container description--container">
          <p className='work-item--description'>{description}</p>
        </div>
        <div className="content--container technologies--container">
          <div className="technologies-title--container">
            <h6 className="technologies-title">Tech:</h6>
          </div>
          <ul>
          {
            technologies.map((technology, i) => (
              <li key={i}>{technology}</li>
            ))
          }
          </ul>
        </div>
        <div className="content--container links--container">
          <a className='action' href={githubLink} target='_blank' rel="noreferrer">View on Github</a>
          {
            projectLink && <a className='action' href={projectLink} target='_blank' rel="noreferrer">View Project Live</a>
          }
        </div>
      </div>
    </div>
  )
}

const WorkView = () => {
  return (
    <PageContainer>
      <PageWrapper>
        <PageTitle title='Work' />
        <div className="work--container">
          <ul className="work--list">
          {
            workItems.map(item => (
              <WorkItem key={item.id} item={item} />
            ))
          }
          </ul>
        </div>
      </PageWrapper>
    </PageContainer>
  )
}

WorkItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default WorkView