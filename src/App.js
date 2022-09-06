import React from 'react';
import './App.css';
import ContactApp from './component/contactapp';




let App = () => {

    return(
        <React.Fragment>
           <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
               <a href="/" className="navbar-brand">React Hooks with LifeCycle & useEffect()</a>
           </nav>
           <ContactApp/>

          
        </React.Fragment>
    );
};


export default App;
