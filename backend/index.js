import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
//import userRouter from './routes/user.route.js';
//import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
//import path from 'path'
import axios from 'axios'

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

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  try {
    const response = await axios.post(
        '<https://api.openai.com/v1/chat/completions>',
        {
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: message}],
        },
        {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        }
    );
    res.json(response.data);
} catch (error) {
    console.error(error);
    res.status(500).send("Unable to communicate with OpenAI");
}
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});



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