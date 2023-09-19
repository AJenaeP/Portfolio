import React from "react";
import Container from "react-bootstrap/esm/Container";
import '../css/skills.css'
import angular from '../images/angular.svg'
import react from '../images/react.svg'
import html from '../images/html5.svg'
import javascript from '../images/javascript.svg'
import typescript from '../images/typescript.svg'
import css from '../images/css3.svg'
import java from '../images/java.svg'
import spring from '../images/spring.svg'
import python from '../images/python.svg'
import django from '../images/django.svg'
import mysql from '../images/mysql.svg'
import nodejs from '../images/nodejs.svg'
import expressjs from '../images/expressjs.svg'
import docker from '../images/docker.svg'
import jenkins from '../images/jenkins.svg'
import git from '../images/git.svg'
import github from '../images/github.svg'
import aws from '../images/aws.svg'
import office from '../images/office365.svg'
import swift from '../images/swift.svg'
import vsc from '../images/vsc.svg'
import eclipse from '../images/eclipse.svg'
import intellij from '../images/intellij.svg'
import xcode from '../images/xcode.svg'
import jest from '../images/jest.svg'

const Skills = () => {

    const skills = [
        { image: angular, name: "Angular"},
        { image: react, name: "React"},
        { image: html, name: "HTML"},
        { image: javascript, name: "JavaScript"},
        { image: typescript, name: "TypeScript"},
        { image: css, name: "CSS"},
        { image: java, name: "Java"},
        { image: spring, name: "Spring"},
        { image: python, name: "Python"},
        { image: django, name: "Django"},
        { image: mysql, name: "MySQL"},
        { image: nodejs, name: "Node.Js"},
        { image: expressjs, name: "Expess.Js"},
        { image: jest, name: "Jest"},
        { image: docker, name: "Docker"},
        { image: jenkins, name: "Jenkins"},
        { image: git, name: "Git"},
        { image: github, name: "Github"},
        { image: aws, name: "AWS"},
        { image: office, name: "Office 365"},
        { image: swift, name: "Swift"},
        { image: vsc, name: "Visual Studio Code"},
        { image: eclipse, name: "Eclipse"},
        { image: intellij, name: "IntelliJ"},
        { image: xcode, name: "Xode"},
    ]

    return (
        <div id="skills">
            <Container>
                <span id="skills-anchor" className="title robotoBoldItalic">
                    Skills
                </span>
                <div className="skillGrid">
                    { skills.map((skill) => 
                        <>
                            <div className="skillbox" key={skill.name}>
                                <div className="imageBox"><img src={skill.image} alt=""/></div>
                                <div className="robotoBold">{skill.name}</div>
                            </div>
                        </>
                    )}
                </div>
            </Container>
        </div>
    )
}

export default Skills;