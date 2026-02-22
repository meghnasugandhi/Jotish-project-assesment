// src/pages/ListPage.js
import React, { useState, useEffect } from 'react';
// Add 'Card' to the list of imports from react-bootstrap
import { Container, Table, Button, Row, Col, Badge, Spinner, Card } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';
import SalaryChart from '../components/SalaryChart';
import { fetchData } from '../services/api';

const ListPage = ({ setSelectedUser }) => {
  const [data, setData] = useState([]);
  const [showChart, setShowChart] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData().then(res => {
      setData(res);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="text-center mt-5"><Spinner animation="border" /></div>;

  return (
    <Container className="py-5">
      <Row className="mb-4 align-items-center">
        <Col><h2>Employee Records <Badge bg="secondary">{data.length}</Badge></h2></Col>
        <Col className="text-end">
          <Button variant="outline-primary" onClick={() => setShowChart(!showChart)}>
            {showChart ? "View Table" : "View Salary Analytics"}
          </Button>
        </Col>
      </Row>

      {showChart ? (
        <Card className="p-4 shadow-sm"><SalaryChart data={data} /></Card>
      ) : (
        <Table hover responsive className="shadow-sm border">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Salary</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map(emp => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td><strong>{emp.employee_name}</strong></td>
                <td>${emp.employee_salary}</td>
                <td>{emp.employee_age}</td>
                <td>
                  <Button variant="info" size="sm" onClick={() => { setSelectedUser(emp); navigate('/details'); }}>
                    View Profile
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default ListPage;