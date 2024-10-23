import React from 'react';
import { Row, Col, Card, Table, ProgressBar } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { name: 'Jan', uv: 4000 },
  { name: 'Feb', uv: 3000 },
  { name: 'Mar', uv: 2000 },
  { name: 'Apr', uv: 2780 },
  { name: 'May', uv: 1890 },
];

const recentActivities = [
  { id: 1, activity: 'User Vaishnavi Dasari logged in', date: '2024-10-15' },
  { id: 2, activity: 'User Katari Kamalaesh placed an order', date: '2024-10-20' },
  { id: 3, activity: 'User Krishna updated profile', date: '2024-10-21' },
];

const MainContent = () => {
  return (
    <div className="p-3" style={{ marginLeft: '250px' }}>
      <Row>
        <Col md={3}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Total Users</Card.Title>
              <Card.Text>1,000</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Revenue</Card.Title>
              <Card.Text>$10,000</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Orders</Card.Title>
              <Card.Text>150</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Conversion Rate</Card.Title>
              <Card.Text>5%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <LineChart width={600} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          </LineChart>
        </Col>
        <Col md={4}>
          <h5>Performance Metrics</h5>
          <ProgressBar now={60} label="Metric 1: 60%" className="mb-2" />
          <ProgressBar now={80} label="Metric 2: 80%" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>Recent Activities</h5>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Activity</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {recentActivities.map(activity => (
                <tr key={activity.id}>
                  <td>{activity.id}</td>
                  <td>{activity.activity}</td>
                  <td>{activity.date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default MainContent;
