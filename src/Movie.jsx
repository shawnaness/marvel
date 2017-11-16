import React, { Component } from 'react';

// the Movie component takes in a single item (movie) as a property.
class Movie extends Component {

    // matches the month number from the json with a month string to print
    findMonth(number) {
      if (number == 1) {
        return "January";
      } else if (number == 2) {
        return "February";
      } else if (number == 3) {
        return "March";
      } else if (number == 4) {
        return "April";
      } else if (number == 5) {
        return "May";
      } else if (number == 6) {
        return "June";
      } else if (number == 7) {
        return "July";
      } else if (number == 8) {
        return "August";
      } else if (number == 9) {
        return "September";
      } else if (number == 10) {
        return "October";
      } else if (number == 11) {
        return "November";
      } else if (number == 12) {
        return "December";
      }
    }

    /* matches the box office number in thej son with the correct string to
    print - i.e. billion or million */ 
    findBoxOffice(num) {
      if (num > 1000) {
        return (num / 1000) + " billion";
      } else {
        return num + " million";
      }
    }

    // render the Movie component
    render() {
      return (
        <div key={this.props.item.name} className="movie">
          <div className="movie-title">
            <a href={this.props.item.imdb}>
              {this.props.item.name} ({this.props.item.year})
            </a>
          </div>
          <div className="poster">
            <img className="poster-image" src={process.env.PUBLIC_URL + this.props.item.poster} alt="poster"/>
          </div>
          <div className="movie-info">
            <p>Release Date: {this.findMonth(this.props.item.month)} {this.props.item.day}, {this.props.item.year}</p>
            <p>Director: {this.props.item.director}</p>
            <p>Runtime: {this.props.item.runtime} minutes</p>
            <p>Box Office Earnings: 
              ${this.findBoxOffice(this.props.item.boxoffice)}</p>
          </div>
        </div>
        );
    }

}

export default Movie;