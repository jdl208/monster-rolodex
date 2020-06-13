import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [
                {
                    id: "m1",
                    name: "Frankenstein",
                },
                {
                    id: "m2",
                    name: "Dracula",
                },
                {
                    id: "m3",
                    name: "Voldemort",
                },
            ],
        };
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => this.setState({ monsters: users }));
    }
    render() {
        return (
            <div className="App">
                <CardList monsters={this.state.monsters} />
            </div>
        );
    }
}

export default App;
