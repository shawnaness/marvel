import React, { Component } from 'react';
import { DropdownButton, MenuItem, Button } from 'react-bootstrap';
import List from './List';

// the FilteredList component
class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            selectedSuperheroes: new Set(),
            superheroDeselect: "Deselect All",
            selectedPhases: new Set(),
            phaseDeselect: "Deselect All",
            sort: "Date"
        };
        // add all the superheroes and phases to start
        this.state.selectedSuperheroes.add("captainamerica")
        this.state.selectedSuperheroes.add("ironman")
        this.state.selectedSuperheroes.add("thor")
        this.state.selectedSuperheroes.add("hulk")
        this.state.selectedSuperheroes.add("avengers")
        this.state.selectedSuperheroes.add("spiderman")
        this.state.selectedSuperheroes.add("antman")
        this.state.selectedSuperheroes.add("doctorstrange")
        this.state.selectedSuperheroes.add("guardians")
        this.state.selectedSuperheroes.add("blackpanther")

        this.state.selectedPhases.add("Phase One")
        this.state.selectedPhases.add("Phase Two")
        this.state.selectedPhases.add("Phase Three")

    }


    //filters the list
    filterItem = (item) => {
        //checks if set of selected heroes contains any of the movie's heroes
        var heroes = item.superhero.split(" ");
        var containsHero = false;
        for (var i in heroes) {
            if (this.state.selectedSuperheroes.has(heroes[i])) {
                containsHero = true;
            }
        }
        /* include the item if the hero and phase are contained in the selected 
        heroes/phases, and if the search query is in the title or director */
        if (containsHero && this.state.selectedPhases.has(item.phase)) {
            return (item.name.toLowerCase().search(this.state.search) !== -1 ||
                item.director.toLowerCase().search(this.state.search) !== -1);
        }
    }

    /* A sort function to determine how to sort the list of items, based on
    this.state.sort. Used in passing in the list of items to the List
    component */
    sortBy = (a, b) => {
        // alphabetical
        if (this.state.sort === "Title") {
            return a.name.localeCompare(b.name);
        // earliest to most recent
        } else if (this.state.sort === "Date") {
            if (a.year - b.year === 0) {
                // won't be released on same day; don't need to check date
                return a.month - b.month;
            } else {
                return a.year - b.year;
            }
        // shortest to longest
        } else if (this.state.sort === "Runtime") {
            return a.runtime - b.runtime;
        // most money to least
        } else if (this.state.sort === "Box Office") {
            return b.boxoffice - a.boxoffice;
        }
    }

    // sets the state whenever the user types on the search bar
    onSearch = (event) => {
        this.setState({search: event.target.value.trim().toLowerCase()});
    }

    /* sets the state if the user selects a logo; also changes that logo's 
    style */
    superheroClicked = (event) => {
        if (this.state.selectedSuperheroes.has(event.target.id)) {
            event.target.style.filter = "grayscale(1)";
            event.target.style.opacity = "0.5";
            this.state.selectedSuperheroes.delete(event.target.id);
        } else {
            event.target.style.filter = "none";
            event.target.style.opacity = "1";
            this.state.selectedSuperheroes.add(event.target.id);
        }
        // necessary to make sure the page rerenders
        this.setState({selectedSuperheroes: this.state.selectedSuperheroes})
    }

    /* sets the state and changes the logo styles when the Deselect All or
    Select All button is clicked */
    superheroDeselected = (event) => {
        var logos = document.getElementsByClassName("select-superhero");
        if (this.state.superheroDeselect === "Deselect All") {
            this.setState({selectedSuperheroes: new Set()})
            this.setState({superheroDeselect: "Select All"})
            for (var x of logos) {
                x.style.filter = "grayscale(1)";
                x.style.opacity = "0.5";
            }
        } else {
            this.state.selectedSuperheroes.add("captainamerica")
            this.state.selectedSuperheroes.add("ironman")
            this.state.selectedSuperheroes.add("thor")
            this.state.selectedSuperheroes.add("hulk")
            this.state.selectedSuperheroes.add("avengers")
            this.state.selectedSuperheroes.add("spiderman")
            this.state.selectedSuperheroes.add("antman")
            this.state.selectedSuperheroes.add("doctorstrange")
            this.state.selectedSuperheroes.add("guardians")
            this.state.selectedSuperheroes.add("blackpanther")
            this.setState({selectedSuperheroes: this.state.selectedSuperheroes})
            this.setState({superheroDeselect: "Deselect All"})
            for (var y of logos) {
                y.style.filter = "none";
                y.style.opacity = "1";
            }
        }
    }

    /* sets the state if the user selects a phase; also changes that phase's 
    style */
    phaseClicked = (event) => {
        if (this.state.selectedPhases.has(event.target.id)) {
            event.target.style.opacity = "0.3";
            this.state.selectedPhases.delete(event.target.id);
        } else {
            event.target.style.opacity = "1";
            this.state.selectedPhases.add(event.target.id);
        }
        // necessary to make sure the page rerenders
        this.setState({selectedPhases: this.state.selectedPhases})
    }

    /* sets the state and changes the phase styles when the Deselect All or
    Select All button is clicked */
    phaseDeselected = (event) => {
        var phases = document.getElementsByClassName("select-phase");
        if (this.state.phaseDeselect === "Deselect All") {
            this.setState({selectedPhases: new Set()})
            this.setState({phaseDeselect: "Select All"})
            for (var x of phases) {
                x.style.opacity = "0.3";
            }
        } else {
            this.state.selectedPhases.add("Phase One")
            this.state.selectedPhases.add("Phase Two")
            this.state.selectedPhases.add("Phase Three")
            this.setState({selectedPhases: this.state.selectedPhases})
            this.setState({phaseDeselect: "Deselect All"})
            for (var y of phases) {
                y.style.opacity = "1";
            }
        }
    }

    // sets the state when the user selects a method of sorting
    sortSelected = (key, event) => {
        this.setState({sort: key})
    }

    // renders the page
    render() {
        return (
            <div className="filter-list">
                <List items={this.props.items.sort(this.sortBy).filter(this.filterItem)} />
                <div className="options">
                    <h2>Options</h2>
                    <input className="search" type="text" placeholder="search title or director"
                         onChange={this.onSearch} />
                    <h3>Superhero</h3>
                    <div className="superhero-logos">
                        <img className="select-superhero" src="public/logos/captainamerica.png" 
                            id="captainamerica" alt="Captain America" onClick={this.superheroClicked} />
                        <img className="select-superhero" src="public/logos/ironman.png" 
                            id="ironman" alt="Iron Man" onClick={this.superheroClicked} />
                        <img className="select-superhero" src="public/logos/thor.png"
                            id="thor" alt="Thor" onClick={this.superheroClicked} />
                        <img className="select-superhero" src="public/logos/hulk.png" 
                            id="hulk" alt="Hulk" onClick={this.superheroClicked} />  
                        <img className="select-superhero" src="public/logos/avengers.png" 
                            id="avengers" alt="Avengers" onClick={this.superheroClicked} />
                        <img className="select-superhero" src="public/logos/spiderman.png" 
                            id="spiderman" alt="Spiderman" onClick={this.superheroClicked} />
                        <img className="select-superhero" src="public/logos/guardians.png" 
                            id="guardians" alt="Guardians" onClick={this.superheroClicked} />
                        <img className="select-superhero" src="public/logos/antman.png" 
                            id="antman" alt="Ant Man" onClick={this.superheroClicked} />    
                        <img className="select-superhero" src="public/logos/doctorstrange.png" 
                            id="doctorstrange" alt="Doctor Strange" onClick={this.superheroClicked} />
                        <img className="select-superhero" src="public/logos/blackpanther.png"
                            id="blackpanther" alt="Black Panther" onClick={this.superheroClicked} />
                    </div>
                     <Button className="button" bsStyle="primary" 
                        onClick={this.superheroDeselected}>{this.state.superheroDeselect}</Button>
                    <h3>Phase</h3>
                    <div className="phase-logos">
                        <img className="select-phase" src="phases/I.png" 
                            id="Phase One" alt="Phase One" onClick={this.phaseClicked} />
                        <img className="select-phase" src="phases/II.png" 
                            id="Phase Two" alt="Phase Two" onClick={this.phaseClicked} />
                        <img className="select-phase" src="phases/III.png"
                        id="Phase Three" alt="Phase Three" onClick={this.phaseClicked} />
                    </div>
                    <Button className="button" bsStyle="primary" 
                        onClick={this.phaseDeselected}>{this.state.phaseDeselect}</Button>
                    <h3>Sort</h3>
                    <DropdownButton className="dropdown" bsStyle="primary" id="sort-dropdown" title={this.state.sort}>
                        <MenuItem eventKey="Date" onSelect={this.sortSelected}>Date</MenuItem>
                        <MenuItem eventKey="Title" onSelect={this.sortSelected}>Title</MenuItem>
                        <MenuItem eventKey="Runtime" onSelect={this.sortSelected}>Runtime</MenuItem>
                        <MenuItem eventKey="Box Office" onSelect={this.sortSelected}>Box Office</MenuItem>
                    </DropdownButton>
                </div>
            </div>
        );
    }
}

export default FilteredList;