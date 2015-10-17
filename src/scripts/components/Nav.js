import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    const height = 50;
    this.fillerStyle = { height };
    this.style = {
      height,
      position: 'fixed',
      width: '100%',
      textAlign: 'center',
      fontSize: 21
    };
  }

  updateColors() {
    Object.assign(this.style, {
      color: this.props.colors.primary,
      backgroundColor: this.props.colors.inverse
    });
  }

  render() {
    this.updateColors();

    return (
      <div className="nav-container">
        <nav style={this.style}>
          FA$TCA$HMONEYPLU$.biz
          <br />
          >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$++++++++++++++++++++++++++++++++++++++
        </nav>
        <div style={this.fillerStyle}></div>
      </div>
    );
  }
}

export default Nav;
