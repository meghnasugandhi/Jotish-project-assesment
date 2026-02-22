import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PhotoResultPage = ({ img }) => {
  const navigate = useNavigate();

  return (
    <Container className="py-5 text-center">
      <h2 className="mb-4">Captured Image</h2>
      {img ? (
        <Card className="mx-auto shadow" style={{ maxWidth: '500px' }}>
          <Card.Img src={img} />
          <Card.Body>
            <Button variant="primary" onClick={() => navigate('/list')}>Back to Employee List</Button>
          </Card.Body>
        </Card>
      ) : (
        <p>No image captured. <Button onClick={() => navigate('/list')}>Go Back</Button></p>
      )}
    </Container>
  );
};

export default PhotoResultPage;