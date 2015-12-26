import React from 'react';
import styles from './navigation.css';
import Link from '../Link';

function Navigation() {
  return (
    <ul className={styles.navigation} role="menu">
      <li className={styles.navigationItem}>
        <a className={styles.navigationLink} href="/" onClick={Link.handleClick}>Home</a>
      </li>
      <li className={styles.navigationItem}>
        <a className={styles.navigationLink} href="/about" onClick={Link.handleClick}>About</a>
      </li>
    </ul>
  );
}

export default Navigation;
