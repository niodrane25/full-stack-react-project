import express from "express";
import postgres from "postgres";
import dotenv from "dotenv";


dotenv.config({ path: "../.env" });

const PORT = process.env.PORT;
const sql = postgres(process.env.DATABASE_URL);
const app = express();

app.use(express.json());

// Route for user registration
app.post("/api/register", (req, res) => {
  const { username, email, password } = req.body;

  sql`
    INSERT INTO users (username, email, password)
    VALUES (${username}, ${email}, ${password})
    RETURNING *
  `
    .then((result) => {
      const newUser = result[0];
      // Handle the response or send a success message
      res.send(newUser);
    })
    .catch((error) => {
      // Handle errors and send an appropriate error response
      res.status(500).send("Error registering user");
    });
});

// Route for profile creation
app.post("/api/profiles", (req, res) => {
  const { user_id, user_name, email, bio } = req.body;

  sql`
    INSERT INTO profiles (user_id, user_name, email, bio, created_at, updated_at)
    VALUES (${user_id}, ${user_name}, ${email}, ${bio}, NOW(), NOW())
    RETURNING *
  `
    .then((result) => {
      const newProfile = result[0];
      // Handle the response or send a success message
      res.send(newProfile);
    })
    .catch((error) => {
      // Handle errors and send an appropriate error response
      res.status(500).send("Error creating profile");
    });
});

// Route for post creation
app.post("/api/posts", (req, res) => {
  const { user_id, content } = req.body;

  sql`
    INSERT INTO posts (user_id, content, created_at, updated_at)
    VALUES (${user_id}, ${content}, NOW(), NOW())
    RETURNING *
  `
    .then((result) => {
      const newPost = result[0];
      // Handle the response or send a success message
      res.send(newPost);
    })
    .catch((error) => {
      // Handle errors and send an appropriate error response
      res.status(500).send("Error creating post");
    });
});

// Route for post listing
app.get("/api/posts", (req, res) => {
  sql`
    SELECT * FROM posts
  `
    .then((result) => {
      const posts = result;
      // Handle the response or send the posts
      res.send(posts);
    })
    .catch((error) => {
      // Handle errors and send an appropriate error response
      res.status(500).send("Error retrieving posts");
    });
});

app.listen(5173, () => {
  console.log(`Listening on port 5173`);
});
