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

//get password?

//get preference

//set user information

//nutrition value
app.get("api/recipe_nutritionValue", (req, res) => {

});

//ingredients
app.get("api/recipe_ingredients", (req, res) => {

});

//cooking method
app.get("api/recipe_cookingMethod", (req, res) => {

});

//allergy
app.get("api/recipe_allergy", (req, res) => {

});

//origin country
app.get("api/recipe_country", (req, res) => {

});

//recipe type
app.get("api/recipe_type", (req, res) => {

});

//cooking equipment
app.get("api/cookingEquipment", (req, res) => {

});

//get review
app.get("api/get_recipe_review", (req, res) => {

});

//get review time 
app.get("api/get_recipe_reviewTime", (req, res) => {

});

//get review by time?

//set review
app.post("api/set_recipe_review", (req, res) => {

});

//set ratings
app.post("api/set_recipe_ratings", (req, res) => {

});

//get ratings
app.get("api/get_recipe_ratings", (req, res) => {

});

app.use(express.json()); //parse incoming requests to JSON
app.use(cors());

app.listen(7000, () =>{ //bind and listen to connections of host and port
    console.log("hello");
});