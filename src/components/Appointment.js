import React from 'react';
import PropTypes from 'prop-types';

const Appointment = ({ appointment, handleDelete }) => {
    const { name, lastname, date, time, symptom, id } = appointment;

    return (
        <div className="cita">
         <p>Paciente: <span>{`${name} ${lastname}`}</span></p>   
         <p>Fecha: <span>{date}</span></p>
         <p>Hora: <span>{time}</span></p>
         <p>Sintomas: <span>{symptom}</span></p>
         <button 
            type='button' 
            className="button eliminar u-full-width" 
            onClick={ () => handleDelete(id) } 
        >
            Eliminar
        </button>
        </div>
    );
};

Appointment.propTypes = {
    appointment: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

export default Appointment;