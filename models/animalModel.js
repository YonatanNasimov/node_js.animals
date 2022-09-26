const mongoose = require('mongoose');
const Joi = require('joi')

const animalsSchema = new mongoose.Schema({
    name:String,
    info:String,
    price:Number,
    img:String,
    user_id:String,
    date_created:{
      type:Date, default:Date.now()
    },
    category:String   
})

exports.AnimalsModel = mongoose.model("animals", animalsSchema);

exports.validateAnimal = (_reqBody) =>{
    let schemaJoi = Joi.object({
        name: Joi.string().min(2).max(99).required(),
        info: Joi.string().min(2).max(9999).required(),
        price: Joi.number().min(1).max(9999).required(),
        img: Joi.string().min(2).max(500).allow(null,""),
        category:Joi.string().min(2).max(500).allow(null,"")
    })
    return schemaJoi.validate(_reqBody);
}
