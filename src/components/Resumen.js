import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { primerMayuscula } from '../helpers';

// Styled Components
const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFFFFF;
    margin-top: 1rem;
`;

const Li = styled.li`
    padding: .5rem 0;
`;

const Resumen = ({ datos }) => {
    // Extraer de datos
    const { marca, year, plan } = datos;

    if( marca === '' || year === '' || plan === '' ) return null;

    return (
        <ContenedorResumen>    
            <h2>Resumen de Cotización</h2>

            <ul>
                <Li>Marca: { primerMayuscula( marca ) }</Li>
                <Li>Plan: { primerMayuscula( plan ) }</Li>
                <Li>Año de Auto: { year }</Li>
            </ul>
        </ContenedorResumen>
    );
};

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
};

export default Resumen;