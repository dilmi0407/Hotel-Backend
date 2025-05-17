import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        email:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true,
        },
        name:{
            type:String,
            required:true,
        },
        gender:{
            type:String,
            required:true,
        },
        address:{
            type:String,
            required:true,
        },
        dob:{
            type:Date,
            required:true,
        },
        city:{
            type:String,
            required:true,
        },
        state:{
            type:String,
            required:true,
        },
        contact:{
            type:String,
            required:true,
        }
    },
    {
        timestamps:true
    }
)
const User = mongoose.model("User",UserSchema);
export default User 