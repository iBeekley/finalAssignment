import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function PointsDisplay({ driver, updatePoints }) {
    const [isEditing, setIsEditing] = useState(false);
    const [points, setPoints] = useState(driver.points);

    const handleButtonClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (event) => {
        setPoints(event.target.value);
    };

    const handleBlur = () => {
        setIsEditing(false);
        updatePoints(driver.driverId, points); // Send updated points to the backend
    };

    return (
        <Card style={{ padding: "2px", margin: "2px" }}>
            {isEditing ? (
                <input 
                    type="number" 
                    value={points} 
                    onChange={handleInputChange} 
                    onBlur={handleBlur} 
                    autoFocus
                />
            ) : (
                <span>{points} Points</span>
            )}
            {!isEditing && (
                <Button onClick={handleButtonClick}>
                    Edit Points
                </Button>
            )}
        </Card>
    );
}

export default PointsDisplay;
