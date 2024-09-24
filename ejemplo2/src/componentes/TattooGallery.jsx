import React from 'react';

const tattoos = [
  { id: 1, name: 'Tatuaje tribal', img: 'url_1' },
  { id: 2, name: 'Tatuaje acuarela', img: 'url_2' },
  // más tatuajes...
];

function TattooGallery() {
  return (
    <section class="gallery">
      <h2 className='Titulos'>Galería de Tatuajes</h2>
      <div className="tattoo-gallery">
        {tattoos.map(tattoo => (
          <div key={tattoo.id} className="tattoo-card">
            <img className='letra' src={tattoo.img} alt={tattoo.name} />
            <p className='letra'>{tattoo.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TattooGallery;
