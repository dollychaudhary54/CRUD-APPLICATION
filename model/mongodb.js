const mongoose = require('mongoose');
 
mongoose.connect('mongodb+srv://DoliKumari:mongodb@123@cluster0.dmmn3.mongodb.net/Dolly?retryWrites=true&w=majority', {useNewUrlParser: true}, (err) => {
if (!err) {
console.log('Successfully Established Connection with MongoDB')
}
else {
console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
}
});
 
//Connecting Node and MongoDB
require('./course.model');
