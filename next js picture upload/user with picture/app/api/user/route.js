import User from "@/models/user";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
  const { name,image } = await request.json();
  try {
    await connectToDB();
    const newUser = new User({ name, image });

    await newUser.save();
    return new Response(JSON.stringify(newUser), { status: 201 })
  } catch (error) {
    return new Response("Failed to create a new user", { status: 500 });
  }
} 