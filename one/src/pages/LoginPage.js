// src/pages/LoginPage.js
import React, { useState } from 'react';
import { Form, Button, Card, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setAuth }) => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (user === "testuser" && pass === "Test123") {
      setAuth(true);
      navigate('/list');
    } else {
      setError(true);
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <Card style={{ width: '400px' }} className="shadow-lg border-0">
        <Card.Body className="p-5">
          <h2 className="text-center mb-4">Staff Portal</h2>
          {error && <Alert variant="danger">Invalid Credentials</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="testuser" onChange={(e)=>setUser(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Test123" onChange={(e)=>setPass(e.target.value)} required />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 py-2">Sign In</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginPage;