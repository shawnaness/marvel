import React, { Component } from 'react';
import Movie from "./Movie";

/*
  The List component takes the list of items passed in as a property
  and create an HTML list with those item.
*/
class List extends Component {

    // returns the message or list of Movie components
    renderList() {
        if (this.props.items.length === 0) {
          const message = 
            <h3>No movies found. Try altering your search
            options!</h3>;
          return message;
        }
        else {
          const items = this.props.items.map(item => {
            return <Movie item={item} key={item.name} />
          });

          return items;
        }
    }

    // renders the List component
    render() {
        return (
          <div className="list">
            {this.renderList()}
          </div>
          );
    }
}

export default List;