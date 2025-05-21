const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
var count = 0;

app.get('/webhook', async (req, res) => {
    console.log('Received Webhook:', req.body);
    // run script, return something with delay
    await setTimeout(() => {
        res.status(200).redirect('/report');
    }, 5000); // Simulate a delay of 5 seconds
});
app.get('/report', async (req, res) => {
    console.log('Received Redirect:', req.body);
    // trigger PW report for CWV score & replace when done 
    await setTimeout(() => {
        res.status(301).send(`<html><body><div><h3>Report Page - Attempt ${++count}</h1></div><br/><div id="report-body"><span>Report building...</span></div></body></html>`);
    }, 5000); // Simulate a delay of 5 seconds
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Webhook receiver listening on port ${PORT}`);
});