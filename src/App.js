import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './views/About';
import Home from './views/Home';

export default class App extends Component {
  constructor(props){
    super(props);
    console.log('Component Constructing...')
    this.state = {
      myName: 'Brian',
      racers: []
    }
  }

  updateName = () => {
    const newName = prompt('What is your name?')
    this.setState({
      myName: newName
    })
  }

    componentDidMount(){
      console.log('Component Did Mount...')
      fetch('https://ergast.com/api/f1/2021/10/driverStandings.json')
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.setState({
            racers: data.MRData.StandingsTable.StandingsLists[0].DriverStandings
          })
        })
    }

  render() {
    console.log('Component Rendering...')
    const myName = this.state.myName;
    return (
      <div>
        <Navbar myName={myName}/>
        <div className='container'>
          <Switch>
            <Route exact path='/'>
              <Home myName={myName} updateName={this.updateName} allRacers={this.state.racers}/>
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
          </Switch>
        </div>
      </div>
    )
  }
}

