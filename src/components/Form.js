import React from 'react'
import {Label,Col,Row,Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import {LocalForm,Control,Errors} from 'react-redux-form'
import FormSaved from './FormSaved'
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
class Form extends React.Component{

    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(values) {
        alert('Current State is: ' + JSON.stringify(values));
    }
   
    render(){
        
        return(
            <React.Fragment>
            <div className="form-react">
                <div className="container">
            <div className="row row-content ">
                    <div className="col-12">
                        <h3>Want to get in Touch??</h3>
                        <h4>Please fill the form</h4>
                    </div>
                    <div className="col-12 col-md-9">
                        <LocalForm onSubmit={(values)=>{this.handleSubmit(values)}}>
                        <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>
                                First Name
                                </Label>
                                <Col md={6}>
                                <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>
                                Last Name
                                </Label>
                                <Col md={6}>
                                <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                 <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                                </Row>
                                <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>
                                Contact Tel.
                                </Label>
                                <Col md={6}>
                                <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                        }}
                                         />
                                <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 numbers',
                                            maxLength: 'Must be 15 numbers or less',
                                            isNumber: 'Must be a number'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={6}>
                                <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control" 
                                        validators={{
                                            required, validEmail
                                        }}/>
                                 <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                     />
                                </Col>

                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6, offset: 2}}>
                                <Label htmlFor="selectMenu">Are you on Whatsapp with same number?</Label>
                                <Control.select model=".contactType" name="contactType" id="selectMenu"
                                        className="form-control">
                                        <option>Yes</option>
                                        <option>No</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Message</Label>
                                <Col md={10}>
                                <Control.textarea model=".message" id="message" name="message"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        
                                        Send Message
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                        </div>
                       </div>
                    </div>
               </div>
            </React.Fragment>
        )
    }
}

export default Form;