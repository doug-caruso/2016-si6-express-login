var app = require("./config/server.js");

//var rotaIndex = require("./app/routes/index")(app);
//var rotaAuth = require("./app/routes/auth")(app);


app.listen(3000, function(){
    console.log("Server ON");
})