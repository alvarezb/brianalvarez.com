import React from 'react'
import ProjectCard from '../props/ProjectCard.js';
import Tracker from '../props/Tracker.js';
//import Isotope from 'isotope-layout'
import Masonry from 'react-masonry-component';



class Projects extends React.Component {
  render() {
    return (
      <div>
        <Tracker/>
        <div>
          <h3>Personal Projects</h3>
          <p>Sometimes I do things. Sometimes those things are cool! Occasionally, I write little blurbs about them and post them here.</p>
        </div>
        <Masonry>
            <ProjectCard title="This Website" imageUrl="files/website/2017-08-26-recursive.jpg" url="http://www.brianalvarez.com" date="Initially built in 2017">
              Could I have used squarespace? <em>Yes.</em> Would it have been faster, easier, and looked better? <em>Yes.</em> Would I have learned nearly as much? <em>Definitely not!</em>
            </ProjectCard>
            <ProjectCard title="Leather Bulldog Harness" imageUrl="files/leather_harness/IMG_3343_new.jpg" url="files/leather_harness/index.html" date="Crafted 2/2017">
              As part of a costume party, I made myself a simple leather chest harness!
            </ProjectCard>
            <ProjectCard title="Stickman Costume" imageUrl="files/stickman/IMG_0974.jpg" date="Halloween 2015">
              A halloween costume consisting of EL tape and custom made blinky LED mask - it was especially scary for intoxicated people!
            </ProjectCard>
            <ProjectCard title="Weight-Bearing Attachment Points" imageUrl="files/bunker_points/IMG_0943_new.jpg" date="Summer 2015">
              Two rigging points that I installed in the ceiling of a basement bomb shelter. Each point consisted of a 7/16th inch forged shoulder bolt mounted through 10" of reinforced concrete into a series of washers, the largest being over 18" in diameter.
            </ProjectCard>
            <ProjectCard title="Granite Moon Bar" imageUrl="files/moon/IMG_0407.jpg" date="Fall 2014">
              I designed and laser engraved black granite tiles to accent an aerospace engineering friend's bar
            </ProjectCard>
            <ProjectCard title="Low Power Motor Controller" imageUrl="files/contour/IMG_20141207_215233.jpg" date="Fall 2014">
              A PSoC based custom PCB to drive a suction pump for prosthestic socket research. Includes a buck boost converter for the motor voltage, and a sleep state that only sips micro amps of current.
            </ProjectCard>
            <ProjectCard title="Sample Card" imageUrl="http://placehold.it/600x400" url="files/sample.html" date="Mocked up in 2017">
                This is a longer card with supporting text below as a natural lead-in to additional content. This content is a <em>little</em> bit longer.
            </ProjectCard>
            <ProjectCard title="Sample Card" imageUrl="http://placehold.it/600x400" url="files/sample.html" date="Mocked up in 2017">
                This is a longer card with supporting text below as a natural lead-in to additional content. This content is a <em>little</em> bit longer.
            </ProjectCard>
            <ProjectCard title="Sample Card" imageUrl="http://placehold.it/600x400" url="files/sample.html" date="Mocked up in 2017">
                This is a longer card with supporting text below as a natural lead-in to additional content. This content is a <em>little</em> bit longer.
            </ProjectCard>
            <ProjectCard title="Sample Card" imageUrl="http://placehold.it/600x400" url="files/sample.html" date="Mocked up in 2017">
                This is a longer card with supporting text below as a natural lead-in to additional content. This content is a <em>little</em> bit longer.
            </ProjectCard>
        </Masonry>

      </div>
    );
  }
}

export default Projects;