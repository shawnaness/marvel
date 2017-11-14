import React, { Component } from 'react';
import { DropdownButton, MenuItem} from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        // TODO: Add a new key/value pair in the state to keep track of type
        this.state = {
            search: "",
            superhero: "Superhero",
            phase: "Phase",
            sort: "Sort"
        };

    }
    // Sets the state whenever the user types on the search bar
    onSearch = (event) => {
        this.setState({search: event.target.value.trim().toLowerCase()});
    }

    filterItem = (item) => {
        // Checks if the current search term is contained in this item
        if ((item.superhero.search(this.state.superhero) !== -1 || 
            this.state.superhero === "All" || 
            this.state.superhero === "Superhero") &&
        (item.phase === this.state.phase ||
            this.state.phase === "All" ||
            this.state.phase === "Phase")) {
            return (item.name.toLowerCase().search(this.state.search) !== -1);
        }
    }

    sortBy = (a, b) => {
        if (this.state.sort === "Alphabetically") {
            return a.name.localeCompare(b.name);
        } else if (this.state.sort === "Date" || this.state.sort === "Sort") {
            if (a.year - b.year === 0) {
                // won't be released on same day
                return a.month - b.month;
            } else {
                return a.year - b.year;
            }
        } else if (this.state.sort === "Runtime") {
            return a.runtime - b.runtime;
        } else if (this.state.sort === "Box Office") {
            return b.boxoffice - a.boxoffice;
        }
    }

    superheroSelected = (key, event) => {
        this.setState({superhero: key})
    }

    phaseSelected = (key, event) => {
        this.setState({phase: key})
    }

    sortSelected = (key, event) => {
        this.setState({sort: key})
    }

    render() {
        return (
            <div className="filter-list">
                <List items={this.props.items.sort(this.sortBy).filter(this.filterItem)} />
                <div className="options">
                    <h2>Options</h2>
                    <input className="search" type="text" placeholder="Search" onChange={this.onSearch} />
                    <DropdownButton className="dropdown" id="superhero-dropdown" title={this.state.superhero}>
                        <MenuItem eventKey="All" onSelect={this.superheroSelected}>All</MenuItem>
                        <MenuItem eventKey="Captain America" onSelect={this.superheroSelected}>Captain America</MenuItem>
                        <MenuItem eventKey="Guardians of the Galaxy" onSelect={this.superheroSelected}>Guardians of the Galaxy</MenuItem>
                        <MenuItem eventKey="Hulk" onSelect={this.superheroSelected}>Hulk</MenuItem>
                        <MenuItem eventKey="Iron Man" onSelect={this.superheroSelected}>Iron Man</MenuItem>
                        <MenuItem eventKey="Spiderman" onSelect={this.superheroSelected}>Spiderman</MenuItem>
                        <MenuItem eventKey="Thor" onSelect={this.superheroSelected}>Thor</MenuItem>
                    </DropdownButton>
                    <DropdownButton className="dropdown" id="phase-dropdown" title={this.state.phase}>
                        <MenuItem eventKey="All" onSelect={this.phaseSelected}>All</MenuItem>
                        <MenuItem eventKey="Phase One" onSelect={this.phaseSelected}>Phase One</MenuItem>
                        <MenuItem eventKey="Phase Two" onSelect={this.phaseSelected}>Phase Two</MenuItem>
                        <MenuItem eventKey="Phase Three" onSelect={this.phaseSelected}>Phase Three</MenuItem>
                    </DropdownButton>
                    <DropdownButton className="dropdown" id="sort-dropdown" title={this.state.sort}>
                        <MenuItem eventKey="Alphabetically" onSelect={this.sortSelected}>Alpabetically</MenuItem>
                        <MenuItem eventKey="Date" onSelect={this.sortSelected}>Date</MenuItem>
                        <MenuItem eventKey="Runtime" onSelect={this.sortSelected}>Runtime</MenuItem>
                        <MenuItem eventKey="Box Office" onSelect={this.sortSelected}>Box Office Earnings</MenuItem>
                    </DropdownButton>
                </div>
            </div>
        );
    }
}
export default FilteredList;