import { NextResponse } from 'next/server';

export async function GET() {
  const users = await fetch('https://jsonplaceholder.typicode.com/users');
  return NextResponse.json(users);
}
