import React, { useState, useEffect } from 'react';
import { Header, Card } from "semantic-ui-react";
import Axios from 'axios';

export default function Home() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    Axios.get('https://swapi.co/api/people/')
      .then(res => {
        let data = res.data.results;
        setPeople(data)
      })
      .catch(err => {
        console.log('something went wrong here...')
      });
  }, []);

  const renderPeople = () => {
    const styles = {
      card: {
        textAlign: 'center',
        width: '200px',
        height: '100px',
        color: 'black',
      }
    }

    if (people.length <= 0)
      return <h2>Error contacting SWAPI...</h2>
    return people.map(person => (
      <Card
        href='/character'
        character_url={person.url}
        homeworld_url={person.homeworld}
        style={styles.card}
      >
        <Card.Content>
        <Card.Header as='h3'>{person.name}</Card.Header>
        <Card.Meta>Birth: {person.birth_year}</Card.Meta>
        </Card.Content>
      </Card>
    ))
  }

  return (
    <>
      <Header as='h1'>Star Wars Characters Using SWAPI</Header>
      <Card.Group centered itemsPerRow={4}>
        {renderPeople()}
      </Card.Group>
    </>
  )
}
