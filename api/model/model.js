import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    type: {
        type: String,
    },
    phone: {
        type: String,
    },
    location: {
        type: String,
    },
    bio: {
        type: String,
    },
    profile: {
        type: String,
    },
    headline: {
        type: String,
    },
    rate: {
        type: String,
    },
    skill: {
        type: String,
    },
    name: {
        type: String,
    },
    credit: {
        type: String,
    },
    status: {
        type: String,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now // Sets current date/time by default ...
    }

})

export const userModel = mongoose.model("users", userSchema)

// project
const projectSchema = new mongoose.Schema({
    clientId: String,
    title: String,
    desc: String,
    budget: String,
    duration: String,
    status: {
        type: String,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export const projectModel=mongoose.model("projects",projectSchema)