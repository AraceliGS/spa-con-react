import React from 'react';
import PropTypes from 'prop-types';

const Header = ({title, url, paragraph}) => (
  <header>
    <h1>{title}</h1>
    <img src={url} alt={title}/>
    <p>{paragraph}</p>
  </header>
) 

Header.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired
}

Header.defaultProps = {
  title: 'Hola Mundo!!!',
  url: 'mundo.jpg',
  paragraph: 'Aprendiendo React, dominarás el mundo'
}
export default Header;