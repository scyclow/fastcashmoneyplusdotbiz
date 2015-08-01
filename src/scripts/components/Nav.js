class Nav extends React.Component {
  constructor(props) {
    super(props);

    const styles = {
      position: 'fixed',
      width: '100%',
      height: 50,
      backgroundColor: 'blue',
      color: 'white',
      textAlign: 'center',
      fontSize: 20
    };

    this.styles = styles;
    this.filler = {
      height: styles.height
    };
  }

  render() {
    return (
      <div className="nav-container">
        <nav style={this.styles}>nav</nav>
        <div style={this.filler}></div>
      </div>
    );
  }
}

export default Nav;
