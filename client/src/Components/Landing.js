import React, { Component } from 'react'; 

class Landing extends Component {

    render() {
        return (
            <div class="container">
                <div class="section no-pad-bot" id="index-banner">
                    <div class="container">
                        <h1 class="header center orange-text">NoSkip</h1>
                        <div class="row center">
                            <h5 class="header col s12 light">A site designed to get students to attend classes</h5>
                        </div>
                    </div>
                </div>
                <div class="section">
                <div class="row">
                    <div class="col s12 m4">
                    <div class="icon-block">
                        <h2 class="center light-blue-text"><i class="material-icons">flash_on</i></h2>
                        <h5 class="center">Empirically-Proven Game Theory Strategy</h5>

                        <p class="light">NoSkip utilizes the idea of a commitment strategy, empirically proven to be the most effective incentive mechanism. Users deposit money into the app and only get the money back when they answer NoSkip's verification questions correctly</p>
                    </div>
                    </div>

                    <div class="col s12 m4">
                    <div class="icon-block">
                        <h2 class="center light-blue-text"><i class="material-icons">group</i></h2>
                        <h5 class="center">Experience Tailored Toward Penn</h5>

                        <p class="light">NoSkip supports a wide variety of Penn classes. NoSkip's teams of verifiers provide course-specific verification surveys to confirm whether or not users went to class</p>
                    </div>
                    </div>

                    <div class="col s12 m4">
                    <div class="icon-block">
                        <h2 class="center light-blue-text"><i class="material-icons">settings</i></h2>
                        <h5 class="center">Easy to work with</h5>

                        <p class="light">Sign in as a grader if you'd like to submit verification quizzes. Sign in with google if you'd like to enroll as a user</p>
                    </div>
                    </div>
                </div>

                </div>
            </div>
        );
    }
}

export default Landing;