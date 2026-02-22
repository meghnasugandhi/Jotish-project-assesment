import React, { useRef } from 'react';
import Webcam from 'react-webcam';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const DetailsPage = ({ user, setCapturedImg }) => {
  const webcamRef = useRef(null);
  const navigate = useNavigate();

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImg(imageSrc);
    navigate('/photo-result');
  };

  if (!user) return <Container className="mt-5"><h3>No User Selected</h3><Button onClick={() => navigate('/list')}>Go Back</Button></Container>;

  return (
    <Container className="py-5">
      <Row>
        <Col md={5}>
          <Card className="shadow border-0">
            <Card.Body>
              <h3 className="text-primary">{user.employee_name}</h3>
              <p className="text-muted">Employee ID: {user.id}</p>
              <hr />
              <h5>Details</h5>
              <p><strong>Age:</strong> {user.employee_age}</p>
              <p><strong>Salary:</strong> ${user.employee_salary}</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={7}>
          <Card className="shadow text-center">
            <Card.Header>Camera Verification</Card.Header>
            <Card.Body>
              <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" width="100%" className="rounded mb-3" />
              <Button variant="success" size="lg" onClick={capture}>Capture Identity Photo</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailsPage;