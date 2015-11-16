module.exports = function(app) {
    var controller = {};
    
    controller.index = function(req, res) {
              res.render('loginContato');
    };
        
    return controller;
}