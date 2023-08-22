import { prisma } from '@/app/libs/prisma';
import { NextResponse } from 'next/server';


export async function GET(){
  const products = await prisma.products.findMany();

  return NextResponse.json({ products })
}