import React from 'react';
import NavTicker from './NavTicker';

const Nav = ({ colors }) => {
  const height = 50;
  const style = {
    height,
    position: 'fixed',
    width: '100%',
    textAlign: 'center',
    fontSize: 21,
    color: colors.primary,
    backgroundColor: colors.inverse
  };

  return (
    <div className="nav-container">
      <nav style={style}>
        FA$TCA$HMONEYPLU$.biz
        <NavTicker />
      </nav>
      <div style={{ height }}></div>
    </div>
  );
};

export default Nav;
