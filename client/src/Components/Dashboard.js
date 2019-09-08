import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions'
import ChartLayout from './ChartLayout';
class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        const user = this.props.user;
        return (
            <div >
                <div className = "card">
                    <div className="card-content red lighten-5">
                        <span className="card-title">
                            Add a Course</span>
                        <p>Click here to subscribe for courses</p>
                        </div>
                    <div className="card-action">
                        <a href="/classes/new">Add New Classes</a>
                    </div>
                </div>
                <div className = "card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">
                            User Dashboard
                        </span>
                        <p>See How You're Doing!</p>
                        <p>Classes Skipped: {(user && user.verifiedAttendance) ? user.verifiedAttendance : 0}</p>
                        <p>Most Skipped Class: CIS 121 (3 Skips)</p>
                        <p>Biggest Progress: MKTG 101 </p>
                        <p>Classes Attended: {(user && user.unverifiedAttendance) ? user.unverifiedAttendance : 0} </p>
                    </div>
                    <div className="card-content white" style = {{borderStyle: "solid", borderColor: "blue-grey"}}>
                        <ChartLayout/>
                    </div>
                </div>
            
            </div> 
        )
    }
}
function mapStateToProps(state) {
    return { user: state.auth};
}
export default connect(mapStateToProps, { fetchUser })(Dashboard);