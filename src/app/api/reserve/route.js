import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, editionSerial, customEngraving } = body;

    if (!fullName || !email) {
      return NextResponse.json({ error: 'Missing required fields: fullName and email' }, { status: 400 });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Simulate backend processing time
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Generate Allocation Code (ÆT-XXXX)
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const allocationCode = `ÆT-${randomCode}`;

    return NextResponse.json(
      {
        allocationCode,
        status: 'CONFIRMED',
        data: { fullName, email, editionSerial, customEngraving }
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
