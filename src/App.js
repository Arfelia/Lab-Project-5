import React from 'react';
import { Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const cardInfo = {
    title: 'React и Bootstrap',
    text: 'Компонент Card из Bootstrap-React для отображения статичной информации.',
    imageUrl: 'https://i.pinimg.com/736x/44/9a/f4/449af45c470ddb9d9d082271da7f7b35.jpg'
  };

  return (
    <Container className="my-4">
      <h1 className="text-center my-4">Проект на React</h1>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={cardInfo.imageUrl} />
        <Card.Body>
          <Card.Title>{cardInfo.title}</Card.Title>
          <Card.Text>{cardInfo.text}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default App;
