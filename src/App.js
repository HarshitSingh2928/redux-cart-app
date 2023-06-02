
import './App.css';
import CartPage from './components/CartPage';
import { Provider } from 'react-redux';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <CartPage/>
    </div>
    </Provider>
  );
}
export default App;
