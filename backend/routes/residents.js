const express = require('express');
const { Pool } = require('pg');
const router = express.Router();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// GET all residents
router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM residents ORDER BY id ASC');
    res.json(rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// GET a single resident by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { rows } = await pool.query('SELECT * FROM residents WHERE id = $1', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ msg: 'Resident not found' });
        }
        res.json(rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// POST (create) a new resident
router.post('/', async (req, res) => {
    try {
        const { name_latin, name_cyrillic, gender, birth_date, citizenship, contact_email, phone_number, bsn, passport_number, v_nummer, status, family_group_id, notes, photo_url } = req.body;
        const newResident = await pool.query(
            'INSERT INTO residents (name_latin, name_cyrillic, gender, birth_date, citizenship, contact_email, phone_number, bsn, passport_number, v_nummer, status, family_group_id, notes, photo_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *',
            [name_latin, name_cyrillic, gender, birth_date, citizenship, contact_email, phone_number, bsn, passport_number, v_nummer, status, family_group_id, notes, photo_url]
        );
        res.status(201).json(newResident.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// PUT (update) a resident
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name_latin, name_cyrillic, gender, birth_date, citizenship, contact_email, phone_number, bsn, passport_number, v_nummer, status, family_group_id, notes, photo_url } = req.body;

        const updatedResident = await pool.query(
            'UPDATE residents SET name_latin = $1, name_cyrillic = $2, gender = $3, birth_date = $4, citizenship = $5, contact_email = $6, phone_number = $7, bsn = $8, passport_number = $9, v_nummer = $10, status = $11, family_group_id = $12, notes = $13, photo_url = $14, updated_at = NOW() WHERE id = $15 RETURNING *',
            [name_latin, name_cyrillic, gender, birth_date, citizenship, contact_email, phone_number, bsn, passport_number, v_nummer, status, family_group_id, notes, photo_url, id]
        );

        if (updatedResident.rows.length === 0) {
            return res.status(404).json({ msg: 'Resident not found' });
        }
        res.json(updatedResident.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// DELETE a resident
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteOp = await pool.query('DELETE FROM residents WHERE id = $1 RETURNING *', [id]);
        if (deleteOp.rowCount === 0) {
            return res.status(404).json({ msg: 'Resident not found' });
        }
        res.json({ msg: 'Resident deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;