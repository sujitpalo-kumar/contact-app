import React from "react";

let ContactList = (props) => {

    let clickContact = (contact) => {
       props.sendData(contact)
    };

    return(
        <React.Fragment>
            <table className="table table-hover table-primary text-center table-striped">
                <thead className="bg-primary text-white">
                <tr>
                    <th>SNO</th>
                    <th>IMAGE</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>EMAIL</th>
                    <th>LOCATION</th>
                </tr>
                </thead>
                <tbody>
                {
                    Object.keys(props).length !== 0 ?
                        <React.Fragment>
                            {
                                props.contacts.map((contact) => {
                                    return (
                                        <tr key={contact.login.uuid} onClick={clickContact.bind(this,contact)}>
                                            <td>{contact.login.uuid.substr(contact.login.uuid.length - 4)}</td>
                                            <td>
                                                <img src={contact.picture.large} alt='' width="50" height="50"/>
                                            </td>
                                            <td>{contact.name.first} {contact.name.last}</td>
                                            <td>{contact.dob.age} Yrs.</td>
                                            <td>{contact.email}</td>
                                            <td>{contact.location.city}</td>
                                        </tr>
                                    )
                                })
                            }
                        </React.Fragment> : null
                }
                </tbody>
            </table>
        </React.Fragment>
    )
};
export default ContactList;
