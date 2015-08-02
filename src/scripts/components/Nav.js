import colorStore from '../stores/colorStore';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    const styles = {
      position: 'fixed',
      width: '100%',
      height: 50,
      textAlign: 'center',
      fontSize: 20
    };

    this.styles = styles;
    this.filler = {
      height: styles.height
    };
  }

  updateStyles() {
    let primary = colorStore.colors.primary;
    let inverse = colorStore.colors.inverse;

    let newStyles = {
      backgroundColor: inverse,
      color: primary
    };

    Object.assign(this.styles, newStyles);
  }

  render() {
    this.updateStyles();
    return (
      <div className="nav-container">
        <nav style={this.styles}>nav</nav>
        <div style={this.filler}></div>
      </div>
    );
  }
}

export default Nav;
