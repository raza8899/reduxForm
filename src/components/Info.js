import React from 'react'
import {Card,CardBody,CardHeader,CardText, CardTitle} from 'reactstrap'

function Info(){
    return(
        <Card className="reactCard">
            <CardHeader>
                <h3>A bit of information about me</h3>
            </CardHeader>
            <CardBody>
                <CardText>
                    <p className="info">
                I have been working on Web Development with a focus on Front-end Web development through HTML, 
                CSS, JavaScript, Bootstrap, React, and Node.js. 
                I am a well-experienced programmer in programming languages like Java, Python, R and their practical implementation in Machine Learning and Data Visualization. 
                Likes to lead the team from the front. I am currently open to developing websites for NGOs. 
                One thing which is inevitable is my SMILE <span className="fa fa-smile"></span>.
                </p> 
                </CardText>
            </CardBody>
        </Card>
    )
}
export default Info;