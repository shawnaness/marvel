import React, { Component } from 'react';
import Movie from "./Movie";


/*
  The list component will take the list of items passed in as a property
  and create an HTML list with those item. In this example, we are passing in the 
  filtered produce list, but this component can be used for other types of items 
  as long as it has a name.
*/
class List extends Component {

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

    render() {
        return (
          <div className="list">
            {this.renderList()}
          </div>
          );
    }
}

export default List;