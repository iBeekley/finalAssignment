import React, { useState } from 'react';
import { Card, CardHeader, CardImg, CardSubtitle } from 'react-bootstrap';



function NewDriverForm({ addNewDriver }) {
    // State hooks for managing input values
    const [nameValue, setNameValue] = useState('');
    const [teamValue, setTeamValue] = useState('');
    const [numberValue, setNumberValue] = useState('');

    // Handle input changes
    const handleNameChange = (e) => {
        setNameValue(e.target.value);
    };

    const handleTeamChange = (e) => {
        setTeamValue(e.target.value);
    };

    const handleNumberChange = (e) => {
        setNumberValue(e.target.value);
    };

    // Handle form submission
    const handleClick = (e) => {
        console.log("Clicked")
        e.preventDefault();
        addNewDriver({
            name: nameValue,
            team: teamValue,
            points: '0',
            driverNumber: numberValue,
            victories: '0'
        });
        setNameValue('');
        setTeamValue('');
        setNumberValue('');
    };

    return (
        <Card id={'new-driver-form'} style={{margin: '10px 0'}}>
            <h3>Add a driver</h3>
            <input type='text' placeholder='Number' onChange={handleNumberChange} value={numberValue} />
            <input type='text' placeholder='Name' onChange={handleNameChange} value={nameValue} />
            <input type='text' placeholder='Team' onChange={handleTeamChange} value={teamValue} />
            <button className='button btn-primary' onClick={handleClick}>Add Driver</button>
        </Card>
    );
}

export default NewDriverForm;
