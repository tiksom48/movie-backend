const axios = require("axios");



const basicFetch = async (endpoint) => {
  const req = await axios.get(`${process.env.API_BASE}${endpoint}`).then(res => res.data);
    console.log(typeof req)
  return req;
};

exports.getHomeList = async () => {
   
  return [
    {
      slug: "originals",
      title: "Originais do Netflix",
      items: await basicFetch(
        `/discover/tv?with_network=213&language=pt-BR&api_key=${process.env.API_KEY}`
      ),
    },
    {
      slug: "trending",
      title: "Recomendados para Você",
      items: await basicFetch(
        `/trending/all/week?language=pt-BR&api_key=${process.env.API_KEY}`
      ),
    },
    {
      slug: "toprated",
      title: "Em Alta",
      items: await basicFetch(
        `/movie/top_rated?language=pt-BR&api_key=${process.env.API_KEY}`
      ),
    },
    {
      slug: "action",
      title: "Ação",
      items: await basicFetch(
        `/discover/movie?with_genres=28&language=pt-BR&api_key=${process.env.API_KEY}`
      ),
    },
    {
      slug: "comedy",
      title: "Comédia",
      items: await basicFetch(
        `/discover/movie?with_genres=35&language=pt-BR&api_key=${process.env.API_KEY}`
      ),
    },
    {
      slug: "horror",
      title: "Terror",
      items: await basicFetch(
        `/discover/movie?with_genres=27&language=pt-BR&api_key=${process.env.API_KEY}`
      ),
    },
    {
      slug: "romance",
      title: "Romance",
      items: await basicFetch(
        `/discover/movie?with_genres=10749&language=pt-BR&api_key=${process.env.API_KEY}`
      ),
    },
    {
      slug: "documentary",
      title: "Documentários",
      items: await basicFetch(
        `/discover/movie?with_genres=99&language=pt-BR&api_key=${process.env.API_KEY}`
      ),
    },
  ];
};

exports.getMovieInfo = async (movieId, type) => {
    let info = null;

    if (movieId) {
        switch (type) {
          case "movie":
            info = await basicFetch(
              `/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`
            );
            break;
          case "tv":
            info = await basicFetch(
              `/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`
            );
            break;
          default:
            info = null;
            break;
        }
      }
  
      return info;
}