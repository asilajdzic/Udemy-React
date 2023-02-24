
import { Routes, Route} from 'react-router-dom';

import Home from "./routes/home/home.component";
import Shop from './routes/shop/shop.component';
import SignIn from './routes/sign-in/sign-in.component';
import Navigation from './routes/navigation/navigation.component';


const App = () => {
  return (
    <Routes>
      <Route path='/' element = {<Navigation/>}>
        <Route index element = {<Home/>} />
        <Route path='/shop' element = {<Shop/>}></Route>
        <Route path='/sign-in' element = {<SignIn/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;