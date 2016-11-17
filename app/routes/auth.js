module.exports = function(app){
    app.post('/auth', function(req, res){
        var user = req.body;
        if(user.email === "doug-caruso@hotmail.com" && user.senha === "batatinha"){
            res.render("success")
        }else{
            res.render("access-denied")
        }
    })
}
