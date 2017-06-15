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
          <p>I'm always working on things. Sometimes those things are cool. On occasion, I write little blurbs about the things and post them here.</p>
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
            <ProjectCard title="Granite Moon Bar" imageUrl="files/moon/IMG_0407.jpg" date="Fall 2014">
              I designed and laser engraved black granite tiles to accent an aerospace engineering friend's bar
            </ProjectCard>
            <ProjectCard title="Low Power Motor Controller" imageUrl="files/contour/IMG_20141207_215233.jpg" date="Fall 2014">
              A PSoC based custom PCB to drive a suction pump for prosthestic socket research. Includes a buck boost converter for the motor voltage, and a sleep state that only sips micro amps of current.
            </ProjectCard>
            <ProjectCard title="Automated Queen Bed" videoUrl="files/bed/IMG_0133.mp4" date="Fall 2013">
              I suspended a queen size bed from an ATV winch driven by a motorcycle battery and a car starter relay. The bed rests onto legs when lowered, so it is stable for "active" sleeping. Additionally, there are sensors on the bed to trigger changes to the room lighting.
            </ProjectCard>
            <ProjectCard title="Carbon Fiber Wands" imageUrl="files/wicked_sticks/IMG_2847.jpg" date="8/2016">
              Unique wands made from carbon fiber wands with handles wrapped in cord and then plasticized
            </ProjectCard>
            <ProjectCard title="Installing Aftermarket Motorcycle Headlights" imageUrl="files/moto_headlight/IMG_1627.jpg" date="Installed 9/2015">
              I purchased a bi-xenon projecter headlight module from China, which arrived with no documentation or wiring diagram. Figuring out how to install it on my motorcycle as an adventure!
            </ProjectCard>
            <ProjectCard title="Volunteering for the Boston Marathon" imageUrl="files/volunteering/BAAVolunteering.jpg" date="4/20/2015">
              With a group of fraterntiy brothers, I volunteered for the 119th Boston Marathon, helping run a water station for thirsty runners.
            </ProjectCard>
            <ProjectCard title="Quadcopter" imageUrl="files/quadcopter/quadcopter.jpg" date="Spring 2014">
              I designed and manufactured a quadcopter frame. Made from bent aluminum sheets, aluminum tubing and custom milled mounting brackets. As evidenced by the bent arm, I'm a better engineer than pilot.
            </ProjectCard>
            <ProjectCard title="Integrated-Swivel Suspension Ring" imageUrl="files/suspensionRing.jpg" date="10/2016">
              I commissioned BondsOfSteel to weld a suspension ring into a RockExotica SwivaEye auto-locking carabiner for more effecient use of vertical space (while still enabling spinning!)
            </ProjectCard>
            <ProjectCard title="Weight-Bearing Attachment Points" imageUrl="files/bunker_points/IMG_0943_new.jpg" date="Summer 2015">
              Two rigging points that I installed in the ceiling of a basement bomb shelter. Each point consisted of a 7/16th inch forged shoulder bolt mounted through 10" of reinforced concrete into a series of washers, the largest being over 18" in diameter.
            </ProjectCard>
        </Masonry>

      </div>
    );
  }
}

export default Projects;