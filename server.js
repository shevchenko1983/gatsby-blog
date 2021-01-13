const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const router = express.Router();

//create app
const app = express();
let port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(port, () => console.log("Server is running on 5000 PORT"));


//Set General Email Options
const passAuthGoogle = 'kefxbziizpujytnj';
const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "shevchenkoandrey160@gmail.com",
        pass: passAuthGoogle,
    },
});
//console.log("ContactsOptions", contactEmail);
//Checking General Email Options
contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("SMTP server is working. Ready to Send");
    }
});



//Receive data and send it to destination
router.post("/contact", (req, res) => {
    const name = req.body.namedsfpj;
    const email = req.body.emaildsfpj;
    const message = req.body.messagedsfpj;
    const mail = {
        from: name,
        to: "shevadon01@gmail.com",
        subject: "Contact Form Submission from Web Site Shevchenko Andrey",
        html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            console.log(res, error);
            res.json({ status: "ERROR" });
        } else {
            res.json({ status: "Message Sent" });
        }
    });
});



