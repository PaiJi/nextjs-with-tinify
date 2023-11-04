import { NextRequest } from "next/server";
import tinify from "tinify";

export async function POST(request: NextRequest) {
tinify.key = "Fox jump into soda.";

  return new Response("Hello, Next.js!", {
    status: 200,
  });
}
