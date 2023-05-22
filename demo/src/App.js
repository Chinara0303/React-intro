import logo from './assets/img/China_img.jpeg';
import ribbon from './assets/img/images.jpg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <div className="App pt-5">
      <div className=" container">
        <div className="resume-area">
          <div className='bg'>
            <div className='intro-area d-flex justify-content-evenly'>
              <div className="img-area">
                <img className='img-fluid' src={logo} />
              </div>
              <div className='intro'>
                <h1>Chinara Ibadova</h1>
                <h2>Full stack developer</h2>
                <img className='ribbon img-fluid' src={ribbon}/>
              </div>
            </div>
          </div>

          <div className='main-area'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='contact'>
                  <h3>Contact</h3>
                  <div className='border'></div>
                  <div className='elem'>
                    <FontAwesomeIcon icon={faEnvelope} size="xl" style={{ color: "rgb(10, 27, 105)", }} />
                    <a href='mailto:chibadova@gmail.com'>chibadova@gmail.com</a>
                  </div>
                  <div className='elem'>
                    <FontAwesomeIcon icon={faPhone} size="xl" style={{ color: "rgb(10, 27, 105)", }} />
                    <a href='tel:+994504822164'>+994 50 482 21 64</a>
                  </div>
                  <a href='https://github.com/Chinara0303'><FontAwesomeIcon icon={faGithub} size="2xl" style={{ color: "rgb(10, 27, 105)", }} /></a>
                  <a style={{ marginLeft: "10px" }} href='https://www.linkedin.com/in/cinare-ibadova-5952b724b'><FontAwesomeIcon icon={faLinkedin} size="2xl" style={{ color: "rgb(10, 27, 105)", }} /></a>
                </div>
                <div className='skills mt-5'>
                  <h3>Skills</h3>
                  <div className='border'></div>
                  <ul>
                    <li>C#</li>
                    <li>ASP.NET Core</li>
                    <li>WEB API</li>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>SASS/SCSS</li>
                    <li>Bootstrap</li>
                    <li>JavaScript / ES6 / jQuery</li>
                    <li>Git</li>
                    <li>OOP</li>
                    <li>SOLID Principles</li>
                    <li>Software Architecture</li>
                    <li>SQL</li>
                  </ul>
                </div>
                <div className='lang'>
                  <h3>Languages</h3>
                  <div className='border'></div>
                  <ul>
                    <li>Azerbaijani - Native</li>
                    <li>English - Limited working proficiency</li>
                  </ul>
                </div>
                <div className='edu'>
                  <h3>Education</h3>
                  <div className='border'></div>
                  <p>2017 - 2022</p>
                  <h6>Azerbaijan State Pedagogical University</h6>
                  <p>Mathematics and Informatic Teacher</p>
                  <div className='border'></div>
                  <p>2022 - Present</p>
                  <h6>Code Academy</h6>
                  <p>Full stack developer</p>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='about-me'>
                  <h3>About Me</h3>
                  <div className='border'></div>
                  <p>
                    I studied mathematics and computer science teacher at Azerbaijan State Pedagogical University.
                    I am currently continuing my studies as a full stack developer at Code Academy.
                    I’d be more than happy to discuss with you your project and
                    deliver you high-quality solutions that meet your needs.
                  </p>
                </div>
                <div className='mt-5'>
                  <h3>Experience</h3>
                  <div className='border'></div>
                  <h6>Mathematics and Informatic Teacher - Goychay</h6>
                  <p>January 2020 - March 2022</p>
                  <p>İndividual Tutoring on Mathematics</p>
                  <ul>
                    <li>Experience working with adult learners</li>
                    <li>Understanding of core curriculum and state standards</li>
                    <li>Exceptional leadership skills</li>
                  </ul>
                </div>
                <div className='mt-5'>
                  <h3>Reference</h3>
                  <div className='border'></div>
                  <h5>Cavid Bashirov</h5>
                  <p>Code Academy - Instructor</p>
                  <div className='elem'>
                    <FontAwesomeIcon icon={faEnvelope} size="s" style={{ color: "rgb(10, 27, 105)", }} />
                    <a href='mailto:javidbashirov@gmail.com'>javidbashirov@gmail.com</a>
                  </div>
                  <div className='elem'>
                    <FontAwesomeIcon icon={faPhone} size="s" style={{ color: "rgb(10, 27, 105)", }} />
                    <a href='tel:+994515613883'>+994 51 561 38 83</a>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default App;
