import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import '../css/contact.css'
import {TextField, Button} from '@mui/material';
import {useForm} from 'react-hook-form'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';


const Contact = () => {
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const {
        handleSubmit,
    } = useForm(); 

    function handleNameChange(e) {
        setName(e.target.value)
    }
    function handleEmailChange(e) {
        setEmail(e.target.value)
    }
    function handleSubjectChange(e) {
        setSubject(e.target.value)
    }
    function handleMessageChange(e) {
        setMessage(e.target.value)
    }

    const toastifySuccess = () => {
        toast('Email sent!', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,  
            draggable: false,
            className: 'submit-feedback success',
            toastId: 'notifyToast'
        });
    };
    const reset = () => {
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
    }
    const onSubmit = async (e) => {
        try {
            const templateParams = {
                name,
                email,
                subject,
                message
            };
            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_USER_ID
            );
            toastifySuccess()
            reset();
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div id="contact">
            <Container>
                <span id="contact-anchor" className="title robotoBoldItalic"              
                >Contact</span>
                <div className="contactBorder"
                >
                    <span className="robotoBold connect">Lets Connect!
                        <IconButton 
                            color="primary" 
                            aria-label="linkedIn"
                            href="https://www.linkedin.com/in/ajenaepompey/"
                            sx={{
                                color: 'white',
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
                    </span>
                    <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
                        <div className="nameField">
                            <TextField
                                required
                                value={name}
                                name='name'
                                label="Name"
                                type="text"
                                variant="filled"
                                onChange={handleNameChange}
                            />                             
                        </div>
                        <div className="emailField">
                            <TextField
                                required
                                value={email}
                                label="Email"
                                name='email'
                                type="email"
                                variant="filled"
                                onChange={handleEmailChange}
                            /> 
                        </div>
                        <div className="subjectField">
                            <TextField
                                required
                                value={subject}
                                name='subject'
                                label="Subject"
                                type="subject"
                                variant="filled"
                                onChange={handleSubjectChange}
                            /> 
                        </div>
                        <div className="messageField">
                            <TextField
                                required
                                value={message}
                                name='message'
                                label="Message"
                                multiline
                                rows={6}
                                variant="filled"
                                onChange={handleMessageChange}
                            />   
                        </div>    
                        <Button 
                            target="_blank"
                            variant="contained"
                            type="submit"
                        >
                            Send Email
                        </Button>
                    </form>
                </div>
                <ToastContainer/>
            </Container>
        </div> 
    )
}

export default Contact