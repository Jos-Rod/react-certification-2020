import React from 'react';
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
              { authenticated ? <a href="#">Favourites</a> : null }
            </div>
        </>
    )
}

export default SideBar