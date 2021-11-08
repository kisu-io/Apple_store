import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "./RegisterPage.css";
import authAction from "../../redux/actions/auth.action";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from 'react-router-dom';

const RegisterPage = () => {

    const [dataForm, setDataForm] = useState({
        name: "",
        email: "",
        password: ""
    });
    const {name, email, password} = dataForm;

    const handleOnChange = (e) => {
        setDataForm({...dataForm, [e.target.name]:e.target.value});
    };
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(authAction.register(dataForm));
        history.push('/login');
    };

    return (
        <div className="register-form">
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label><strong>Name: </strong></Form.Label>
                <Form.Control type="text" placeholder="Enter Name" name="name" value={name} onChange={handleOnChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><strong>Email: </strong></Form.Label>
                <Form.Control type="email" placeholder="Enter Email" name="email" value={email} onChange={handleOnChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label><strong>Password: </strong></Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={handleOnChange} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
    </div>
    )
}

export default RegisterPage
