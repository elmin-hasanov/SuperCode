import { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';

import { Beer } from '../types/Beer';

import Navbar from '../components/Navbar';

import backIcon from '../assets/img/Back.svg';

// Detailansicht für ein einzelnes Bier
const BeerDetail = () => {
  // ID aus der URL holen
  const { beerId } = useParams();

  // State für das aktuelle Bier
  const [beer, setBeer] = useState<Beer | null>(null);

  // Beim Laden der Seite (oder Änderung der ID) Bierdaten holen
  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((res) => res.json())
      .then((data) => setBeer(data));
  }, [beerId]);

  // Ladeanzeige, falls 🍺 Bier noch nicht da ist
  if (!beer)
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );

  return (
    <div className="beer-detail">
      <img className="beer-image" src={beer.image_url} alt={beer.name} />

      <h1>{beer.name}</h1>

      <p> {beer.tagline}</p>

      <p>First brewed: {beer.first_brewed}</p>

      <p>Attenuation level: {beer.attenuation_level}</p>

      <p>{beer.description}</p>

      <p>Created by: {beer.contributed_by.slice(0, 10)}</p>

      <Link to="/beers">
        <img src={backIcon} alt="Back" />
      </Link>

      {/* Navigationsleiste unten */}
      <Navbar />
    </div>
  );
};

export default BeerDetail;
