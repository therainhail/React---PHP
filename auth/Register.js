import React, { Component } from 'react';

function Register() {
    return (
        <div className="login">
            <form method="POST" action="http://localhost/MyTravelNotes/database/register.php">
                <label>
                    Name:
                    <input type="text" name="name"/>
                </label><br/>
                <label>
                    Email:
                    <input type="text" name="email"/>
                </label><br/>
                <label>
                    Password:
                    <input type="text" name="password"/>
                </label><br/>
                <input type="submit" value="Отправить"/>
            </form>
        </div>
    );
}

export default Register;