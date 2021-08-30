import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './views/About';
import CreatePost from './views/CreatePost';
import CreateUser from './views/CreateUser';
import Home from './views/Home';
import Login from './views/Login';
import Posts from './views/Posts';
import SingleUser from './views/SingleUser';
import Users from './views/Users';

export default class App extends Component {
  constructor(props){
    super(props);
    // console.log('Component Constructing...')
    this.state = {
      myName: 'Brian',
      racers: [],
      isLoggedIn: false
    }
  }

  updateName = () => {
    const newName = prompt('What is your name?')
    this.setState({
      myName: newName
    })
  }

  componentDidMount(){
    // console.log('Component Did Mount...')
    fetch('https://ergast.com/api/f1/2021/10/driverStandings.json')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        this.setState({
          racers: data.MRData.StandingsTable.StandingsLists[0].DriverStandings
        })
      })
  }

  handleLogIn = (e) => {
    e.preventDefault();
    console.log(e);
    // Grab data from form
    const username = e.target.username.value;
    const password = e.target.password.value;

    let myHeaders = new Headers();
    const credentials = btoa(`${username}:${password}`);
    myHeaders.append('Authorization', 'Basic ' + credentials);

    fetch('http://localhost:5000/tokens', {
      method: 'POST',
      headers: myHeaders
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
        isLoggedIn: true
      })
      localStorage.setItem('token', data.token)
    })
  }

  handleLogOut = () =>{
    localStorage.removeItem('token');
    this.setState({
      isLoggedIn: false
    })
  }

  render() {
    // console.log('Component Rendering...')
    const myName = this.state.myName;
    return (
      <div>
        <Navbar myName={myName} isLoggedIn={this.state.isLoggedIn} logOut={this.handleLogOut}/>
        <div className='container'>
          <Switch>
            <Route exact path='/'>
              <Home myName={myName} updateName={this.updateName} allRacers={this.state.racers}/>
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/users'>
              <Users />
            </Route>
            <Route exact path='/posts'>
              <Posts />
            </Route>
            <Route exact path='/create-user'>
              <CreateUser />
            </Route>
            <Route exact path='/create-post'>
              <CreatePost />
            </Route>
            <Route exact path='/users/:id' component={SingleUser}/>
            <Route exact path='/login'>
              <Login handleLogIn={this.handleLogIn} />
            </Route>
          </Switch>
        </div>
      </div>
    )
  }
}

