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
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
        }
        const token = new Token({ user: user._id, token: Math.random().toString(36).substring(2, 15) + 
            Math.random().toString(36).substring(2, 15), expiresAt: new Date(Date.now() + 60 * 60 * 1000) });
        await token.save();
        return NextResponse.json({ message: "Login successful", token: token.token, user: user }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error logging in", error }, { status: 500 });
    }
}