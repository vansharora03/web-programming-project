import dbConnect from "@/app/utils/dbConnect";
<<<<<<< Updated upstream
import { User } from "@/models/User";
import Token from "@/models/Token";
=======
import { User } from "../../models/User";
import Token from "../../models/Token";
>>>>>>> Stashed changes
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

// POST method for creating a user
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
<<<<<<< Updated upstream
        const newUser = new User({ email, password:hashedPassword });
=======
        const newUser = new User({ email, password: hashedPassword });
>>>>>>> Stashed changes
        await newUser.save();
        return NextResponse.json({ message: "User created successfully" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Error creating user", error }, { status: 500 });
    }
}

// GET method for fetching user data
export async function GET(req: NextRequest, res: NextResponse) {
    await dbConnect();
<<<<<<< Updated upstream
=======
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

// PUT method for updating user data
export async function PUT(req: NextRequest, res: NextResponse) {
    await dbConnect();

    const data = await req.json();
    const { email, password, newEmail } = data;  // Assuming you want to update the email and password
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        return NextResponse.json(user, { status: 200 });
=======

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        // Check if the new email is provided and if it's different from the current one
        if (newEmail && newEmail !== user.email) {
            user.email = newEmail;
        }

        // If the password is provided, hash it and update it
        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            user.password = hashedPassword;
        }

        await user.save();
        return NextResponse.json({ message: "User updated successfully" }, { status: 200 });
>>>>>>> Stashed changes
    } catch (error) {
        return NextResponse.json({ message: "Error fetching users", error }, { status: 500 });
    }
}
<<<<<<< Updated upstream


=======
>>>>>>> Stashed changes
