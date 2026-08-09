require("dotenv").config();
const express = require("express");
const app = express();
// const port = 3000;

const ojaswiData = {
  login: "meojaswi",
  id: 174684231,
  node_id: "U_kgDOCml4Rw",
  avatar_url: "https://avatars.githubusercontent.com/u/174684231?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/meojaswi",
  html_url: "https://github.com/meojaswi",
  followers_url: "https://api.github.com/users/meojaswi/followers",
  following_url: "https://api.github.com/users/meojaswi/following{/other_user}",
  gists_url: "https://api.github.com/users/meojaswi/gists{/gist_id}",
  starred_url: "https://api.github.com/users/meojaswi/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/meojaswi/subscriptions",
  organizations_url: "https://api.github.com/users/meojaswi/orgs",
  repos_url: "https://api.github.com/users/meojaswi/repos",
  events_url: "https://api.github.com/users/meojaswi/events{/privacy}",
  received_events_url: "https://api.github.com/users/meojaswi/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Kumar Ojaswi",
  company: null,
  blog: "",
  location: "Bangalore, India",
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 17,
  public_gists: 0,
  followers: 0,
  following: 2,
  created_at: "2024-07-04T06:18:58Z",
  updated_at: "2026-07-17T18:35:13Z",
};
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/check", (req, res) => {
  res.send("This is a response from the server.");
});

app.get("/login", (req, res) => {
  res.send("<h1>This is a login page</h1>");
});

app.get("/githum", (req, res) => {
  res.send(ojaswiData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
