CREATE DATABASE wordle_app;
\c wordle_app

CREATE TABLE score_counter (
  id SERIAL PRIMARY KEY,
  score INT
);

CREATE TABLE leaderboard (
  id SERIAL PRIMARY KEY,
  player_name TEXT,
  score INT,
);
