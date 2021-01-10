import React from 'react';

//Submit contact form data function and send data to mail server
export const onSubmitFormHandler = async (values) => {
    //create POST request for sending email data via nodemailer package
    let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(values),
    });

    let result = await response.json();
    console.log(result.status);
};