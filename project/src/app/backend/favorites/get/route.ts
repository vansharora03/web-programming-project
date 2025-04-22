import dbConnect from "@/app/utils/dbConnect";
import { User } from "@/models/User";
import Token from "@/models/Token";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import Favorite from "@/models/favoriteSchema";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";

export async function POST(req: NextRequest, res: NextResponse) {
    await dbConnect();
    const data = await req.json();
    const { userId } = data;
    const favorites = await Favorite.find({ userId });
    return NextResponse.json(favorites, { status: 200 });
}