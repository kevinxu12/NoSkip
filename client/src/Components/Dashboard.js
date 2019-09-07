import React from 'react'
const Dashboard = () => {
    return (
        <div >
            <div className = "card darken-1">
                <div className="card-content">
                    <span className="card-title">
                        Add a Course</span>
                    <p>Click here to subscribe for courses</p>
                    </div>
                <div className="card-action">
                    <a href="/classes/new">Add New Classes</a>
                </div>
            </div>
           
        </div> 
    )
}

export default Dashboard;