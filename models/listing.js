const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },

    description: String,
    
    image: {
        filename: {
            type: String,
            default: "listingimage"
        },
        url: {
            type: String,
            default: "https://images.unsplash.com/photo-1669810005121-8f1a198c2c33?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            set: v => v === ""
                ? "https://images.unsplash.com/photo-1669810005121-8f1a198c2c33?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                : v
        }
    },

    price: Number,
    location: String,
    country: String
});

const Listing = mongoose.model("Listing", listingSchema);
//first one denotes the name by which we want to create the database and the second denotes the schema of the db
// model definition --> 
// A model is a constructor function created from a schema that lets you create, read, update, and delete (CRUD) documents from a specific MongoDB collection.

// 🔄 Analogy:
// Think of a model like a blueprint + tools:

// The schema defines the structure (like a blueprint for a house).

// The model gives you the tools to build, find, and manage those "houses" (documents).
module.exports = Listing;