import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const resposne = NextResponse.json({ message: "Logout successfull", success: true });
        resposne.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });
        return resposne;
    } catch (error: any) {
        console.log("error in logging out", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}