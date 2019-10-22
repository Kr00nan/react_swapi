import React, { useState, useEffect } from 'react';
import { Header, Card } from "semantic-ui-react";
import Axios from 'axios';

export default function Home() {
  const [people, setPeople] = useState([
    {
      "birth_year": "19 BBY",
      "eye_color": "Blue",
      "films": [
        "https://swapi.co/api/films/1/",
      ],
      "gender": "Male",
      "hair_color": "Blond",
      "height": "172",
      "homeworld": "https://swapi.co/api/planets/1/",
      "mass": "77",
      "name": "Luke Skywalker",
      "skin_color": "Fair",
      "created": "2014-12-09T13:50:51.644000Z",
      "edited": "2014-12-10T13:52:43.172000Z",
      "species": [
        "https://swapi.co/api/species/1/"
      ],
      "starships": [
        "https://swapi.co/api/starships/12/",
      ],
      "url": "https://swapi.co/api/people/1/",
      "vehicles": [
        "https://swapi.co/api/vehicles/14/"
      ]
    }]
  );

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
      <Card
        href='/character'
        header={person.name}
        meta={person.birth_year}
        character_url={person.url}
        homeworld_url={person.homeworld}
      />
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
