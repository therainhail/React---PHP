import React from 'react';


function Login() {
    return (
        <div className="login">
            <form method="POST" action="http://localhost/MyTravelNotes/database/auth.php">
                <label>
                    Email:
                    <input type="text" name="email" />
                </label><br/>
                <label>
                    Password:
                    <input type="text" name="password" />
                </label><br/>
                <input type="submit" value="Отправить" />
            </form>
        </div>
    );
}

export default Login;