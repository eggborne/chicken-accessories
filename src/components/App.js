import Header from './Header';
import AccessoryControl from './AccessoryControl';
import CartWidget from './CartWidget';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AccessoryControl />
        <CartWidget />
      </main>
    </div>
  );
}

export default App;
