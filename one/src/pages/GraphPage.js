import React from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SalaryChart from '../components/SalaryChart';

const GraphPage = ({ data }) => {
  const navigate = useNavigate();

  return (
    <Container className="py-5">
      <Button variant="secondary" className="mb-4" onClick={() => navigate('/list')}>
        ← Back to List
      </Button>
      <Card className="shadow p-4">
        <Card.Title className="text-center mb-4">Top 10 Employee Salaries</Card.Title>
        <SalaryChart data={data} />
      </Card>
    </Container>
  );
};

export default GraphPage;