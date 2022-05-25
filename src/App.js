import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import authService from './Services/authService';
import { logout } from './store/slices/authSlice';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import AboutPage from './Pages/About/AboutPage';
import AuthPage from './Pages/Auth/AuthPage';
import CountryPage from './Pages/Country/CountryPage';
import CountryListPage from './Pages/CountryListPage/CountryListPage';
import HomePage from './Pages/Home/HomePage';
import PreferencesPage from './Pages/Preferences/PreferencesPage';
import NotFoundPage from './Pages/NotFound/NotFoundPage';

function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(state => state.auth);

  useEffect(() => {
    if (isLoggedIn) {
      const token = localStorage.getItem('user');
      console.log(Date.now());
      const decode = jwt_decode(token);
      if (decode.exp > Date.now()) {
        authService.logout();
        dispatch(logout());
      }
    }
  })

  return (
    <BrowserRouter>
      <Header />
      <div className='wrapper'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/auth' element={<AuthPage />} />
          <Route path='/countries' element={<CountryListPage />} />
          <Route path='/countries/:id' element={<CountryPage />} />
          <Route path='/about' element={<AboutPage />} />
          {isLoggedIn && <Route path='/preferences' element={<PreferencesPage />} />}
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
