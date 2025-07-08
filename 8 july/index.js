import express from 'express';
import morgan from 'morgan';
import userRoutes from './routes/user.routes.js';
import postsRoutes from './routes/posts.routes.js';
import commentsRoutes from './routes/comments.routes.js';
import { db } from './utils/db.js';
import dotenv from 'dotenv';


const app = express();

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get("/", (req, res) => {
  res.json({
    message: "Server is working!",
    status: "success",
    availableRoutes: {
      users: "/kishor/user",
      posts: "/kishor/posts", 
      comments: "/kishor/comments"
    }
  });
});


app.use("/kishor", userRoutes);
app.use("/kishor", postsRoutes);
app.use("/kishor", commentsRoutes);



app.listen( process.env.port , () => {
  db()
  console.log(`Server is running on port ${ process.env.port }`);
});