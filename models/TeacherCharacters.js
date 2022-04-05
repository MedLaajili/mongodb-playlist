const mongoose = require('mongoose');
const schema = mongoose.schema;

const TeacherCharSchema = new schema({
    Nom: String,
    Prenom: String,
    Matricule: String,
    matiere: String
});

const TeacherChar = mongoose.model('teacherchar',TeacherCharSchema);

module.exports = TeacherChar;

