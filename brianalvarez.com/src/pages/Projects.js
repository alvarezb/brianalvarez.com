import React from 'react'
import ProjectCard from '../props/ProjectCard.js'
import Isotope from 'isotope-layout'

/*
className About extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
}
*/


const Projects = () => (
  <div>
    <div>
      <h3>Personal Projects</h3>
      <p>Sometimes I do things. Sometimes those things are cool! Occasionally, I write little blurbs about them and post them here.</p>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <ProjectCard title="This Website" imageUrl="http://placehold.it/600x400" url="http://www.brianalvare.com" date="Initially built in 2017">
              Could I have used squarespace? <em>Yes.</em> Would it have been faster, easier, and looked better? <em>Yes.</em> Would I have learned nearly as much? <em>Definitely not!</em>
          </ProjectCard>
        </div>
        <div className="col-md-6 col-lg-4">
          <ProjectCard title="3d Printer" imageUrl="https://cdn.shopify.com/s/files/1/0276/2543/products/blackmax_1024x1024.jpg" url="./projects/3dPrinter" date="Pruchased 3/2017, Troubleshot 5/2017">
              I purchased a used Rostock Max V2.5ish, fed it many hours of my life as a down payment, and now it gives me 3d parts while requiring only a moderate number of upkeep hours as monthly rent.
          </ProjectCard>
        </div>
        <div className="col-md-6 col-lg-4">
          <ProjectCard title="Leather bulldog harness" imageUrl="files/leather_harness/wearing_it.jpg" url="files/leather_harness/index.html" date="Crafted 2/2017">
              As part of a costume party, I made myself a simple leather chest harness!
          </ProjectCard>
        </div>
        <div className="col-md-6 col-lg-4">
          <ProjectCard title="Sample Card" imageUrl="http://placehold.it/600x400" url="files/sample.html" date="Mocked up in 2017">
              This is a longer card with supporting text below as a natural lead-in to additional content. This content is a <em>little</em> bit longer.
          </ProjectCard>
        </div>
        <div className="col-md-6 col-lg-4">
          <ProjectCard title="Sample Card" imageUrl="http://placehold.it/600x400" url="files/sample.html" date="Mocked up in 2017">
              This is a longer card with supporting text below as a natural lead-in to additional content. This content is a <em>little</em> bit longer.
          </ProjectCard>
        </div>
        <div className="col-md-6 col-lg-4">
          <ProjectCard title="Sample Card" imageUrl="http://placehold.it/600x400" url="files/sample.html" date="Mocked up in 2017">
              This is a longer card with supporting text below as a natural lead-in to additional content. This content is a <em>little</em> bit longer.
          </ProjectCard>
        </div>
        <div className="col-md-6 col-lg-4">
          <ProjectCard title="Sample Card" imageUrl="http://placehold.it/600x400" url="files/sample.html" date="Mocked up in 2017">
              This is a longer card with supporting text below as a natural lead-in to additional content. This content is a <em>little</em> bit longer.
          </ProjectCard>
        </div>
        <div className="col-md-6 col-lg-4">
          <ProjectCard title="Sample Card" imageUrl="http://placehold.it/600x400" url="files/sample.html" date="Mocked up in 2017">
              This is a longer card with supporting text below as a natural lead-in to additional content. This content is a <em>little</em> bit longer.
          </ProjectCard>
        </div>
      </div>
    </div>
  </div>
)

export default Projects;