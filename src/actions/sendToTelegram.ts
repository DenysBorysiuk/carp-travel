import { FieldValues } from 'react-hook-form';

export const sendToTelegram = async (data: FieldValues) => {
  let message = '<b>Заявка з сайту:</b>\n';

  try {
    const dataToSend = Object.entries(data).reduce(
      (acc, [key, value]) => (acc += `${key}: ${value}\n`),
      message
    );

    const res = await fetch('/api/telegram', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: dataToSend,
      }),
    });

    if (res.ok) {
      return true;
    }

    throw new Error();
  } catch (error) {
    throw new Error();
  }
};
