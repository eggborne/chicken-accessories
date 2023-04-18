import Header from './Header';
import AccessoryList from './AccessoryList';
import CartWidget from './CartWidget';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AccessoryList />
        <CartWidget />
      </main>
    </div>
  );
}

export default App;
