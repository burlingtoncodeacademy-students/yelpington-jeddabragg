//Import express to run our app
const express = require('express');
//Initiate the app
const app = express();

const fs = require('fs');

const path = require('path');

const { res } = require('express');
//Set port to 5000
let port = process.env.PORT || 5000 ;
//parses json
const bodyParser = require('body-parser');

const restDir = path.resolve("./restaurants");
const pubDir = path.resolve("./public");
//Static server that renders react. App.use() and path will reference the react build and publick folder
app.use(express.static('/client/public'));
//adding middleware for post requests
app.use(express.urlencoded({extended: true}));


//----------------Get Request for the  Server API endpoint-----------------//
app.get('/api/restaurants/:restaurantId', (req, res) => {
    // console.log('This should send json to the console, right?')
    let filePath = path.join(restDir, req.params.restaurantId + '.json');
    res.sendFile(filePath);
});

app.get('/restaurants/:restaurantId', (req, res) => {
    let filePath = path.join(restDir, req.params.restaurantId + '.json')
    if(fs.existsSync(filePath)) {
        let htmlFile = path.join(publicDir, "restaurant.html");
        res.sendFile(htmlFile);
    } else {
        res.status(404).send(`Article ${req.params.restaurantId} not here.`)
    }
});
//-----Get Request for Restaurant Id--------//
// app.get('/api/restaurant-id', (req, res) => {
//     // console.log('This is a post request')
//     res.sendFile(apiDir + 'restId.json')
// });



//Initiates express server and it begins listening for requests
app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});