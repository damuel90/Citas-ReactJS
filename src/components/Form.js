import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({addAppointment}) => {
    const initialState = {
        name: '',
        lastname: '',
        date: '',
        time: '',
        symptom: '',
        id:''
    }
    const [ appointment, setAppointment ] = useState(initialState);

    const handleChange = event => setAppointment({ ...appointment, [event.target.name]:event.target.value });

    const { name, lastname, date, time, symptom } = appointment;

    const handleSubmit = event => {
        event.preventDefault();
        if(name==='' || lastname==='' || date==='' || time==='' || symptom==='') return;
        const newAppointment = {...appointment, id:Date.now()}
        addAppointment(newAppointment);
        setAppointment(initialState);
    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Nombre" 
                    className="u-full-width"
                    onChange={handleChange}
                    value={name}
                />
                <label>Apellido</label>
                <input 
                    type="text" 
                    name="lastname" 
                    placeholder="Apellido" 
                    className="u-full-width"
                    onChange={handleChange}
                    value={lastname}
                />
                 <label>Fecha</label>
                <input 
                    type="date" 
                    name="date" 
                    className="u-full-width"
                    onChange={handleChange}
                    value={date}
                />
                 <label>Hora</label>
                <input 
                    type="time" 
                    name="time" 
                    className="u-full-width"
                    onChange={handleChange}
                    value={time}
                />
                 <label>Sintomas</label>
                <textarea 
                    name="symptom" 
                    className="u-full-width"
                    onChange={handleChange}
                    value={symptom}
                ></textarea>
                <button type="submit" className="button-primary u-full-width">Agregar</button>
            </form>
        </Fragment>
    );
};

Form.propTypes = {
    addAppointment: PropTypes.func.isRequired,
};

export default Form;