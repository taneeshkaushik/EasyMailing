const express = require("express");
const path = require('path')
var cors = require('cors')
var hash = require('object-hash');
var CryptoJS = require("crypto-js");
const nodemailer = require('nodemailer');
var gen = require("randomstring");
const fs = require('fs')
var handlebars = require('handlebars');
const { compile } = require("handlebars");


const app = express();


app.use(cors())
app.use(express.static(path.join(__dirname , 'build')))
app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json())

// console.log(template)
require('dotenv').config();
const transporter = nodemailer.createTransport({
    service: 'gmail',
    pool:true,
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
    const key=gen.generate();
    //console.log(otp);
    // console.log(req.body);
    if (req.body.email == undefined) {
        res.status(400).send({ 'error': 'Email field non existing in request' });
        return;
    }
    // iitrpr.ac.in iitj.ac.in
    const email = String(req.body.email);
    if (email.slice(-12) != "iitrpr.ac.in" && email.slice(-10) != "iitj.ac.in") {
        res.status(401).send({ 'error': 'Unauthorized Email' });
        return;
    }
    const combined=otp+key;
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'ESMP Secret Key',
        text: `One time secret passkey is ${combined}\n`
    };
    const enc_otp=encrypt(otp,key);
    transporter.sendMail(mailOptions, function (error, info) {
        if (error)
            res.status(500).send({ 'error': 'Unable to send email' });
        else
            res.status(200).send({ 'otp': enc_otp });
    });
});
app.post("/api/sendMail", (req, res) => {

var template = `<h3 style="text-align: left;"><span style="color: #000000;">{{text}}</span></h3>`;

var template2 = `{{#each people}}
  <h3 style="text-align: left;"><span style="color: #000000;">&nbsp;{{this}}</span></h3>
{{/each}}`;
    const temp  = template.concat(req.body.text ,template2);
    // console.log(temp)
    var combined=handlebars.compile(temp);
    // console.log(combined);
    const mailOptions = {
        from: req.body.from,
        to: req.body.to,
        subject:req.body.subject,
        html: combined({email:req.body.from, people:req.body.table}),
    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error)
            { 
                // console.log(error)
            res.status(500).send({ 'error': error });
            }
        else
            res.status(200).send({ 'error': false });
    });
});
function encrypt(otp,key){
    return CryptoJS.AES.encrypt(JSON.stringify(otp), key).toString();
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));