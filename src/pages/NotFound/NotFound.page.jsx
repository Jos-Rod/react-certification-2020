import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../../providers/Theme/Theme.provider';
import { ButtonHome } from '../../components/NavBar/NavBar-styling';

import './NotFound.styles.css';

function NotFoundPage() {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <section
      className="not-found"
      style={{ backgroundColor: `${currentTheme.lightPrincipalColor}`, height: '100%' }}
    >
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <div style={{ marginBottom: '30px' }}>
          <Link to="/" style={{ color: 'orange' }}>
            <ButtonHome>Go back home</ButtonHome>
          </Link>
        </div>
        <img src="404.gif" alt="page not found" />
      </div>
    </section>
  );
}

export default NotFoundPage;
