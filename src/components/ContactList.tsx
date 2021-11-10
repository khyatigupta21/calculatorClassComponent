import React from "react";

const contacts = [
    {
        name: "Khyati",
        email: "khyati@gmail.com"
    },
    {
        name: "Amit",
        email: "amit@gmail.com"
    },
];

const Contact = ({name,email}) => {
    return (
         <>
            <li key={name}>
                <h3>{name}</h3>
                <div>
                    <strong>{email}</strong>
                </div>
            </li>
        </>
    )
}
const ContactList = () => {
    return(
        <ul>
            {contacts.map((contact) => {
                return <Contact {...contact}/>
            })}
        </ul>
    )
}

export default ContactList;
