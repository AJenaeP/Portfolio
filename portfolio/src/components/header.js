import React from 'react'
import '../App.css';
import '../css/header.css'
import { useMediaQuery } from 'react-responsive'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';

const Header = () => {
    const navs = [
        {
            title:  "About",
            href: '#about-anchor'
        },
        {
            title: "Work",
            href: "#work-anchor"
        },
        {
            title: "Skills",
            href: "#skills-anchor"
        },
        {
            title: "Contact",
            href: "#contact-anchor"
        }
    ]

    let m =  useMediaQuery({ minWidth: 600})
    let l = useMediaQuery({ minWidth: 900})

    return (
        <>
      <div  className="navbar">
        <div
            className="header robotoLight"
            style={{
                fontSize: 
                    l ? '30px' : '25px',   
                flexDirection: 
                    m ? "row" : "column"
            }}
        >
            { navs.map((nav) => 
                <div
                    style={{
                        marginRight: 
                            l ? "15px" : "20px",
                        marginBottom:
                            l ? "0" : "10px"
                    }}
                >
                    <a href={nav.href}>{nav.title}</a>
                </div>
            )

            }
        </div>
        <IconButton 
            color="primary" 
            aria-label="linkedIn"
            href="https://www.linkedin.com/in/ajenaepompey/"
            sx={{
                color: 'white',
                justifyContent: 'flex-end',
                left: '200px',
            }}
        >
            <LinkedInIcon
                size="large"
                sx={{
                    width: '40px',
                    height: '40px'
                }}
            />
        </IconButton>
        <IconButton 
            color="primary" 
            aria-label="github"
            href="https://github.com/AJenaeP"
            sx={{
                color: 'white',
                justifyContent: 'flex-end',
                left: '200px',
            }}
        >
            <GitHubIcon
                size="large"
                sx={{
                    width: '40px',
                    height: '40px'
                }}
            />
        </IconButton>
    </div>
       
        </>
    )

}

export default Header