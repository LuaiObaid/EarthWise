import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
//import userRouter from './routes/user.route.js';
//import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
//import path from 'path'

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});

// chatgpt key  put it in .env file 
// OPENAI_API_KEY=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
// OPENAI_ORGANIZATION=org-qgPLtBaASUYECOcfP5GUMBNb

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