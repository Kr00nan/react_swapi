import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import { Header, Card, Container } from "semantic-ui-react";
import Axios from 'axios';

function App() {
  const [people, setPeople] = useState([]);

  // useEffect(() => {
  //   Axios.get('https://swapi.co/api/people/')
  //     .then(res => {
  //       let data = res.data.results;
  //       setPeople(data)
  //     })
  //     .catch(err => {
  //       console.log('something went wrong here...')
  //     });
  // }, []);

  const renderPeople = () => {
    if (people.length <= 0)
      return <h2>Error contacting SWAPI...</h2>
    return people.map(person => (
      <Card>
        <Card.Content>
          <Card.Header>{person.name}</Card.Header>
          <Card.Meta>{person.birth_year}</Card.Meta>
          <Card.Description>
            {person.homeworld}
          </Card.Description>
        </Card.Content>
      </Card>
    ))
  }

  return (
    <Container>
      <Header as="h1">Star Wars Characters</Header>
      <br />
      <Card.Group>
        {renderPeople()}
      </Card.Group>
    </Container>
  )
}

export default App;
