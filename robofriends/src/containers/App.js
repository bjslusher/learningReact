import React, { useState, useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";


function App() {
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState("")

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users=> {setRobots(users)});
    }, []);
    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }
    const filteredRobots = robots.filter(robots =>{
       return robots.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    return (
        <div className='tc'>
           <h1 className='f1'>RoboFriends</h1>
           <SearchBox searchChange={onSearchChange}/>
           <CardList robots={filteredRobots}/>
        </div>
    );
}

export default App