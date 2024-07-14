const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const sendMail = require('./controller')

app.use(bodyParser.json());

app.post('/email/sendEmail', (req, res) => {
    const mailData = req.body;
    
    sendMail(mailData).then(() => {
        res.sendStatus(200)
    }).catch(error => {
        res.status(!error.internal  ? 400 : 500)
        res.send(error.message)
    })
})

app.listen(port, () => {
    console.log(`Server running at ${port}/`);
})