
import App from '../App'; 
import Home from '../Pages/Home/Home';
import CountryDetails from '../Pages/CountryDetails/CountryDetails';

const routes = [
  {
    path: "/",
    element: <App />, 
    children: [
      {
        path: "/",
        element: <Home />, 
      },
      {
        path: "/country/:countryCode",
        element: <CountryDetails />, 
      }
    ]
  }
];

export default routes;