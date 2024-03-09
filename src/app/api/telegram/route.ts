import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  const { TG_BOT_TOKEN, TG_CHAT_ID, TG_BASE_URL } = process.env;
  const URL = `${TG_BASE_URL}${TG_BOT_TOKEN}/sendMessage`;

  try {
    const message = await req.json();
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TG_CHAT_ID,
        text: message.text,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ code: response.status }, { status: response.status });
    }

    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
};
