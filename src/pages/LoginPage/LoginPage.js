import React, {useState, useEffect} from 'react';
import {Form, Button} from 'react-bootstrap';
import './LoginPage.css';
import authAction from '../../redux/actions/auth.action';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

const LoginPage = () => {
  const [dataForm, setDataForm] = useState({
    email: '',
    password: '',
  });
  const {email, password} = dataForm;

  const handleOnChange = (e) => {
    setDataForm({...dataForm, [e.target.name]: e.target.value});
  };
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authAction.login(dataForm));
    history.push('/product');
  };

  return (
    <div className="register-form" style={{}}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <strong>Email address:</strong>
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            <strong>Password:</strong>
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
