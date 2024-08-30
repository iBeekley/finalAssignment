import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import PointsDisplay from "./points";
import NewDriverForm from "./new-driver-form";

const apiEndpoint = 'https://66c6bda78b2c10445bc7881b.mockapi.io/standings';

function Standings() {
    const [standings, setStandings] = useState([]);

    // Fetch from API
    useEffect(() => {
        fetch(apiEndpoint)
            .then(response => response.json())
            .then(data => setStandings(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    // Sort standings
    const sortedStandings = standings.sort((a, b) => b.points - a.points);

    // Update points in the backend
    function updatePoints(driverId, newPoints) {
        fetch('https://66c6bda78b2c10445bc7881b.mockapi.io/standings', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ points: Number(newPoints) }), // Ensure points is a number
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(updatedDriver => {
            // Handle successful update
        })
        .catch(error => {
            console.error("Error updating points:", error);
        });
    }

    // Delete driver from standings
    function deleteDriver(driverId) {
        fetch(`${apiEndpoint}/${driverId}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.status === 404) {
                console.error("Driver not found (404).");
                alert("Driver not found. Please check the driver ID.");
                return;
            }
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(() => {
            setStandings(prevStandings =>
                prevStandings.filter(driver => driver.driverId !== driverId)
            );
        })
        .catch(error => {
            console.error("Error deleting driver:", error);
            alert("Error deleting driver. Please check the console for more details.");
        });
    }

    // Add a driver to the standings
    function addNewDriver(newDriver) {
        fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newDriver),
        })
        .then(response => response.json())
        .then(addedDriver => {
            setStandings(prevStandings => [...prevStandings, addedDriver]);
        })
        .catch(error => console.error("Error adding driver:", error));
    }

    return (
        <Card id={'standings'} style={{ margin: '10px 0' }}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Pos</th>
                        <th>Driver Name</th>
                        <th>Points</th>
                        <th>Team</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {sortedStandings.map((driver, index) => (
                    <tr key={driver.driverId}>
                        <td>{index + 1}</td>
                        <td>{driver.name}</td>
                        <td><PointsDisplay updatePoints={updatePoints} driver={driver} /></td>
                        <td>{driver.team}</td>
                        <td>
                            <Button variant='warning' onClick={() => deleteDriver(driver.driverId)}>Delete</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <NewDriverForm addNewDriver={addNewDriver} />
        </Card>
    );
}

export default Standings;
