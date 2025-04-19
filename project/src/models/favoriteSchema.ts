favoritesSchema.ts 

//ADD TO USERS SCHEMA
import mongoose, {Model, Schema} from "mongoose";

interface favorites extends Document{
    userId: mongoose.Types.ObjectId;
    label: string;
    ingredientLines: string[];
    calories: number;
    image: string; //Store the recipe image using the image URL 
    dishType: string;
}

const favoriteSchema = new Schema<favorites>({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    label: {
        type: String,
        required: true,
    },

    ingredientLines:{type: [String],required: true,
    },

    calories: {
        type: Number,
        required: true,
    }, 

    image: {
        type: String,
    },
    dishType: {
        type: String,
    },
});

const Favorite: Model<favorites> = mongoose.models.Favorite || mongoose.model<favorites>(“Favorite, favoriteSchema);
export default Favorite;


RecipeSchema.ts

//Outline of fields collected from recipes in EDAMAM
import mongoose, {Model, Schema} from "mongoose";

interface recipes extends Document{
    name: string;
    ingredientLines: string[];
    calories: number;
    image: string; //Store the recipe image using the image URL 
    dishType: string;
}

const recipeSchema = new Schema<recipes>({
    name: {
        type: String,
        required: true,
    },

    ingredientLines:{type: [String],required: true,
    },

    calories: {
        type: Number,
        required: true,
    }, 

    image: {
        type: String,
    },
    dishType: {
        type: String,
    },
});

const Recipe: Model<recipes> = mongoose.models.Recipe || mongoose.model<recipes>("Recipe", recipeSchema);
export default Recipe;


Favorites.ts (app -> api )


import type { NextApiRequest, NextApiResponse } from "next";
import connectMongoDB from "../../../../../config/mongodb";
import Favorite from "@/app/models/favoritesSchema";
import User from "@/app/models/User";
import Recipe from "@/app/models/recipeSchema";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method != 'POST'){
        return res.status(405).json({message: 'Please only use POST requests :)'})
    }

    //Ensures that a user has to be logged in in order to save a recipe 
    const {recipe, email} = req.body;

    try{
        await connectMongoDB();

        const user = await User.findOne({email: email});

        const addFavorite = new Favorite({
            userId: user._id
        })

        await addFavorite.save();
        return res.status(201).json({message: 'Favorit saved successfully'});
    }
    catch(error){
        console.error('Error saving favorite:', error);
    return res.status(500).json({ message: 'Server error' });
    }
}