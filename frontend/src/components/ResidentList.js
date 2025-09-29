import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ResidentList() {
    const [residents, setResidents] = useState([]);

    useEffect(() => {
        fetchResidents();
    }, []);

    const fetchResidents = async () => {
        try {
            const response = await axios.get('/api/residents');
            setResidents(response.data);
        } catch (error) {
            console.error("Error fetching residents:", error);
        }
    };

    const deleteResident = async (id) => {
        if (window.confirm('Are you sure you want to delete this resident?')) {
            try {
                await axios.delete(`/api/residents/${id}`);
                fetchResidents(); // Refresh the list after deleting
            } catch (error) {
                console.error("Error deleting resident:", error);
            }
        }
    };

    return (
        <div>
            <h2>Residents</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name (Latin)</th>
                        <th>Status</th>
                        <th>Citizenship</th>
                        <th>Family Group</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {residents.map(resident => (
                        <tr key={resident.id}>
                            <td>{resident.name_latin}</td>
                            <td>{resident.status}</td>
                            <td>{resident.citizenship}</td>
                            <td>{resident.family_group_id}</td>
                            <td>
                                <Link to={`/edit/${resident.id}`} className="btn btn-sm btn-primary me-2">Edit</Link>
                                <button onClick={() => deleteResident(resident.id)} className="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ResidentList;