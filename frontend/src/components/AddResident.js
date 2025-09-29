import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddResident() {
    const [resident, setResident] = useState({
        name_latin: '',
        name_cyrillic: '',
        gender: '',
        birth_date: '',
        citizenship: '',
        contact_email: '',
        phone_number: '',
        bsn: '',
        passport_number: '',
        v_nummer: '',
        status: 'awaiting_bsn',
        family_group_id: '',
        notes: '',
        photo_url: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setResident({ ...resident, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/residents', resident);
            navigate('/residents');
        } catch (error) {
            console.error("Error adding resident:", error);
        }
    };

    return (
        <div>
            <h2>Add New Resident</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name (Latin)</label>
                    <input type="text" className="form-control" name="name_latin" value={resident.name_latin} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select className="form-select" name="status" value={resident.status} onChange={handleChange}>
                        <option value="active">Active</option>
                        <option value="departed">Departed</option>
                        <option value="awaiting_bsn">Awaiting BSN</option>
                        <option value="relocated">Relocated</option>
                    </select>
                </div>
                {/* Add other fields as needed, for brevity only showing a few */}
                 <div className="mb-3">
                    <label className="form-label">Citizenship</label>
                    <input type="text" className="form-control" name="citizenship" value={resident.citizenship} onChange={handleChange} />
                </div>
                 <div className="mb-3">
                    <label className="form-label">Family Group ID</label>
                    <input type="text" className="form-control" name="family_group_id" value={resident.family_group_id} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Add Resident</button>
            </form>
        </div>
    );
}

export default AddResident;