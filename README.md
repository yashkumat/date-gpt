# Date-GPT

AI generated message with intent to reply on any message using OpenAI.


## Demo

![Demo 1](https://github.com/yashkumat/date-gpt/blob/main/WhatsApp%20Image%202023-03-02%20at%2005.47.36.jpeg)


# Date GPT

Reply to question with intent.



## Installation

1. Create react app.
```bash
  npx create-react-app app_name
```

2. Replace App.js in src folder with above App.js (Frontend)

3. Add above index.js in root folder (Nodejs Backend)

4. Install OpenAI. Run following command
```bash
  npm install openai
```

5. Setup OpenAI organisation id and api key in index.js
```bash
    const configuration = new Configuration({
        organization: "your_organization_id",
        apiKey: "your_api_key",
    });
```
    
6. Start react app using terminal command:
```bash
    npm start
```
your application will start at port 3000

7. Start nodejs server in another terminal using command:
```bash
    node index.js
```
your server will start at port 3001
