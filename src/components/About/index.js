import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faNodeJs,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    // wrap setTimeout in async wait function to fix useEffect 'must return a cleanup function or nothing Error'
    async function wait() {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }
    wait()
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm looking for a position as an web developer. My career goal as a
            software developer is to become an expert in a programming languages
            JavaScript, Typescript , master them and other frameworks (React.js,
            Node.js, Express.js)
          </p>
          <p>
            I'm quietly confident, naturally curious person and perpetually
            working on improving my skills and learning new designs.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of three lovely kids, good husband, a MtG Card game
            fanatic, JavaScript enthusiast, and someone who cares what it does!!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faJsSquare} />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
