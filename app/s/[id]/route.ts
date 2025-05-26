import { NextRequest, NextResponse } from 'next/server';
import { urlDb } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const record = urlDb.getOriginalUrl(id);
  
  if (!record) {
    // Redirect to 404 page if URL not found
    return NextResponse.redirect(new URL('/not-found', request.url));
  }
  
  // Redirect to original URL
  return NextResponse.redirect(record.originalUrl);
}