import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import './Home.styles.css';
import VideoCard from '../../components/VideoCard';

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <div style={{ marginTop: 80 }}>
      <section>
        <div>
          <VideoCard title="Hello" description="descrip" videoSrc="https://esports.as.com/2021/03/02/fortnite/LazarBeam-Fortnite_1442565741_629436_1440x600.jpg" />
        </div>
      </section>
      <section className="homepage" ref={sectionRef}>
        <h1>Hello stranger!</h1>
        {authenticated ? (
          <>
            <h2>Good to have you back</h2>
            <span>
              <Link to="/" onClick={deAuthenticate}>
                ← logout
              </Link>
              <span className="separator" />
              <Link to="/secret">show me something cool →</Link>
            </span>
          </>
        ) : (
          <Link to="/login">let me in →</Link>
        )}
      </section>
    </div>
    
  );
}

export default HomePage;
