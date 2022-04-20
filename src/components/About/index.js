import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
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
    </div>
  )
}

export default About
