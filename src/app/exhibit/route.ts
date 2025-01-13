import { NextResponse } from 'next/server';
import { ExhibitsData } from '../config/config';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  
  if (!id) {
    return NextResponse.json({ error: 'No ID provided' }, { status: 400 });
  }

  const exhibit = ExhibitsData[Number(id)];
  
  if (!exhibit) {
    return NextResponse.json({ error: 'Exhibit not found' }, { status: 404 });
  }

  return NextResponse.json(exhibit);
} 