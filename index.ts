import "dotenv/config";

import { OpenAI } from "langchain/llms/openai";

const model = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY!,
  temperature: 0.9,
});

const res = await model.call("Tell me 5 best places to visit");
console.log(res);
