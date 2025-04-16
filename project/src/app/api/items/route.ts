import connectMongoDB from "../../../../config/mongodb";
import Recipe from "@/models/recipeSchema";
import { getRecipe } from "@/app/backend/users/getRecipe";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// POST
export async function POST(request: NextRequest) {
  const { owner, title, ingredientLines, calories, url } = await request.json();
  await connectMongoDB();
  await Recipe.create({ owner, title, ingredientLines, calories, url });
  return NextResponse.json({ message: "Recipe added successfully" }, { status: 201 });
}

// GET 
export async function GET() {
  await connectMongoDB();
  const items = await Recipe.find();
  return NextResponse.json({ items });
}
