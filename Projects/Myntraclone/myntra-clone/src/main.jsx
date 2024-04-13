import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../Routes/App.jsx';
import './index.css';
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import Bag from '../Routes/Bag.jsx';
import Home from '../Routes/Home.jsx';
import {Provider} from "react-redux";
import myntraStore from './store/index.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> /*, loader: postLoader */ },
      {
        path: "/bag",
        element: <Bag />,
        /*action: createPostAction,*/
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={myntraStore} />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
