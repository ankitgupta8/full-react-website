import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route } from 'react-router';
import ShopComponent from './pages/shop/shop.component.jsx';
import { Switch } from 'react-router';
import NavBar from './pages/hero-section/nav-section.component'
import  SignInSignUp   from "./pages/signin-signout/signin-signout.component";
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }
  unSubscribeFromAuth = null;
  componentDidMount() {
  this.unSubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if(user) {
        const userRef = createUserProfileDocument(user);
        (await userRef).onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          }, () => {console.log(this.state)})
        })
      } else{
        this.setState({currentUser: user})
      }
  })
  }
componentWillUnmount(){
  this.unSubscribeFromAuth();
}
  render() {
    return (
    <div>
      <NavBar userdata = {this.state.currentUser} />
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopComponent} />
      <Route exact path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
}
}

export default App;