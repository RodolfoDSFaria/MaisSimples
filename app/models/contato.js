var mongoose = require('mongoose');

module.exports= function() {
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
        }, empresa: {
            type: mongoose.Schema.ObjectId,
            ref: 'Empresa'
        }
    });
    
    return mongoose.model('Contato', schema);
}