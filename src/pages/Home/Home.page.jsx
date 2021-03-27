import React from 'react'; // commented { useRef }
// import { useHistory, Link } from 'react-router-dom';

// import { useAuth } from '../../providers/Auth';
import './Home.styles.css';
import VideoCardList from '../../components/VideoCardList';
import ChannelCard from '../../components/ChannelCard';
import ChannelCardList from '../../components/ChannelCardList';
import videos from '../../components/mock/youtube-videos-mock.json';

function HomePage({ videoResults, channelResults }) {
  // const history = useHistory();
  // const sectionRef = useRef(null);
  // const { authenticated, logout } = useAuth();

  // function deAuthenticate(event) {
  //   event.preventDefault();
  //   logout();
  //   history.push('/');
  // }

  const cardListWidth = channelResults.length > 0 ? '70%' : '100%';

  return (
    <div style={{ marginTop: 100 }}>
      <section>
        <div style={{ display: 'flex' }}>
          
          {/* <div style={{ display: 'flex', justifyContent:'center'}}> */}
          {/* { channelResults.length > 0 && <ChannelCard channel={channelResults[0]} /> } */}
          {/* { channelResults.length > 0 && <ChannelCardList channelList={channelResults} /> } */}
          {/* </div> */}
          {/* <ChannelCard /> */}
          {/* <VideoCardList videoList={videoResults} /> */}
          
          <div style={{ display:'inline', textAlign: 'center', width: cardListWidth }}>
            <VideoCardList videoList={videoResults} />
          </div>
          { channelResults.length > 0 &&
          <div style={{ display:'inline', width: '30%' }}>
            <ChannelCardList channelList={channelResults} itemsAlignTo="left" /> 
          </div>}
        </div>
      </section>
      {/* <section className="homepage" ref={sectionRef}>
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
      </section> */}
    </div>
  );
}

export default HomePage;
