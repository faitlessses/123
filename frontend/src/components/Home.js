import React from 'react';

function Home() {
    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Welcome to Haven</h1>
                <p className="col-md-8 fs-4">
                    The central system for managing residents, housing, and incidents.
                    Use the navigation bar to get started.
                </p>
            </div>
        </div>
    );
}

export default Home;