import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://www.goldapi.io/api/XAU/USD', {
      headers: { 
        // We will store this in your .env.local file later
        'x-access-token': process.env.GOLD_API_KEY || '' 
      },
      // NEXT.JS MAGIC: Cache this response for 3600 seconds (1 hour)
      // This ensures you never blow past your free API limits!
      next: { revalidate: 3600 } 
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch from GoldAPI');
    }

    const data = await res.json();
    return NextResponse.json(data);
    
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch market data' }, { status: 500 });
  }
}