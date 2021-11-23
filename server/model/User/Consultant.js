const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ConsultantSchema = new Schema({
      user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user'
       },
      consultant: [
        {
        surname: {
            type: String,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true
        },
        avatar: {
            type: String
        }, 
          date: {
              type: Date,
              default: Date.now
          }

        }
      ]
    });
    
module.exports  = mongoose.model('consultant', ConsultantSchema);