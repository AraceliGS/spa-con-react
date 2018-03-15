import React from 'react';
import Lista from './lista'
import PropTypes from 'prop-types';
import '../style.css'
const Section = ({contenido, arrayCursos, isActive}) => {
const styling = isActive? 'curso-active' : 'curso-inactive'
return(
  <section>
    <p className={styling}>{contenido}</p>
    <Lista cursos={arrayCursos}/>
  </section>)
}

Section.propTypes = {
  contenido: PropTypes.string.isRequired,
  arrayCursos: PropTypes.arrayOf(PropTypes.string).isRequired,
  isActive: PropTypes.bool.isRequired
}

Section.defaultProps = {
  contenido: 'Busca en Internet',
  arrayCursos: ['React', 'Redux'],
  isActive: false
}

export default Section;
