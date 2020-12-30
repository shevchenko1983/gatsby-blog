import React from "react";
import styled from '../../../node_modules/styled-components';
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {btnStyles, EMAIL_REGEX, inputsStyles} from "../../utils/styled-layout";
import {onSubmitFormHandler} from "../../utils/helper";


const ContactFormWrapper = styled('div')`
    ${inputsStyles};
    ${btnStyles};
`;


const validationSchema = Yup.object().shape({
    name: Yup.string().min(1, "Must be a character or number")
        .max(255, "Must be shorter than 255")
        .required("Must be some LoginName"),

    email: Yup.string().matches(EMAIL_REGEX, "Must be some Valid EmailAddress")
        .required("Must be some Valid EmailAddress"),

    message: Yup.string().min(1, "Must be a character or number")
        .max(255, "Must be shorter than 255")
        .required("Must be some Text"),
});

const ContactForm  = () => {

    return(
        <ContactFormWrapper className={"col-sm-6 offset-sm-3 form"}>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    message: ""
                }}
                validationSchema={validationSchema}
                onSubmit={ (values, actions) => {
                    onSubmitFormHandler(values);
                    actions.setSubmitting(false);
                }}
            >
                {({values, errors, handleChange, isValid}) => (
                    <Form>
                        <Field type="text"
                               name="name"
                               className="wpcf7-text wow animate__animated animate__fadeInUp form-control"
                               placeholder="Name"
                               value={values.name}
                               onChange={handleChange}
                        />
                        {errors.name && <div style={{color:"#e93100"}}>{errors.name}</div>}
                        <Field type="email"
                               name="email"
                               className="wpcf7-email wow animate__animated animate__fadeInUp form-control"
                               placeholder="Email"
                               value={values.email}
                               onChange={handleChange}
                        />
                        {errors.email && <div style={{color:"#e93100"}}>{errors.email}</div>}
                        <Field name="message"
                               className="wpcf7-textarea wow animate__animated animate__fadeInUp form-control"
                               placeholder="Message"
                               component="textarea"
                               cols={40}
                               rows={10}
                               value={values.message}
                               onChange={handleChange}
                        />
                        <button type="submit"
                                className="btn btn-lg btn-block wow animate__animated animate__fadeInUp progress-button"
                                disabled={!isValid}
                        >Send Message</button>
                    </Form>
                )}
            </Formik>
        </ContactFormWrapper>
    );
};

export default ContactForm;