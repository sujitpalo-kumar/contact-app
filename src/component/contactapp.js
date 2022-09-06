import React, {useEffect, useState} from "react";
import ContactList from "./contactlist";
import ContactCard from "./contactcard";
import Axios from "axios";

let ContactApp = () => {
    let [contact , setContact] = useState({
        contacts : [],
        errorMessage : '',
        selectedContact : {}
    });

    useEffect(() => {
        let dataURL = 'https://gist.githubusercontent.com/thenaveensaggam/6476ae426cd08e3ee8854a2bf1338a1e/raw/cd59ee3eb7ca2715606ba3f623ee165a4d0931c1/contacts-18082020.json';
        Axios.get(dataURL).then((response) => {
            setContact({
                ...contact,
                contacts : response.data
            });
        }).catch((err) => {
            console.error(err);
            setContact({
                ...contact,
                errorMessage : err
            });
        });
    }, []);

    // receive data from ContactList
    let receiveData = (providedContact) => {
        setContact({
            ...contact,
            selectedContact : providedContact
        });
    };

    return(
        <React.Fragment>
           <div className="container mt-3">
               <div className="row">
                   <div className="col">
                       <p className="h3 text-primary">Contact App</p>
                       <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem et incidunt, ipsa itaque maxime minima minus natus, possimus quae, quos rerum tempora veritatis? Autem debitis molestias non repellat vel.</p>
                   </div>
               </div>
               <div className="row mt-3">
                   <div className="col-md-9">
                       {
                           contact.contacts.length > 0 ?
                               <React.Fragment>
                                   <ContactList contacts={contact.contacts} sendData={receiveData}/>
                               </React.Fragment> : null
                       }
                   </div>
                   <div className="col-md-3">
                       {
                           Object.keys(contact.selectedContact).length > 0 ?
                               <React.Fragment>
                                   <ContactCard selectedContact={contact.selectedContact}/>
                               </React.Fragment> : null
                       }
                   </div>
               </div>
           </div>
        </React.Fragment>
    )
};
export default ContactApp;
