import dbConnect from "@/app/utils/dbConnect";
import { User } from "@/app/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    await dbConnect();

    const data = await req.json();
    const { email, password } = data;
    try {
        const newUser = new User({ email, password });
        await newUser.save();
        return NextResponse.json({ message: "User created successfully" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Error creating user", error }, { status: 500 });
    }
}

export async function GET(req: NextRequest, res: NextResponse) {
    await dbConnect();

    try {
        const users = await User.find({});
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error fetching users", error }, { status: 500 });
    }
}


