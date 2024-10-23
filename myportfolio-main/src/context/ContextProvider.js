import React from 'react';
import Context from './ContextState';

const ContextProvider = (props) => {
    const sendEmail = async (name, to, subject) => {
        const response = await fetch('https://portfolio-gyhl.onrender.com/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                to: to,
                subject: name,
                text: subject,
            }),
        });
        const result = await response.json();
        return result;
    };

    const handleContactMe = async (name, to, subject) => {
        const result = await sendEmail(name, to, subject);
        return result;
    }
    return (
        <Context.Provider value={{ handleContactMe }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider
