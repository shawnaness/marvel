import React, { Component } from 'react';
import Movie from "./Movie";


/*
  The list component will take the list of items passed in as a property
  and create an HTML list with those item. In this example, we are passing in the 
  filtered produce list, but this component can be used for other types of items 
  as long as it has a name.
*/
class List extends Component {


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

    findBoxOffice(num) {
      if (num > 1000) {
        return (num / 1000) + " billion";
      } else {
        return num + " million";
      }
    }


    renderList() {
        const items = this.props.items.map(item => {
          return <Movie item={item} key={item.name} />
        });

        return items;
    }

    render() {
        return (
          <div className="list">
            {this.renderList()}
          </div>
          );
    }
}

export default List;