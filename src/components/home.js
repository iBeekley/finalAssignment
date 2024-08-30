import React from "react";
import Articles from "./news";
import articles from "../data/articles";
import { Card, CardHeader, CardImg, CardSubtitle, CardTitle } from 'react-bootstrap';
import WelcomePage from "./welcome";

function HomePage(){
    return(
        <div>
            <Card style={{ margin: '10px 0' }}>
            <WelcomePage />
            </Card>

            <Card style={{ margin: '10px 0' }}>
            <CardHeader>
                <h2>Current F1 News</h2>
            </CardHeader>
            <Articles articles={articles}></Articles>
            </Card>
        </div>

    );
}

export default HomePage;