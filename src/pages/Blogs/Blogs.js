import React from 'react';

const Blogs = () => {
    return (
        <div className='container p-5'>
            <h1>Question & Answer</h1>
            <h3>1. Difference between authorization and authentication ?</h3>
            <p>
                Ans: <br />
                Authentication <br />
                Authentication verifies your identification before allowing you to use the system.
                It is the process of verifying a user's credentials in order to obtain access to their account.
                It checks to see if the user is who he claims to be.
                A username and password are normally required for authentication.
                Authentication is always done first because it is the initial stage in the authorisation process. <br />

                Authorization <br />
                The level of authorization decides whether you have permission to use the resources.
                It is the process of determining whether or not access is permitted.
                It establishes what a user is permitted to do and what he or she is not permitted to do.
                Depending on the security level, the authentication factors required for authorization may differ.
                After successful authentication, authorization takes place. <br />For example, before visiting the university's official website's student link, students at that university must first verify themselves. Authentication is what we call it. For example, after successful authentication, authorisation defines what information students are permitted to access on the university website.
            </p>
            <h3>2. Why are you using firebase ? </h3>
            <p>Ans: All data in the database is managed by Firebase in real time. As a result, data is easily and quickly transferred to and from the database. As a result, I recommend Firebase if you want to build mobile apps like live streaming, chat/messaging, and so on.</p>
            <h5> What other options do you have to implement authentication ?</h5>
            <p>Ans: A user name and password are typically used to authenticate a server. Cards, retina scans, voice recognition, and fingerprints, as well as email and message verification, are all options for authentication.</p>
            <h3>3. What other services does firebase provide other than authentication ?</h3>
            <p>Ans: Firebase offers a variety of services, the most useful of which are: <br /> Cloud Firestore
                <br /> Cloud Functions
                <br /> Hosting
                <br /> Cloud Storage
                <br /> Google Analytics
                <br /> Predictions
                <br /> Cloud Messaging
                <br /> Dynamic Links
                <br /> Remote Config</p>
        </div>
    );
};

export default Blogs;