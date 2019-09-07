import React from 'react'
import { Link } from 'react-router-dom'; 

const Dashboard = () => {
    return (
        <div >
            <Link to="/classes/new">
                <button className = "teal btn">
                    Add Classes
                </button>
            </Link>
        </div> 
    )
}

export default Dashboard;