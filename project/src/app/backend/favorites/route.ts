import dbConnect from "@/app/utils/dbConnect";
import { User } from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import Favorite from "@/models/favoriteSchema";
import { ObjectId } from "mongodb";
import { getUserIdFromToken } from "@/app/utils/auth";

export async function POST(req: NextRequest, res: NextResponse) {
    await dbConnect();
    const data = await req.json();
    const {userId, label, ingredientLines, calories, image } = data.send;
    const userid = await getUserIdFromToken(req.headers.get("Authorization")?.split(" ")[1] || "");
    if (!userId) {
        return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    try {
        const newFavorite = new Favorite({ userId, label, ingredientLines, calories, image });
        await newFavorite.save();
        return NextResponse.json({ message: "Favorite added successfully" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Error adding favorite", error }, { status: 500 });
    }
}

export async function PUT(req: NextRequest, res: NextResponse) {
    await dbConnect();
    const data = await req.json();
    const { userId, recipeId } = data;
    try {
        const updatedFavorite = await Favorite.findOneAndUpdate({ userId, _id: recipeId }, data, { new: true });
        if (!updatedFavorite) {
            return NextResponse.json({ message: "Favorite not found" }, { status: 404 });
        }
        return NextResponse.json(updatedFavorite, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error updating favorite", error }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, res: NextResponse) {
    await dbConnect();
    const data = await req.json();
    const { userId, recipeId } = data;
    try {
        const deletedFavorite = await Favorite.findOneAndDelete({ userId, _id: recipeId });
        if (!deletedFavorite) {
            return NextResponse.json({ message: "Favorite not found" }, { status: 404 });
        }
        return NextResponse.json({ message: "Favorite deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error deleting favorite", error }, { status: 500 });
    }
}





