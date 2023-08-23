import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET() {
  const products = await prisma.products.findMany();

  if (!products || !products.length) {
    return NextResponse.json({ error: "No hay productos" }, { status: 404 });
  }

  return new Response(JSON.stringify(products), {
    status: 201,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

export async function POST(req: Request) {
  const { title, price, img, category } = await req.json();

  const newProduct = await prisma.products.create({
    data: {
      title,
      price,
      img,
      category,
    },
  });

  if (!newProduct) {
    return NextResponse.json({ error: "No se creo el producto correctamente" });
  }

  return NextResponse.json(newProduct);
}
