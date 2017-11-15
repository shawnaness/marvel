import React, { Component } from 'react';
import { DropdownButton, MenuItem, Button } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        // TODO: Add a new key/value pair in the state to keep track of type
        this.state = {
            search: "",
            selectedSuperheroes: new Set(),
            superheroDeselect: "Deselect All",
            selectedPhases: new Set(),
            phaseDeselect: "Deselect All",
            sort: "Date"
        };
        this.state.selectedSuperheroes.add("captainamerica")
        this.state.selectedSuperheroes.add("ironman")
        this.state.selectedSuperheroes.add("thor")
        this.state.selectedSuperheroes.add("hulk")
        this.state.selectedSuperheroes.add("avengers")
        this.state.selectedSuperheroes.add("spiderman")
        this.state.selectedSuperheroes.add("antman")
        this.state.selectedSuperheroes.add("doctorstrange")
        this.state.selectedSuperheroes.add("guardians")

        this.state.selectedPhases.add("Phase One")
        this.state.selectedPhases.add("Phase Two")
        this.state.selectedPhases.add("Phase Three")

    }
    // Sets the state whenever the user types on the search bar
    onSearch = (event) => {
        this.setState({search: event.target.value.trim().toLowerCase()});
    }

    filterItem = (item) => {
        // Checks if the current search term is contained in this item
        var heroes = item.superhero.split(" ");
        var containsHero = false;
        for (var i in heroes) {
            if (this.state.selectedSuperheroes.has(heroes[i])) {
                containsHero = true;
            }
        }


        if (containsHero && this.state.selectedPhases.has(item.phase)) {
            return (item.name.toLowerCase().search(this.state.search) !== -1);
        }
    }

    sortBy = (a, b) => {
        if (this.state.sort === "Title") {
            return a.name.localeCompare(b.name);
        } else if (this.state.sort === "Date") {
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

    superheroClicked = (event) => {
        if (this.state.selectedSuperheroes.has(event.target.id)) {
            event.target.style.filter = "grayscale(1)";
            this.state.selectedSuperheroes.delete(event.target.id);
        } else {
            event.target.style.filter = "none";
            this.state.selectedSuperheroes.add(event.target.id);
        }
        this.setState({selectedSuperheroes: this.state.selectedSuperheroes})
    }

    superheroDeselected = (event) => {
        var logos = document.getElementsByClassName("select-superhero");
        if (this.state.superheroDeselect === "Deselect All") {
            this.setState({selectedSuperheroes: new Set()})
            this.setState({superheroDeselect: "Select All"})
            for (var x of logos) {
                x.style.filter = "grayscale(1)";
            }
        } else {
            this.setState({selectedSuperheroes: new Set()})
            this.state.selectedSuperheroes.add("captainamerica")
            this.state.selectedSuperheroes.add("ironman")
            this.state.selectedSuperheroes.add("thor")
            this.state.selectedSuperheroes.add("hulk")
            this.state.selectedSuperheroes.add("avengers")
            this.state.selectedSuperheroes.add("spiderman")
            this.state.selectedSuperheroes.add("antman")
            this.state.selectedSuperheroes.add("doctorstrange")
            this.state.selectedSuperheroes.add("guardians")
            this.setState({selectedSuperheroes: this.state.selectedSuperheroes})
            this.setState({superheroDeselect: "Deselect All"})
            for (var y of logos) {
                y.style.filter = "none";
            }
        }
    }

    phaseClicked = (event) => {
        if (this.state.selectedPhases.has(event.target.id)) {
            event.target.style.opacity = "0.2";
            this.state.selectedPhases.delete(event.target.id);
        } else {
            event.target.style.opacity = "1";
            this.state.selectedPhases.add(event.target.id);
        }
        this.setState({selectedPhases: this.state.selectedPhases})
    }

    phaseDeselected = (event) => {
        var phases = document.getElementsByClassName("select-phase");
        if (this.state.phaseDeselect === "Deselect All") {
            this.setState({selectedPhases: new Set()})
            this.setState({phaseDeselect: "Select All"})
            for (var x of phases) {
                x.style.opacity = "0.2";
            }
        } else {
            this.setState({selectedPhases: new Set()})
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
                    <h3>Superhero</h3>
                    <div className="superhero-logos">
                        <img className="select-superhero" src={process.env.PUBLIC_URL + "logos/captainamerica.png"} 
                            id="captainamerica" alt="Captain America" onClick={this.superheroClicked} />
                        <img className="select-superhero" src={process.env.PUBLIC_URL + "logos/ironman.png"}
                            id="ironman" alt="Iron Man" onClick={this.superheroClicked} />
                        <img className="select-superhero" src={process.env.PUBLIC_URL + "logos/thor.png"}
                            id="thor" alt="Thor" onClick={this.superheroClicked} />
                        <img className="select-superhero" src={process.env.PUBLIC_URL + "logos/hulk.png"} 
                            id="hulk" alt="Hulk" onClick={this.superheroClicked} />  
                        <img className="select-superhero" src={process.env.PUBLIC_URL + "logos/avengers.png"}
                            id="avengers" alt="Avengers" onClick={this.superheroClicked} />
                        <img className="select-superhero" src={process.env.PUBLIC_URL + "logos/spiderman.png"}
                            id="spiderman" alt="Spiderman" onClick={this.superheroClicked} />
                        <img className="select-superhero" src={process.env.PUBLIC_URL + "logos/guardians.png"}
                            id="guardians" alt="Guardians" onClick={this.superheroClicked} />
                        <img className="select-superhero" src={process.env.PUBLIC_URL + "logos/antman.png"}
                            id="antman" alt="Ant Man" onClick={this.superheroClicked} />    
                        <img className="select-superhero" src={process.env.PUBLIC_URL + "logos/doctorstrange.png"}
                            id="doctorstrange" alt="Doctor Strange" onClick={this.superheroClicked} />
                        <Button className="button" bsStyle="primary" onClick={this.superheroDeselected}>
                            {this.state.superheroDeselect}</Button>    
                    </div>
                    <h3>Phase</h3>
                    <div className="phase-logos">
                        <img className="select-phase" src={process.env.PUBLIC_URL + "phases/I.png"} 
                            id="Phase One" alt="Phase One" onClick={this.phaseClicked} />
                        <img className="select-phase" src={process.env.PUBLIC_URL + "phases/II.png"}
                            id="Phase Two" alt="Phase Two" onClick={this.phaseClicked} />
                        <img className="select-phase" src={process.env.PUBLIC_URL + "phases/III.png"}
                            id="Phase Three" alt="Phase Three" onClick={this.phaseClicked} />
                        <Button className="button" bsStyle="primary" onClick={this.phaseDeselected}>{this.state.phaseDeselect}</Button>
                    </div>
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