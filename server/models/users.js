import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    firstName: {type: "string", required: true},
    lastName: {type: "string", required: true},
    email: {type: "string", required: true},
    password: {type: "string", required: true},
    admin: {type: "boolean", default: false},
    cart: []
});

const Users = mongoose.model('Users', usersSchema);

export default Users;