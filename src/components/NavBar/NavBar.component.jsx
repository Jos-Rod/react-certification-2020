import React from 'react';
import './NavBar.styles.css';

// const Rotate = styled.div`
//   display: inline-block;
//   animation: ${rotate} 2s linear infinite;
//   padding: 2rem 1rem;
//   font-size: 1.2rem;
// `;

const NavBar = () => (
    <div className="navBar">
      <div>
        <span></span>
      </div>
      <div style={{ display:'flex', alignItems:'center' }}>
          <input className="niceInput" />
          <button className="buttonSearch">Buscar</button>
        </div>
        <div className="rightActions">
            <p style={{ display:'inline'}}>iccono</p>
            <button style={{ display:'inline'}}>night</button>
        </div>
    </div>
  );

export default NavBar;