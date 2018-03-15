import React from 'react';
import Lista from './lista'
import PropTypes from 'prop-types';

const Section = ({contenido, arrayCursos}) => (
  <section>
    <p>{contenido}</p>
    <Lista cursos={arrayCursos}/>
  </section>
) 

Section.propTypes = {
  contenido: PropTypes.string.isRequired,
  arrayCursos: PropTypes.arrayOf(PropTypes.string).isRequired
}

Section.defaultProps = {
  contenido: 'Busca en Internet',
  arrayCursos: ['React', 'Redux']
}

export default Section;
