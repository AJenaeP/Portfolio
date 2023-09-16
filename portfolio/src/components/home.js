import { useMediaQuery } from 'react-responsive'
import React from 'react'
import '../css/home.css';
import Container from 'react-bootstrap/Container';
import memoji1 from '../images/memoji.png'
import memoji2 from '../images/memoji2.png'
import Image from 'react-bootstrap/Image'


const Home = () => {
    let xs =  useMediaQuery({minWidth: 300})
    let s =  useMediaQuery({ minWidth: 390})
    let m =  useMediaQuery({ minWidth: 600})
    let l = useMediaQuery({ minWidth: 900})
    let xl = useMediaQuery({ minWidth: 1024})
    let xxl =  useMediaQuery({ minWidth: 1400})

    return(
        <div id="home"
            style={{
                flexDirection: 
                    l ? "row" : "column",
                marginTop:
                    l ? "200px" : "100px"
            }}
        >
            <Container
                style={{
                    marginRight:
                        l ? "90px" : "0",
                    marginBottom:
                        l ? "0" : "20px",
                    width:
                        l ? "500px" : "400px"
                }}
            >
              <span className="title robotoLight">Hello! I'm </span>
              <span className="name robotoBold">A'Jenae Pompey</span>
              <span className="title robotoLight">, </span>
              <div className="title robotoLight">Software Engineer, specializing in Front-End Web and Mobile Development!</div>
            </Container>
            <span 
                className='imageBorder'
                style={{
                    width:
                        m ? "330px" : "230px",
                    height:
                        m ? "330px" : "230px"
                }}
            >
                <Image 
                    src={memoji1} 
                    alt="" 
                    onMouseEnter={(e) => (e.target.src = memoji2)}
                    onMouseOut={(e) => (e.target.src = memoji1)}
                    style={{
                        width:
                            m ? "300px" : "200px",
                        height:
                            m ? "300px" : "200px"
                    }}
                />
            </span>

        </div>
    )

}

export default Home