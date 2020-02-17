import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Appointment from "./Appointment";

const AppointmentsList = ({ appointments, handleDelete }) => {
    return (
        <Fragment>
           {
               appointments.map(appointment => <Appointment 
                                                    key={appointment.id} 
                                                    appointment={appointment} 
                                                    handleDelete={handleDelete} 
                                                />)
            } 
        </Fragment>
    );
};

AppointmentsList.propTypes = {
    appointments: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

export default AppointmentsList;