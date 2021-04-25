import React from 'react';

const SideBar = () => {

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
              <a href="#">Favourites</a>
            </div>
        </>
    )
}

export default SideBar