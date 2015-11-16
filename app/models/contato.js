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
        empresa: {
            type: mongoose.Schema.ObjectId,
            ref: 'Empresa'
        }
        
    });
    schema.methods.generateHash = function(senha) {
    return bcrypt.hashSync(senha, bcrypt.genSaltSync(8), null);
    };

    schema.methods.validPassword = function(senha) {
    return bcrypt.compareSync(senha, this.senha);
    };
    
    return mongoose.model('Contato', schema);
}
