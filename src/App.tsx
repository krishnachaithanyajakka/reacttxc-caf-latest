import React from 'react';
import logo from './logo.svg';
import './App.scss';
import MainService from './services/main-service';
import LoginComponent from './components/login/login';
import GameGroupDisplay from './components/game-group-display/game-group-display'
import { connect } from 'react-redux';
import { updateLoginStatus } from './actions/UserActions';


class App extends React.Component<any, any> {
  private mainserviceInstance:MainService;
  constructor(props){
    super(props);
    this.mainserviceInstance=new MainService();
  }

 

  getLobbyWithGameGroup(){
    this.mainserviceInstance.getLobbyListWithGameGroups().then(data=>{
      console.log("In app component lobby with game group:",data);
    });
  }

  getGameGroupGames(){
    this.mainserviceInstance.getGameGroupGames().then(data=>{
      console.log("In app components games=======>:",data);
    })
  }

  updateLogin=()=>{
    this.props.updatedLoginStatus(true)
  }
  
  
  render() {
    console.log("read state from mapStateToProps",this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
      </p>
          <LoginComponent></LoginComponent>
          <GameGroupDisplay></GameGroupDisplay>
          <p>Environment: {process.env.REACT_APP_API_ENV}</p>
          <p>Site URL: {process.env.REACT_APP_siteUrl}</p>
          <p>API URL: {process.env.REACT_APP_apiUrl}</p>
          <p>Game URL: {process.env.REACT_APP_gamePath}</p>
          <p>Vimeo URL: {process.env.REACT_APP_vimeoUrl}</p>
          <p>Website Name: {process.env.REACT_APP_websiteName}</p>
          <p>Website Code: {process.env.REACT_APP_websiteCode}</p>
          <p>Default Langauge: {process.env.REACT_APP_defaultLang}</p>
          <button onClick={this.updateLogin}>change status</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
      </a>
        </header>
      </div>
    );
  }
}
 const mapStateToProps = (state)=>{
   return {
     isUserLoggedIn: state.user.isUserLoggedIn
   }
 }

 const mapDispatchToProps = dispatch =>{
   return {
     // eslint-disable-next-line no-restricted-globals
     updatedLoginStatus:(status) => dispatch(updateLoginStatus(status))
   }
 }

export default connect(mapStateToProps,mapDispatchToProps)(App);