import React, { useState } from 'react';

function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    artist: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reserva hecha para ${form.name} con ${form.artist}`);
  };

  return (
    <section className="booking">
      <p className='Titulos'>Reserva tu Cita</p>
      <form onSubmit={handleSubmit}>
        <div><label className='letra'>Nombre:<input type="text" name="name" value={form.name} onChange={handleChange} required /></label></div>
        <div><label className='letra'>Email:<input type="email" name="email" value={form.email} onChange={handleChange} required /></label></div>
        <div><label className='letra' >Fecha:<input type="date" name="date" value={form.date} onChange={handleChange} required /></label></div>
        <div><label className='letra'>Artista:<select name="artist" value={form.artist} onChange={handleChange} required><option className='letra' value="">Selecciona un artista</option>
            <option className='letra' value="Juan Perez">Juan Perez</option>
            <option className='letra' value="Ana Gomez">Ana Gomez</option>
          </select></label ></div>
        <button className='letra' type="submit">Reservar</button>
      </form>
    </section>
  );
}

export default BookingForm;
