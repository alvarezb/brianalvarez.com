import React from 'react';
import Gallery from 'react-photo-gallery';
import _ from 'lodash';
import $ from 'jquery';
import Measure from 'react-measure';
import Lightbox from 'react-images';
import './Photography.css';
import Tracker from '../props/Tracker.js'

class Photography extends React.Component{
  constructor(){
    super();
    this.state = {photos:null, pageNum:1, totalPages:1, loadedAll: false, currentImage:0};
    this.handleScroll = this.handleScroll.bind(this);
    this.loadMorePhotos = this.loadMorePhotos.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  componentDidMount() {
    this.loadMorePhotos();
    this.loadMorePhotos = _.debounce(this.loadMorePhotos, 200);
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll(){
    let scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    if ((window.innerHeight + scrollY) >= (document.body.offsetHeight - 50)) {
      this.loadMorePhotos();
    }
  }
  loadMorePhotos(e){
    if (e){
      e.preventDefault();
    }
    if (this.state.pageNum > this.state.totalPages){
      this.setState({loadedAll: true});
      return;
    }
    $.ajax({
      url: 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=7bfd5b3a1565cc08941231f01555d959&photoset_id=72157680618369974&user_id=143354752@N07&format=json&per_page=21&page='+this.state.pageNum+'&extras=url_m,url_c,url_l,url_h,url_o',
      dataType: 'jsonp',
      jsonpCallback: 'jsonFlickrApi',
      cache: false,
      success: function(data) {
        let photos = [];
        data.photoset.photo.forEach(function(obj,i,array){
          photos.push({
            src: obj.url_m,
            // eslint-disable-next-line
            width: parseInt(obj.width_m),
            // eslint-disable-next-line
            height: parseInt(obj.height_m),
            caption: obj.title,
            alt: obj.title,
            srcset:[
            obj.url_m+' '+obj.width_m+'w',
            obj.url_c+' '+obj.width_c+'w',
            obj.url_h+' '+obj.width_h+'w'
            ],
            sizes:[
            '(min-width: 480px) 33.3vw',
            '(min-width: 1024px) 50vw',
            '100vw'
            ]  
          });
        })
        this.setState({
          photos: this.state.photos ? this.state.photos.concat(photos) : photos,
          pageNum: this.state.pageNum + 1,
          totalPages: data.photoset.pages
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }
    });
  }
  /*
    loadMorePhotos(e){
    if (e){
      e.preventDefault();
    }
    if (this.state.pageNum > this.state.totalPages){
      this.setState({loadedAll: true});
      return;
    }
        let photos = [];
        images.forEach(function(obj,i,array){
          let aspectRatio = parseFloat(obj.wl / obj.hl);
          photos.push({
            src: (aspectRatio >= 3) ? obj.url_c : obj.url_m,
                    // eslint-disable-next-line
                    width: parseInt(obj.ws),
                    // eslint-disable-next-line
                    height: parseInt(obj.hs),
                    caption: obj.title,
                    alt: obj.title,
                    srcset:[ 
                    'images/'+obj.name+'-lg.jpg '+obj.wl+'w',
                    'images/'+obj.name+'-md.jpg '+obj.wm+'w',
                    'images/'+obj.name+'-sm.jpg '+obj.ws+'w',
                    ],
                    sizes:[
                    '(min-width: 480px) 50vw',
                    '(min-width: 1024px) 33.3vw',
                    '100vw'
                    ]  
                  });
        })
        this.setState({
          photos: this.state.photos ? this.state.photos.concat(photos) : photos,
          pageNum: this.state.pageNum + 1,
          //totalPages: data.photoset.pages
        });
  }
  */
  openLightbox(index, event){
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    });
  }     
  closeLightbox(){
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious(){
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext(){
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  renderGallery(){
    return(
      <Measure whitelist={['width']}>
      {
        ({ width }) => {
          var cols = 1;
          if (width >= 480){
            cols = 2;
          }
          if (width >= 1024){
            cols = 3;
          }
          return <Gallery photos={this.state.photos} cols={cols} onClickPhoto={this.openLightbox} />
        }
      }
      </Measure>
      );
  }
  render(){
  // no loading sign if its all loaded
  if (this.state.photos){
    return(
      <div className="Gallery">
        <Tracker/>
        {this.renderGallery()}
        <Lightbox 
        images={this.state.photos}
        backdropClosesModal={true}
        onClose={this.closeLightbox}
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext}
        currentImage={this.state.currentImage}
        isOpen={this.state.lightboxIsOpen}
        width={1600}
        />
        {!this.state.loadedAll && <div className="loading-msg" id="msg-loading-more">Loading</div>}
      </div>
      );
  }
  else{
    return(
      <div className="Gallery">
      <div id="msg-app-loading" className="loading-msg">Loading</div>
      </div>
      );
  }
}
};

export default Photography