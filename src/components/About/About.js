import React, { Component } from 'react'
import classes from "./About.css";
import Me from "./menobg.png";
import Title from "../Title/Title";
export default class About extends Component {
  render() {
    return (
      <div className={classes.Container}>
        <Title name="Github Link for Project"/>
        <p>
          My passion for software lies with dreaming up ideas and making
          them come true with elegant interfaces. I take great care in the
          experience, architecture, and code quality of the things I build.
          As an aspiring software developer, I&apos;m driven by the challenge 
          of turning complex ideas into elegant, functional solutions. Writing clean,
          efficient code and building intuitive applications feels like
          composing a masterpiece — each line of code is like a note,
          contributing to the bigger picture. But outside of coding
          I&apos;m also an aspiring guitarist, constantly learning new chords and refining my
          skills. The precision, creativity, and patience required to master the guitar
          mirror the same qualities I bring to software development.
          Whether I&apos;m debugging a tricky issue or perfecting a solo,
          I find joy in the process of growth, problem-solving, and self-expression.
          Both software development and guitar playing offer me a unique way
          to channel my creativity, challenge myself, and continuously learn,
          making each endeavor feel like an integral part of who I am.
        </p>
        <a href="https://github.com/djacob0"><h1>Github</h1></a>
        <h2>Created by Daniel Jacob Naval</h2>
        <div className="flex justify-center items-center pb-4">
        <img
          src={Me}
          alt="Profile"
          className="w-[320px] h-[400px] object-cover"
        />
      </div>
      </div>
    )
  }
}
