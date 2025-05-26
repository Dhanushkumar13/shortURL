import { NextRequest, NextResponse } from 'next/server';
import { urlDb } from '@/lib/db';

// Validate URL format
function isValidUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
  } catch (e) {
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const { url, customId } = await request.json();
    
    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }
    
    if (!isValidUrl(url)) {
      return NextResponse.json({ error: 'Invalid URL format' }, { status: 400 });
    }
    
    // Create short URL
    try {
      const record = urlDb.createShortUrl(url, customId);
      const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL || process.env.VERCEL_URL || 'localhost:3000';
      return NextResponse.json({
        id: record.id,
        originalUrl: record.originalUrl,
        // shortUrl: `${baseUrl}/s/${record.id}`,
        shortUrl: `url/${record.id}`,
      });
    } catch (error) {
      if (error instanceof Error && error.message === 'Custom ID already in use') {
        return NextResponse.json({ error: error.message }, { status: 409 });
      }
      throw error;
    }
  } catch (error) {
    console.error('Error creating short URL:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const recentUrls = urlDb.getRecentUrls();
    return NextResponse.json({ urls: recentUrls });
  } catch (error) {
    console.error('Error fetching recent URLs:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}