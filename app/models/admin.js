var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

module.exports = function() {
    var schema = mongoose.Schema({

            nome: {
            type: String,
            required: true
            },
            
            email: {
                type: String,
                required: true,
                index: {
                    unique: true
                }
            },
            
            senha: {
                type: String,
                required: true
            },
            
            inclusao: {
            type: Date,
            default: Date.now
            }
        
    });


    schema.methods.validPassword = function(senha) {
    return bcrypt.compareSync(senha, this.senha);
    };

    return mongoose.model('Admin', schema);
};
