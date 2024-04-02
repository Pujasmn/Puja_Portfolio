import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { Login } from './components/login/login';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import  *  as  bootstrap from  'bootstrap';

import { Databinding } from './components/data-binding/data-binding';
import {Array} from './components/array/data-binding-array';
import {Databinding2} from './components/data-binding/data-binding2';
import { MountDemo } from './components/mount-demo/mount-demo';
import { Fakestore } from './components/fakestore/fakestore';
import { StyleBinding } from './components/style-binding/style-binding';
import { ClassBinding } from './components/class-binding/class-binding';
import { EventBinding } from './components/event-binding/event-binding';
import { Formik } from 'formik';
import { DebounceDemo } from './components/debounce-demo/debounce-demo';
import { CarouselDemo } from './components/carousel-demo/carousel-demo';
import { TouchDemo } from './components/touch-demo/touch-demo';
import { FormDemo } from './components/form-demo/form-demo';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < Databinding/>
    < Login />
    < Array/>
    < Databinding2/>
    < MountDemo/>
    < Fakestore/>
    < StyleBinding/>
    < ClassBinding/>
    < EventBinding/>
    < DebounceDemo/>
    < CarouselDemo/>
    < TouchDemo/>
    < FormDemo/>
  </React.StrictMode>
  
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
