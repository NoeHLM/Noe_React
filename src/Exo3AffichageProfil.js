import React from 'react';
import { useParams } from 'react-router-dom';
import './Exo3.css';

function AffichageProfil({ profiles }) {
  const { id } = useParams();

  const profil = profiles.find((profile) => profile.id === id);

  const prenom = profil.prenom;
  const nom = profil.nom;
  const photo = profil.photo;
  const description = profil.description;
  const poste = profil.poste;

  return (
    <div className="profile-container">
      <img src={photo} alt={prenom} className="profile-image" />
      <p className="profile-name">{prenom} {nom}</p>
      <p className="profile-description">{description}</p>
      <p className="profile-poste">{poste}</p>
    </div>
  );
}

export default AffichageProfil;
