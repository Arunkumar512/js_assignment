import React from 'react'
import Card from 'react-bootstrap/Card';
import './total.css';
function Total_cards() {
  return (
    <div className='user'>  <Card  className='user1' style={{ width: '15rem' }}>
    <Card.Body>
      <Card.Title> 102k</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Revenue</Card.Subtitle>
      <Card.Text>
    
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className='user2'style={{ width: '15rem' }}>
    <Card.Body>
      <Card.Title>67K</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Order</Card.Subtitle>
      <Card.Text>
    
      </Card.Text>
    </Card.Body>
  </Card><Card className='user3'style={{ width: '15rem' }}>
    <Card.Body>
      <Card.Title>35k</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Pending</Card.Subtitle>
      <Card.Text>
    
      </Card.Text>
    </Card.Body>
  </Card><Card className='user4' style={{ width: '15rem' }}>
    <Card.Body>
      <Card.Title>55k</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Completed</Card.Subtitle>
      <Card.Text>
    
      </Card.Text>
    </Card.Body>
  </Card>
  
  
  
  </div>
  )
}

export default Total_cards