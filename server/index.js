const express= require('express'); //routing, http requests
const cors= require('cors'); //middleware, enables scripts running on 
                            //browser client to interact with resources from different origin
const mysql= require('mysql2');
const app= express();

const connection= mysql.createPool({
    host: "",
    user: "",
    password: "",
    database: ""
})

app.get("/", (req, res) => {
    res.send("hi");
})

app.get("/api/get", (req, res) => {
    const sqlget= "SELECT * FROM _"; //_ is name of table 
    connection.query(sqlget, (err, result) => {
        res.send(result);
        
    })
})

app.use(express.json()); //parse incoming requests to JSON
app.use(cors());

app.listen(7000, () =>{ //bind and listen to connections of host and port
    console.log("hello");
});