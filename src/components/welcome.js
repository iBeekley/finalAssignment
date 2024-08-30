import { Card, CardBody, CardHeader, CardImg, CardSubtitle, CardTitle } from 'react-bootstrap';
import React from 'react';

function WelcomePage(){
    return(
        <Card classname='m-2'>
            <CardHeader>
                <h2>Welcome to F1 Data Center</h2>
            </CardHeader>
            <CardBody>
                <p1>
                    F1 Data Center is a website dedicated to tracking current and past from Forumula One events. The site's goal is to immortalise every piece of information surrounding the sport no matter how small. 
                </p1>
            </CardBody>
        </Card>
    )
}

export default WelcomePage;