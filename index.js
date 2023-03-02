const express = require("express");
const OpenAI = require("openai");

const { Configuration, OpenAIApi } = OpenAI;

const configuration = new Configuration({
  organization: "org-HwZs2sralOOq0oea51IVfHR9",
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post("/getResponse", async (req, res) => {
  let { message, mood } = req.body;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `How to respond to the following message in a ${mood} mood?:\n\n${message}`,
    temperature: 0,
    max_tokens: 60,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  let reply = "";

  if (response.data) {
    if (response.data.choices.length > 0) {
      response.data.choices.forEach((choice) => {
        reply += `- ${choice.text}\n\n`;
      });
    }
  }

  res.json({
    message: reply,
  });
});

app.listen(port, () => console.log("Listning to port 3001"));
