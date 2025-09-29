CREATE TYPE resident_status AS ENUM ('active', 'departed', 'awaiting_bsn', 'relocated');

CREATE TABLE residents (
    id SERIAL PRIMARY KEY,
    name_latin VARCHAR(255) NOT NULL,
    name_cyrillic VARCHAR(255),
    photo_url TEXT,
    gender VARCHAR(50),
    birth_date DATE,
    citizenship VARCHAR(255),
    contact_email VARCHAR(255),
    phone_number VARCHAR(50),
    bsn VARCHAR(255),
    passport_number VARCHAR(255),
    v_nummer VARCHAR(255),
    status resident_status DEFAULT 'awaiting_bsn',
    family_group_id VARCHAR(255),
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- We can add some initial data for testing if needed
INSERT INTO residents (name_latin, name_cyrillic, gender, birth_date, citizenship, status, family_group_id) VALUES
('John Doe', 'Джон Доу', 'Male', '1990-01-15', 'Ukrainian', 'active', 'family_1'),
('Jane Doe', 'Джейн Доу', 'Female', '1992-05-20', 'Ukrainian', 'active', 'family_1'),
('Peter Jones', 'Питер Джонс', 'Male', '1985-11-30', 'Nigerian', 'awaiting_bsn', 'family_2');

-- A function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON residents
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();