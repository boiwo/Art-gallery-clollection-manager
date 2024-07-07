


import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const styles = {
    navbar: {
      backgroundColor: '#444',
      padding: '1rem',
    },
    navList: {
      listStyleType: 'none',
      display: 'flex',
      justifyContent: 'flex-end',
    },
    navItem: {
      marginRight: '1rem',
    },
    navLink: {
      color: '#fff',
      textDecoration: 'none',
      padding: '0.5rem 1rem',
    },
  };

  return (
    <header style={styles.navbar}>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
          <li style={styles.navItem}><Link to="/about" style={styles.navLink}>About</Link></li>
          <li style={styles.navItem}><Link to="/services" style={styles.navLink}>Services</Link></li>
          <li style={styles.navItem}><Link to="/contact" style={styles.navLink}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


