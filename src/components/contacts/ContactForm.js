import React from "react";
import styled from '../../../node_modules/styled-components';
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {btnStyles, EMAIL_REGEX, inputsStyles} from "../../utils/styled-layout";
import {onSubmitFormHandler} from "../../utils/helper";


const ContactFormWrapper = styled('div')`
    ${inputsStyles};
    ${btnStyles};
    
    .honey-catch{
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        height: 0;
        width: 0;
        z-index: -1;
    }
`;

//Create field names special for Honey POT
const validationSchema = Yup.object().shape({
    namedsfpj: Yup.string().min(1, "Must be a character or number")
        .max(255, "Must be shorter than 255")
        .required("Must be some LoginName"),

    emaildsfpj: Yup.string().matches(EMAIL_REGEX, "Must be some Valid EmailAddress")
        .required("Must be some Valid EmailAddress"),

    messagedsfpj: Yup.string().min(1, "Must be a character or number")
        .max(255, "Must be shorter than 255")
        .required("Must be some Text"),
});

const ContactForm  = () => {

    return(
        <ContactFormWrapper className={"col-sm-6 offset-sm-3 form"}>
            <Formik
                initialValues={{
                    namedsfpj: "",
                    emaildsfpj: "",
                    messagedsfpj: ""
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
                               name="namedsfpj"
                               className="wpcf7-text wow animate__animated animate__fadeInUp form-control"
                               placeholder="Name"
                               value={values.namedsfpj}
                               onChange={handleChange}
                        />
                        {errors.namedsfpj && <div style={{color:"#e93100"}}>{errors.namedsfpj}</div>}
                        <Field type="email"
                               name="emaildsfpj"
                               className="wpcf7-email wow animate__animated animate__fadeInUp form-control"
                               placeholder="Email"
                               value={values.emaildsfpj}
                               onChange={handleChange}
                        />
                        {errors.emaildsfpj && <div style={{color:"#e93100"}}>{errors.emaildsfpj}</div>}
                        <Field name="messagedsfpj"
                               className="wpcf7-textarea wow animate__animated animate__fadeInUp form-control"
                               placeholder="Message"
                               component="textarea"
                               cols={40}
                               rows={10}
                               value={values.messagedsfpj}
                               onChange={handleChange}
                        />
                        {/*Honey POT*/}
                        <Field type="text"
                               name="name"
                               className="honey-catch"
                               placeholder="Name"
                        />
                        <Field type="email"
                               name="email"
                               className="honey-catch"
                               placeholder="Email"
                        />

                        <Field component="textarea"
                               cols={40}
                               rows={10}
                               name="message"
                               className="honey-catch"
                               placeholder="Message"
                        />

                        <button type="submit"
                                className="btn btn-lg btn-block wow animate__animated animate__fadeInUp progress-button"
                                //disabled={!isValid}
                        >Send Message</button>
                    </Form>
                )}
            </Formik>
        </ContactFormWrapper>
    );
};

export default ContactForm;