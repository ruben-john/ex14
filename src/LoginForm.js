// my-app/src/LoginForm.js
import React from 'react';
import './LoginForm.css'; 

const LoginForm = () => {
    return (
        <div className="login-form">
            <h1>Novell Services Login</h1>
            <form>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <br />
                <label>
                    City of Employment:
                    <input type="text" name="city" />
                </label>
                <br />
                <label>
                    Web server:
                    <select name="server">
                        <option value="">-- Choose a server --</option>
                        {/* Add server options here */}
                    </select>
                </label>
                <br />
                <label>Please specify your role:</label>
                <br />
                <label>
                    <input type="radio" name="role" value="Admin" /> Admin
                </label>
                <label>
                    <input type="radio" name="role" value="Engineer" /> Engineer
                </label>
                <label>
                    <input type="radio" name="role" value="Manager" /> Manager
                </label>
                <label>
                    <input type="radio" name="role" value="Guest" /> Guest
                </label>
                <br />
                <label>Single Sign-on to the following:</label>
                <br />
                <label>
                    <input type="checkbox" name="sso" value="Mail" /> Mail
                </label>
                <label>
                    <input type="checkbox" name="sso" value="Payroll" /> Payroll
                </label>
                <label>
                    <input type="checkbox" name="sso" value="Self-service" /> Self-service
                </label>
                <br />
                <button type="submit">Login</button>
                <button type="reset">Reset</button>
            </form>
        </div>
    );
};

export default LoginForm;