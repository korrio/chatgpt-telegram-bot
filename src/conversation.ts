import { ChatGPTAPI } from 'chatgpt';
import { env } from './utils/env';

// store conversation
const memory = new Map<string,string>();

const api = new ChatGPTAPI({
  apiKey: env.CHATGPT_TOKEN,
});

/**
 * send message to chatGPT
 */
export const send = async (
  message: string
) => {
  const res = await api.sendMessage(message)
  return res.text;
};
