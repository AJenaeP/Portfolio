import React from 'react'
import '../css/home.css';
import Container from 'react-bootstrap/Container';
import memoji1 from '../images/memoji.png'
import memoji2 from '../images/memoji2.png'
import Image from 'react-bootstrap/Image'


const Home = () => {

    return(
        <div id="home">
            <Container>
              <span className="title robotoLight">Hello! I'm </span>
              <span className="name robotoBold">A'Jenae Pompey</span>
              <span className="title robotoLight">, </span>
              <div className="title robotoLight">Software Engineer, specializing in Front-End Web and Mobile Development!</div>
            </Container>
            <span className='imageBorder'>
                <Image 
                    className='memoji'
                    src={memoji1} 
                    alt="" 
                    onMouseEnter={(e) => (e.target.src = memoji2)}
                    onMouseOut={(e) => (e.target.src = memoji1)}
                />
            </span>

        </div>
    )

}

export default Home