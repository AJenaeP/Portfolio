import React from 'react'
import Container from 'react-bootstrap/Container';
import '../css/about.css'

const About = () => {

    return(
        <div id="about">
            <Container>
                <span id="about-anchor" className="title robotoBoldItalic">
                    About Me
                </span>
                <div 
                    className='descriptionBorder'
                >
                    <span className="description robotoLight"
                    >
                        <div>
                        I am a Senior at Kennesaw State University where I am majoring in Software Engineering, with a graduation date of December 2023.
                        </div>
                        <div>
                        I have more than 1 year of experience working on front-end web applications in a professional environment.
                        </div>
                        <div>
                        In my freetime, I enjoy creating mobile applications for iOS and Android devices.
                        </div>
                    </span>
                </div>
            </Container>
        </div>
    )
}

export default About
