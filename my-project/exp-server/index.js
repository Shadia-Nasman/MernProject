// Express Server

const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const routes=require('./routes/api');
var cors = require('cors')

const app = express(); //setup express app
app.use(bodyparser.json());
app.use(cors());
app.use(bodyparser.urlencoded({
    extended: true
}));
//initialize routes
app.use('/api',routes);
const port=process.env.port||3002;

///////////////////mongodb database connection
const dburl='mongodb+srv://shadia:1988Shadia@cluster0-j5x8m.gcp.mongodb.net/booksapi';


mongoose.connect(dburl, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})
mongoose.set('useNewUrlParser', true);///to avoid url deprication
mongoose.Promise=global.Promise;///to avoid url deprication


// app.use(express.static('public'))//serve files in public folder


//////////////express routing


app.get('/', (req, res) => res.send('Hello World!'));//main route




///////////////middleware


// Start Server listen for requests
app.listen({port}, () => console.log(`Example app listening on port ${port}!`));

