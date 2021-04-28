import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';

const SideBar = () => {
  const { authenticated } = useAuth();

  function closeNav() {
    document.getElementById('mySidebar').style.width = '0';
  }

  // function openNav() {
  //     document.getElementById("mySidebar").style.width = "250px";
  //   }

  return (
    <>
      <div id="mySidebar" className="sidebar">
        {/* <a className="closebtn" role="button" >
          ×
        </a> */}
        <button className="closebtn" onClick={closeNav} type="button">
          ×
        </button>
        <Link to="/">Home</Link>
        {authenticated ? <Link to="/favourites">Favourites</Link> : null}
      </div>
    </>
  );
};

export default SideBar;
