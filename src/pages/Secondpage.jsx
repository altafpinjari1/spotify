import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import '../styles/second.css';

const Secondpage = () => {
    return (
        <div className='second'>
        <h1>Why Spotify?</h1>
        <Container style={{marginTop:'20vh'}}>
        <Row className="cards-row">
          <Col md={3}>
              <Card.Img variant="top" src={icon1} style={{height:'20vh',width:'20vh'}}/>
              <Card.Body>
                <Card.Title className='mt-4'>Play your favorites.</Card.Title>
                <Card.Text className='mt-2'>
                Listen to the songs you love, and discover new music and podcasts.
                </Card.Text>
              </Card.Body>
          </Col>
          <Col md={3}>
           
              <Card.Img variant="top" src={icon2} style={{height:'20vh',width:'20vh'}}/>
              <Card.Body>
                <Card.Title className='mt-4'>Playlists made easy.</Card.Title>
                <Card.Text className='mt-2'>
                We'll help you make playlists. Or enjoy playlists made by music experts.
                </Card.Text>
              </Card.Body>
          
          </Col>
          <Col md={3}>
            
              <Card.Img variant="top" src={icon3} style={{height:'20vh',width:'20vh'}}/>
              <Card.Body>
                <Card.Title className='mt-4'>Make it yours.</Card.Title>
                <Card.Text className='mt-2'>
                Tell us what you like, and we'll recommend music for you.
                </Card.Text>
              </Card.Body>
           
          </Col>
          <Col md={3}>
              <Card.Img variant="top" src={icon4} style={{height:'20vh',width:'20vh'}}/>
              <Card.Body>
                <Card.Title className='mt-4'>Save mobile data.</Card.Title>
                <Card.Text className='mt-2'>
                To use less data when you play music, turn on Data Saver in Settings.
                </Card.Text>
              </Card.Body>
          </Col>
        </Row>
      </Container>
      </div>
    );
};

export default Secondpage;








