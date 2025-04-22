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

export async function PUT(req: NextRequest, res: NextResponse) {
    await dbConnect();

    const data = await req.json();
    const { email, password, newEmail } = data;  // Assuming you want to update the email and password
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

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        // Check if the new email is provided and if it's different from the current one
        if (newEmail && newEmail !== user.email) {
            user.email = newEmail;
        }

        // // If the password is provided, hash it and update it
        // if (password) {
        //     const hashedPassword = await bcrypt.hash(password, 10);
        //     user.password = hashedPassword;
        // }

        await user.save();
        return NextResponse.json({ message: "User updated successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error updating user", error }, { status: 500 });
    }
}