import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../styles/fourth.css';

const Fourth = () => {
    const accordionStyle = {
        width: '80vw',
        marginTop:'10vh'
      };

  const accordionItemStyle = {
    border: 'none',
    marginTop:'1vh'
  };

  const accordionHeaderStyle = {
    backgroundColor: "white",
    padding: '10px',
    fontsize:'5vh',
  };

  const accordionBodyStyle = {
    padding: '10px',
  };

  return (
    <div style={{ padding: '20px' }}>
        <h1 style={{marginTop:'7vh',fontWeight:'700'}}>Got questions?</h1>
        <div className="list-items">
        <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="0" style={accordionItemStyle}>
          <Accordion.Header style={accordionHeaderStyle}>How do I create a playlist?</Accordion.Header>
          <Accordion.Body style={accordionBodyStyle}>
      <div className="listing">
      <p >  Playlists are a great way to save collections of music, either for your own listening or to share.To create one:</p>
        <ol>1. Tap Your Library.</ol>
        <ol>2. Tap CREATE.</ol>
        <ol>3. Give your playlist a name.</ol>
        <ol>4. Start adding songs (and we'll help you along).</ol>
      </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" style={accordionItemStyle}>
          <Accordion.Header style={accordionHeaderStyle}>How do I activate Data Saver mode?</Accordion.Header>
          <Accordion.Body style={accordionBodyStyle}>
            <div className="listing">
            <ol>1. Tap Home.</ol>
            <ol>2. Tap Settings.</ol>
            <ol>3. Tap Data Saver.</ol>
            <ol>4. Switch on Data Saver.</ol>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" style={accordionItemStyle}>
          <Accordion.Header style={accordionHeaderStyle}>Is it only possible to shuffle play music?</Accordion.Header>
          <Accordion.Body style={accordionBodyStyle}>
         <div className="listing">
         <p>Any playlist with the shuffle icon will play on shuffle.</p>
<p>Some playlists won't have the shuffle icon, so you can tap any song to play it.</p>
         </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" style={accordionItemStyle}>
          <Accordion.Header style={accordionHeaderStyle}>Where can I find Podcasts?</Accordion.Header>
          <Accordion.Body style={accordionBodyStyle}>
         <div className="listing">
         <span> Tap Search. Under Browse All, tap Podcasts.</span>
         </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
        </div>
    </div>
  );
};

export default Fourth;
