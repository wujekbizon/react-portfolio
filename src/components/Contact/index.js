import './index.scss'
import Loader from 'react-loaders'
import { useState, useEffect, useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters/index'
import emailjs from '@emailjs/browser'
import { MapContainer, Popup, TileLayer, Marker } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    // wrap setTimeout in async wait function to fix useEffect 'must return a cleanup function or nothing Error'
    async function wait() {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }
    wait()
  }, [])

  const sendEmail = (event) => {
    event.preventDefault()

    emailjs
      .sendForm(
        'service_5vl83fl',
        'template_n1gdd0o',
        form.current,
        '_9vPuVNIwteDnNRF2'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in any job offer as an web developer or intern. Feel
            free to contact with me using below form.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Grzegorz Wolfinger,
          <br />
          Poland,
          <br />
          Zamieście 99 <br />
          34-650 Tymbark <br />
          <span>grzegorz.wolfinger@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[49.7087783, 20.3086625]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[49.7087783, 20.3086625]}>
              <Popup>
                Greg lives here, want some cup of coffee? Come on in :)
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
