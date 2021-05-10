const express = require("express");
var hash = require('object-hash');
const nodemailer = require('nodemailer');
const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())
require('dotenv').config();
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD // naturally, replace both with your real credentials or an application-specific password
    }
});
// console.log('port is',process.env.PORT)
app.get("/api/test", (req, res) => {
    res.send("Hello World!");
});

app.post("/api/get-otp", (req, res) => {
    const otp = hash(Date.now(), { algorithm: 'md5' }).slice(0, 6);
    console.log(otp);
    console.log(req.body);
    if (req.body.email == undefined) {
        res.status(400).send({ 'error': 'Email field non existing in request' });
        return;
    }
    // iitrpr.ac.in iitj.ac.in
    const email = String(req.body.email);
    if (email.slice(-12) != "iitrpr.ac.in" && email.splice(-10) != "iitj.ac.in") {
        res.status(401).send({ 'error': 'Unauthorized Email' });
        return;
    }
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'First Email using nodemailer',
        text: `OTP value is ${otp}`
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error)
            res.status(500).send({ 'error': 'Unable to send email' });
        else
            res.status(200).send({ 'otp': otp });
    });
});
app.post("/api/sendMail", (req, res) => {
    const mailOptions = {
        from: req.body.from,
        to: req.body.email,
        subject: req.body.subject,
        text: req.body.text,
    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error)
            res.status(500).send({ 'error': 'Unable to send email' });
        else
            res.status(200).send({ 'otp': otp });
    });
});
async function sendEmail(mailOptions) {

};

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));