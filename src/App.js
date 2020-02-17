import React, { useState, useEffect, Fragment } from 'react';
import Form from './components/Form';
import AppointmentsList from './components/AppointmentsList';

function App() {

  let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
  if(!initialAppointments) initialAppointments = [];

  const [ appointments, setAppointments ] = useState(initialAppointments);
  
  useEffect(() => {
    let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
    if(initialAppointments) {
      localStorage.setItem('appointments', JSON.stringify(appointments));
    } else {
      localStorage.setItem('appointments', '[]');
    }
  }, [appointments])

  const addAppointment = appointment => setAppointments([...appointments, appointment]);
    
  const handleDelete = id => {
    const newAppointments = appointments.filter(appointment => id!== appointment.id);
    setAppointments(newAppointments);
  }

  const titulo = appointments.length === 0 ? 'No hay citas' : 'Administrar citas';

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form addAppointment={addAppointment} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            <AppointmentsList appointments={appointments} handleDelete={handleDelete} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
