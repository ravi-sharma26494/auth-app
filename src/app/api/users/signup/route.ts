import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { username, email, password } = reqBody;

        console.log("This is the reqbody", reqBody);

        // check if the user exists
        const isUser = await User.findOne({ email });
        if (isUser) {
            return NextResponse.json(
                {
                    error: "User already exists"
                },
                {
                    status: 500
                }
            )
        }

        // hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        const savedUser = await newUser.save();
        console.log("The saved user is", savedUser);

        return NextResponse.json({
            message: 'User saved successfully',
            success: true,
            savedUser
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}


connect();