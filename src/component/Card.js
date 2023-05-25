import Card from 'react-bootstrap/Card';
import './card.css'

function Cards() {
  return (
    <div>
    <Card className='main' style={{ width: '12rem',height:'12rem' }}>
      <Card.Body>
        <Card.Title className='icon1'>
          <img className='icon' src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" alt="" />
        </Card.Title>
        <Card.Subtitle className="admin">Admin</Card.Subtitle>
        <Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Cards;