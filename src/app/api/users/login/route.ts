import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';

connect();


export async function POST(request: NextRequest) {
    try {
        const requestBody = await request.json();
        const { email, password } = requestBody;

        // find the user
        const isUser = await User.findOne({ email });
        if (!isUser) {
            return NextResponse.json({ error: "User does not exist" }, { status: 400 })
        }

        // check if password is correct
        const validPassword = await bcryptjs.compare(password, isUser.password);
        console.log("Validated Password response ? ..", validPassword);

        if (!validPassword) {
            console.log("Invalid password entered")
            return NextResponse.json({ error: "Wrong email or password, check and try again" }, { status: 500 })
        }

        // create a token and send secure cookie to the user
        const tokenData = {
            id: isUser._id,
            username: isUser.username,
            email: isUser.email

        }

        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: '1d' });
        const response = NextResponse.json({
            message: "Login successful",
            success: true
        })
        response.cookies.set(
            "token",
            token,
            {
                httpOnly: true,
            }
        );

        return response;

    } catch (error: any) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        )
    }
}