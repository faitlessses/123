import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditResident() {
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
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchResident = async () => {
            try {
                const response = await axios.get(`/api/residents/${id}`);
                // The birth_date needs to be formatted as YYYY-MM-DD for the input[type=date]
                const data = { ...response.data, birth_date: response.data.birth_date ? new Date(response.data.birth_date).toISOString().split('T')[0] : '' };
                setResident(data);
            } catch (error) {
                console.error("Error fetching resident:", error);
            }
        };
        fetchResident();
    }, [id]);

    const handleChange = (e) => {
        setResident({ ...resident, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/residents/${id}`, resident);
            navigate('/residents');
        } catch (error) {
            console.error("Error updating resident:", error);
        }
    };

    return (
        <div>
            <h2>Edit Resident</h2>
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
                 <div className="mb-3">
                    <label className="form-label">Citizenship</label>
                    <input type="text" className="form-control" name="citizenship" value={resident.citizenship} onChange={handleChange} />
                </div>
                 <div className="mb-3">
                    <label className="form-label">Family Group ID</label>
                    <input type="text" className="form-control" name="family_group_id" value={resident.family_group_id} onChange={handleChange} />
                </div>
                {/* Render other fields here for a complete form */}
                <button type="submit" className="btn btn-primary">Update Resident</button>
            </form>
        </div>
    );
}

export default EditResident;