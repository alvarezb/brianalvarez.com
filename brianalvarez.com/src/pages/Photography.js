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


const Photography = () => (
  <div id="photography" role="tabpanel" className="tab-pane col-6 offset-lg-1">
    <h3>Photography</h3>
    <p>Photography is cool yo. Sharing photos is also cool. Occasionally I take photos that I think are cool enough to share</p>
    <div>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li> 
          <li data-target="#myCarousel" data-slide-to="4"></li>
          <li data-target="#myCarousel" data-slide-to="5"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img className="d-block img-fluid" src="images/0058-sm.jpg" alt="Tesla coil" srcSet="images/0058-sm.jpg 300w, images/0058-md.jpg 600w, images/0058-lg.jpg 1200w"/>
            <div className="carousel-caption d-none d-md-block">
              <h4>Tesla coil lightening</h4>
              <p className=" d-none d-lg-block">Zapping musical lightening After Dark and the Exploratorium.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block img-fluid" src="images/8484-sm.jpg" alt="Breathing fire" srcSet="images/8484-sm.jpg 300w, images/8484-md.jpg 600w, images/8484-lg.jpg 1200w"/>
            <div className="carousel-caption">
              <h4>Releasing my inner dragon</h4>
              <p className=" d-none d-lg-block">Lighting up a cold, dark night with my breath</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block img-fluid" src="images/8299-sm.jpg" alt="Spinning fire ax" srcSet="images/8299-sm.jpg 300w, images/8299-md.jpg 600w, images/8299-lg.jpg 1200w"/>
            <div className="carousel-caption">
              <h4>Spinning Fire</h4>
              <p className=" d-none d-lg-block">Clark spinning the custom fire ax he made</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block img-fluid" src="images/8959-sm.jpg" alt="Pelicans against sunset" srcSet="images/8959-sm.jpg 300w, images/8959-md.jpg 600w, images/8959-lg.jpg 1200w"/>
            <div className="carousel-caption">
              <h4>Pelicans against a Marin sunset</h4>
              <p className=" d-none d-lg-block">Enjoying the views at the north end of Point Reyes National Seashore, Tomales Point</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block img-fluid" src="images/9106-sm.jpg" alt="Elk Silhouettes" srcSet="images/9106-sm.jpg 300w, images/9106-md.jpg 600w, images/9106-lg.jpg 1200w"/>
            <div className="carousel-caption">
              <h4>Patrolling the Ridgeline</h4>
              <p className=" d-none d-lg-block">Silhouetted elk watch me during a night hike at Point Reyes</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
)

export default Photography;