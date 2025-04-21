import dbConnect from "@/app/utils/dbConnect";
import { User } from "@/models/User";
import Token from "@/models/Token";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest, res: NextResponse) {
    await dbConnect();

    const data = await req.json();
    const { email, password } = data;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({ message: "User already exists" }, { status: 409 });
        }
        const newUser = new User({ email, password:hashedPassword });
        await newUser.save();
        return NextResponse.json({ message: "User created successfully" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Error creating user", error }, { status: 500 });
    }
}

export async function GET(req: NextRequest, res: NextResponse) {
    await dbConnect();
    const token = req.headers.get("Authorization")?.split(" ")[1];
    if (!token) {
        return NextResponse.json({ message: "No token provided" }, { status: 401 });
    }
    try {
        const query = Token.findOne({ token });
        if (!query) {
            return NextResponse.json({ message: "Invalid token" }, { status: 401 });
        }
        const foundToken = await query;
        const user = await User.findById(foundToken!.user);
        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error fetching users", error }, { status: 500 });
    }
}


