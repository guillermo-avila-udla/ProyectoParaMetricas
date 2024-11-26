const express = require('express');
const app = express();
const path = require('path');

const PORT = 8080;
const directory = path.join(__dirname, 'target/site/jacoco');

app.use(express.static(directory));

app.listen(PORT, () => {
    console.log(`Serving coverage reports at: https://<your-replit-url>.repl.co`);
});
