import React from 'react'
import '../App.css';
import '../css/header.css'
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
    
    return (
        <>
        <div  className="navigation" >
            <div
                className="header robotoLight"
            >
                { navs.map((nav) => 
                    <div
                        className='headerBttn'
                        key={nav.title}
                    >
                        <a href={nav.href}>{nav.title}</a>
                    </div>
                )}
            </div> 
            <div className='iconBttns'>
                <IconButton 
                    color="primary" 
                    aria-label="linkedIn"
                    href="https://www.linkedin.com/in/ajenaepompey/"
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
        </div>
        </>
    )

}

export default Header