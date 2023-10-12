import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users=> this.setState({robots:users}))
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    render()
    {
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App