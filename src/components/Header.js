import React from 'react'
import {Nav,Navbar,NavbarBrand,NavItem,NavLink,NavbarToggler,Collapse,Jumbotron} from 'reactstrap'

class Header extends React.Component{
    constructor(){
        super()
        this.state={
            isNavOpen:false
        }
        this.navBarHandler=this.navBarHandler.bind(this);
    }

    navBarHandler()
            {
                this.setState({
                isNavOpen:!this.state.isNavOpen
                             })
            }

    render(){
        return(
            <React.Fragment>
                <Navbar dark expand="md" >
                <div className="container">
                    <NavbarToggler onClick={this.navBarHandler} />
                    <NavbarBrand className="">Form</NavbarBrand>
                    <Collapse navbar isOpen={this.state.isNavOpen}>
                        <Nav navbar>
                            <NavItem>
                            <NavLink className="nav-link" to="/info"><span className="fa fa-info">
                            </span> Info</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink className="nav-link" to="/form"><span className="fa fa-table">
                            </span> Form</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink className="nav-link" to="/footer"><span className="fa fa-angle-double-down">
                            </span> Footer</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                            <h1>Form using React by Raza</h1>
                            <p>A form purely based on React, React-redux and React Router </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        )
    }
}

export default Header;