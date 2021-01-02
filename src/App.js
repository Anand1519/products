import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import NavBar from 'component/navBar';
import Routes from 'routes';
import {Provider} from "react-redux";
import { store } from 'store';


function App() {
  return (
    <Provider store={store}>
      <NavBar/>
      <Routes/>
    </Provider>
  );
}

export default App;
