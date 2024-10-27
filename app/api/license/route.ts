// app/api/license/route.ts


import { NextResponse } from 'next/server';

const licenseInfo = `
This project was developed by Gmstree Team.


Website: https://gmstree.com
YouTube: https://www.youtube.com/@GmsTreeFoundation
Telegram: https://t.me/gmstree_bot
Telegram channel for news/updates: https://t.me/gmstree_community
GitHub: https://github.com/Gmstree
`;

export async function GET(req: Request) {
  return NextResponse.json({ 
    license: licenseInfo.trim(),
    version: '1.0.0',
    lastUpdated: '2024-08-20'
  }, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}