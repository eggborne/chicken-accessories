function Header() {
  const headerStyle = {
    width: '100%',
    height: '4rem',
    backgroundColor: '#222',
    color: '#ddd',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
    <header style={headerStyle}>
      <h1>Chicken Accessories</h1>
    </header>
  );
}

export default Header;
