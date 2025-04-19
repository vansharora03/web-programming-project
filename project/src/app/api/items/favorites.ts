import type { NextApiRequest, NextApiResponse } from "next";
import connectMongoDB from "../../../../config/mongodb";
import Favorite from "@/models/favoriteSchema";
import { User } from "@/models/User";
import Recipe from "@/models/recipeSchema";

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
