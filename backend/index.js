import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
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
// const PORT = process.env.PORT || 5000;
const PORT = 5000;

app.use(express.json());
app.use(cookieParser());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
app.post("/find-com", async (req, res) => {
  try {
    // Extract the question from the request body
    const question = req.body.question;

    // Check if the question is provided
    if (!question) {
      return res.status(400).json({ success: false, error: "Question is required" });
    }

    // Define the prompt using the question
    const prompt = `Answer the following question: ${question}`;

    // Make the API call to OpenAI with the dynamic prompt
    const aiRes = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: question }], // Use the question as user input
      prompt: prompt,
      max_tokens: 2048,
    });

    // Extract the response from the API response
    const response = aiRes.choices[0].message;

    // Return the response to the client
    return res.status(200).json({ success: true, response });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ success: false, error: "Internal server error" });
  }
});


app.get("/api/getuser", (req, res)=>{
	try {
		res.status(200).json("user: Luai oabid")
	} catch (error) {
		res.status(400).json(error.message)
	}
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
//app.use("/api/listing", listingRouter);

/*app.use(express.static(path.join(__dirname, 'client', 'dist')));


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