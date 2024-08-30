import React from "react";
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import { Alert, Card } from 'react-bootstrap';
import races from '../data/racedata.js';
import Table from 'react-bootstrap/Table'

function Calendar({ races }) {
    const match = useRouteMatch();
    const findRaceById = (id) => races.find((race) => race.id === parseInt(id));
    
    return (
      <Card id={'calendar'} style={{margin: '10px 0'}}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Race</th>
              <th>Date</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
          {races.map((race) => (//maps races
            <tr key={race.id}> 
              <td>{race.race}</td> 
              <td>{race.date}</td>
              <td>{race.location}</td>
            </tr>
          ))}
          </tbody>
        </Table>
      </Card>
    );
}
  
export default Calendar;
