import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
//import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';

// Old (OpenAI Node.js SDK v3)
import OpenAI from 'openai';




//import path from 'path'
// import axios from 'axios'


dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.error(err);
  });
  //const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

<<<<<<< HEAD
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
app.post("/find-com", async (req, res) => {
  const prompt = "tell me a joke about cat eating pasta"
  try {
    const aiRes = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages:[{"role":"user","content":"tell me how to wash me hands"}],
     // prompt:prompt,
      max_tokens: 2048,
      //temperature: 1,
     // top_p: 1.0,
      //frequency_penalty: 0.0,
      //presence_penalty: 0.0,
      //stop: ["\n"],
    });
    console.log(aiRes.choices[0].message)
  /*  return res.status(200).json({
      success: true,
      data: aiRes.data.choices[0].text
    });*/
  } catch (error) {
    /*let errorMessage = "There was an issue on the server";
    if (error.response && error.response.data && error.response.data.error && error.response.data.error.message) {
      errorMessage = error.response.data.error.message;
    }
    return res.status(400).json({
      success: false,
      error: errorMessage
    });*/
    console.log(error)
  }
});

=======
// app.post('/api/chat', async (req, res) => {
//   const { message } = req.body;
//   try {
//     const response = await axios.post(
//         '<https://api.openai.com/v1/chat/completions>',
//         {
//             model: "gpt-3.5-turbo",
//             messages: [{role: "user", content: message}],
//         },
//         {
//             headers: {
//                 'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
//                 'Content-Type': 'application/json'
//             }
//         }
//     );
//     res.json(response.data);
// } catch (error) {
//     console.error(error);
//     res.status(500).send("Unable to communicate with OpenAI");
// }
// });
>>>>>>> a06d4ff04df13eb0d6f7f3341f0004ac876bc014

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});
<<<<<<< HEAD
app.use("/api/auth", authRouter);
=======



>>>>>>> a06d4ff04df13eb0d6f7f3341f0004ac876bc014
/*app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

app.use(express.static(path.join(__dirname, 'client', 'dist')));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
  });

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
*/