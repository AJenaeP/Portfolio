import React from "react"
import Container from "react-bootstrap/Container"
import '../css/work.css'
import dse from '../images/dse.png'
import dsePhone from '../images/dsePhone.png'

import Carousel from 'react-bootstrap/Carousel';


const Work = () => {

    return(
        <div id="work">
            <Container>
                <span id="work-anchor" className="title robotoBoldItalic"
                >Work</span>
                <div className="Delta">
                    <div className="description">
                        <div className="robotoBold" style={{fontSize: '40px'}}>
                            Delta Air Lines
                        </div>
                        <div className="robotoLight" style={{fontSize: '20px'}}>
                            Responsible for creating Delta's new landing page when accessing free wifi onboard (2023).
                        </div>
                        <div className="robotoLight" style={{fontSize: '20px'}}>
                            <span className="robotoSemiBold ">Role: </span>
                            Front-end Developer
                        </div>
                        <div className="robotoLight" style={{fontSize: '20px'}}>
                            <span className="robotoSemiBold ">Tools: </span>
                            Angular, HTML, CSS, TypeScript, NodeJs, Docker, Jenkins, Jest, GitHub, AWS, Visual Studio
                        </div>
                    </div>
                    <div className="carouselBox">
                        <Carousel>
                            <Carousel.Item>
                                <img 
                                    src={dsePhone} 
                                    alt="" 
                                    style={{
                                        width: '250px',
                                        height: '500px',

                                    }}
                                />  
                            </Carousel.Item>
                            <Carousel.Item>
                                <img 
                                    src={dse} 
                                    alt=""
                                    style={{
                                        width: "550px"
                                    }}
                                />                            
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </Container>
            
        </div>
    )
}

export default Work