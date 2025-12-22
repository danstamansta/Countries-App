
import App from '../App'; 
import Home from '../Pages/Home';
import CountryDetails from '../Pages/CountryDetails';

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
        path: "/country/:code",
        element: <CountryDetails />, 
      }
    ]
  }
];

export default routes;