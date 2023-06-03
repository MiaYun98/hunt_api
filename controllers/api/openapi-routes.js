const { Configuration, OpenAIApi } = require("openai");
// const bodyParser = require("body-parser");
const express = require('express');
const router = express.Router();
const dotenv = require("dotenv")

dotenv.config()

const configuration = new Configuration({
    organization: process.env.ORGANIZATION,
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

router.post("/", async (req, res) => {
    const { message } = req.body;

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "user", content: `${message}` }
        ]
    })

    res.json({
        completion: completion.data.choices[0].message
    })
});


module.exports = router;