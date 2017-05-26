import React from 'react'
import './ProjectCard.css'

/*
props:

title: the title of the project
url: the link to the project page, either relative or an external link
imageUrl: link to the teaser image
date: Text describing build/release/etc date

children: the brief project deseription, containing any other desired data

*/

class ProjectCard extends React.Component {
    render() {
    return (
      <div className="card">
        <img className="img-fluid" src={this.props.imageUrl} alt={this.props.title}/>
        <div className="card-block">
          <h4 className="card-title">
            {this.props.url ? (
              <a href={this.props.url}>{this.props.title}</a>
            ) : (
              this.props.title
            )}
          </h4>
          <p className="card-text">{this.props.children}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">{this.props.date}</small>
        </div>
      </div>
    );
  }
}

export default ProjectCard;