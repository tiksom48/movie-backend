const {getHomeList, getMovieInfo} = require("./schemas/tmdb")
const express = require('express');
require("dotenv").config()
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5050

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log('🚀 Listening on port 5050!');
});

app.get("/homeList", async (req, res) => {
    try {
        const movies = await  getHomeList();
        if(movies) res.status(200).json(movies)
    } catch (error) {
        
        res.status(400).json({message:error, })
    }
})