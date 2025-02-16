import { Navigate, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import SearchCountry from './pages/SearchCountry';
// import Country from './pages/Country';
import { lazy, Suspense } from 'react';
import Loader from './components/Loader/Loader';

const Home = lazy(() => import('./pages/Home'));
const SearchCountry = lazy(() => import('./pages/SearchCountry'));
const Country = lazy(() => import('./pages/Country'));

export const App = () => {
  return <Suspense fallback={<Loader />}>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/country" element={<SearchCountry />} />
    <Route path="/country/:countryId" element={<Country />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
  </Suspense>;
};
