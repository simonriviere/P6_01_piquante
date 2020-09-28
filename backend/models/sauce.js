const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true }, // nom de la sauce
    manufacturer: { type: String, required: true }, // fabricant de la sauce
    description: { type: String, required: true }, // principal ingrédient
    mainPepper: { type: String, required: true },// principal ingrédient dans la sauce 
    imageUrl: { type: String, required: true },// string de l'image de la sauce téléchargée par l'utilisateur 
    heat: { type: Number, required: true }, // nombre entre 1 et 10 décrivant la sauce 
    likes: { type: Number, default: 0, required: true }, // nombre d'utilisateurs qui aiment la sauce 
    dislikes: { type: Number, default: 0, required: true }, // nombre d'utilisateurs qui n'aiment pas la sauce 
    usersLiked: { type: [String], default: [] },
    usersDisliked: { type: [String] }
});
module.exports = mongoose.model('Sauce', sauceSchema); 
