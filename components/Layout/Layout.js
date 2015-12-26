import React, { PropTypes } from 'react';
import styles from './layout.css';
// import Navigation from '../Navigation';

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <div className="wrap-content">
        {children}
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
