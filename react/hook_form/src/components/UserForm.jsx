import React, { useState } from  'react';


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    return(
        <div className="container">
            <div className="mb-3">
                <label className="form-label">First Name: </label> 
                <input className="form-control" type="text" onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div className="mb-3">
                <label className="form-label">Last Name: </label> 
                <input className="form-control" type="text" onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div className="mb-3">
                <label className="form-label">Email: </label>
                <input className="form-control" type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div className="mb-3">
                <label className="form-label">Password: </label>
                <input className="form-control" type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div className="mb-3">
                <label className="form-label">Confirm Password: </label>
                <input className="form-control" type="text" onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            <div className="mb-3">
                <ul>Your Form Data</ul>
                <ul>First Name: {firstName}</ul>
                <ul>Last Name: {lastName}</ul>
                <ul>Email: {email}</ul>
                <ul>Password: {password}</ul>
                <ul>Confirm Password: {confirmPassword}</ul>
            </div>
        </div>
    );
};

export default UserForm;
