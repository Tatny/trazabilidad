import React from 'react';
import { Form, Button, FormGroup } from 'react-bootstrap';
import "./LoginA.css";

function LoginA(props) {
    return (

        
        <div className="Button">
            <div className="Logo">
                <img src="https://img.icons8.com/bubbles/2x/worldwide-location.png" alt="" />
            </div>
        

            <strong>Quien eres?</strong>
            <div>
            <Button variant="primary">Mentor</Button>{' '}
            <Button variant="primary">Emprendedor</Button>{' '}

            </div>
        </div>
    );
}

export default LoginA;