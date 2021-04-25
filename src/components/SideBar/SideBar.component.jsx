import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';

const SideBar = () => {
    const { authenticated } = useAuth();

    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
      }

    // function openNav() {
    //     document.getElementById("mySidebar").style.width = "250px";
    //   }
    

    return (
        <>
            <div id="mySidebar" class="sidebar">
              <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>×</a>
              <a href="#">Home</a>
              { authenticated ? <Link to="/favourites">Favourites</Link> : null }
            </div>
        </>
    )
}

export default SideBar