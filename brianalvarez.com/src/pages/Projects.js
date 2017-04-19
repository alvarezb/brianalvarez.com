import React from 'react'

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
  <div className="tab-pane offset-lg-1">
    <div className="col-6">
      <h3>Personal Projects</h3>
      <p>Sometimes I do things. Sometimes those things are cool! Occasionally, I write little blurbs about them and post them here.</p>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="card">
            <img className="card-img-top img-fluid" src="http://placehold.it/600x400" alt="placeholder for website"/>
            <div className="card-block">
              <h4 className="card-title"><a href="index.html">This Website</a></h4>
              <p className="card-text">Could I have used squarespace? <em>Yes.</em> Would it have been faster, easier, and looked better? <em>Yes.</em> Would I have learned nearly as much? <em>Definitely not!</em></p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Built 4/2017</small>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card">
            <img className="card-img-top img-fluid" src="http://placehold.it/600x400" alt="3d printer"/>
            <div className="card-block">
              <h4 className="card-title"><a href="files/sample.html">3d Printer</a></h4>
              <p className="card-text">I purchased a used Rostock Max V2.5ish, fed it many hours of my life as a down payment, and now it gives me 3d parts while requiring only a moderate number of upkeep hours as monthly rent.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Purchased 3/2017, set up 4/17</small>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card">
            <img className="card-img-top img-fluid" src="files/leather_harness/wearing_it.jpg" alt="Leather chest harness"/>
            <div className="card-block">
              <h4 className="card-title"><a href="files/leather_harness/index.html">Leather chest harness</a></h4>
              <p className="card-text">As part of a costume party, I made myself a simple leather chest harness!</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Built 2/2017</small>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card">
            <img className="card-img-top img-fluid" src="http://placehold.it/600x400" alt="Card cap"/>
            <div className="card-block">
              <h4 className="card-title"><a href="files/sample.html">Card title</a></h4>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Built 4/2017</small>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card">
            <img className="card-img-top img-fluid" src="http://placehold.it/600x400" alt="Card cap"/>
            <div className="card-block">
              <h4 className="card-title"><a href="files/sample.html">Card title</a></h4>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Built around 4/2017</small>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card">
            <img className="card-img-top img-fluid" src="http://placehold.it/600x400" alt="Card cap"/>
            <div className="card-block">
              <h4 className="card-title"><a href="files/sample.html">Card title</a></h4>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Built around 4/2017</small>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card">
            <img className="card-img-top img-fluid" src="http://placehold.it/600x400" alt="Card cap"/>
            <div className="card-block">
              <h4 className="card-title"><a href="files/sample.html">Card title</a></h4>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Built around 4/2017</small>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="card">
            <img className="card-img-top img-fluid" src="http://placehold.it/600x400" alt="Card cap"/>
            <div className="card-block">
              <h4 className="card-title"><a href="files/sample.html">Card title</a></h4>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Built around 4/2017</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Projects;