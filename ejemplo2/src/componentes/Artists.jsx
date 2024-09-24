import React from 'react';

const artists = [
  { id: 1, name: 'Juan Perez', specialty: 'Tatuajes realistas', img: 'url_juan' },
  { id: 2, name: 'Ana Gomez', specialty: 'Tatuajes geométricos', img: 'url_ana' },
  // más artistas...
];

function Artists() {
  return (
    <section className="artists">
      <h2 className='Titulos'>Conoce a Nuestros Artistas</h2>
      <div className="artist-gallery">
        {artists.map(artist => (
          <div key={artist.id} className="artist-card">
            <img className='letra' src={artist.img} alt={artist.name} />
            <h3 className='letra'>{artist.name}</h3>
            <p className='letra'>{artist.specialty}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Artists;
