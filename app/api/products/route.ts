import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';
const prisma = new PrismaClient()


export async function GET(){
  const products = await prisma.products.findMany();

  return NextResponse.json({ products })
}