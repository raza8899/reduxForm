import React from 'react'
import Header from './Header';
import Info from './Info'
import Form from './Form'
import {Switch,Route,Redirect,withRouter} from 'react-router-dom'
import Home from './Home'
import FormSaved from './FormSaved';
import Footer from './Footer';
class Main extends React.Component {

    render(){
        return(
            <React.Fragment>
                
                <Switch>
            <Route path="/home" component={Home} />
            <Route exact path='/info' component={Info} />
            <Route exact path="/form" component={Form} />
            <Route exact path="/formSaved" component={FormSaved} />
            <Route exact path="/footer" component={Footer} />


            <Redirect to="/home" />

        </Switch>
            </React.Fragment>
        )
    }
   
}

export default withRouter(Main);