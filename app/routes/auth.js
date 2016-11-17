module.exports = function(app){
    app.get('/auth', function(req, res){
        
        console.log(req.body.username);
        if(req.email === 'doug-caruso@hotmail.com' && req.password === 'batatinha'){
            res.render("./success")
        }else{
            res.render("./access-denied")
        }
    });
}