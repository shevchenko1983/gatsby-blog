import React from 'react';

const MAIL_SERVER_URL = 'https://andrei-shevchenko-blog.herokuapp.com/contact';
//'http://localhost:5000/contact';
//'https://andrei-shevchenko-blog.herokuapp.com/contact';
//Submit contact form data function and send data to mail server
export const onSubmitFormHandler = async (values) => {
    //create POST request for sending email data via nodemailer package
    let response = await fetch(MAIL_SERVER_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(values),
    });

    let result = await response.json();
    console.log(result.status);
};