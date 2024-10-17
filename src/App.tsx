import { Provider } from 'react-redux';
import { dataStore } from './redux/store';
import HomePage from './page/HomePage';

function App() {
  return (
    <Provider store={dataStore}>
      <HomePage />
    </Provider>
  );
}

export default App;
