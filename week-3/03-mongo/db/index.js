const mongoose = require('mongoose');

// Connect to MongoDB
const uri = "mongodb+srv://souvikc3030:ZGiFS8AauyOKQnUg@cluster0.dn6qkrd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri); // mongodb+srv://souvikc3030:<password>@cluster0.dn6qkrd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourse: [{
        type: mongoose.Schema.type.ObjectId,
        ref: 'Course',
    }],
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    prince: Number,
    imageLink: String,
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}
