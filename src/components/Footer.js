import React from 'react';
import {Link} from 'react-router-dom'

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/info">Info</Link></li>
                        <li><Link to="/form">Form</Link></li>
                    </ul>
                </div>
               
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/amir.raza.399826/"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/amirrazacs/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <span style={{background:"white",color:"white"}} > <a className="btn btn-social-icon btn-git" href="https://github.com/raza8899"><i className="fa fa-github"></i></a>
                        </span>
                        <a className="btn btn-social-icon" href="mailto:amirraza2221@gmail.com"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Amir Raza</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;