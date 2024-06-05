const Animes = require("../Models/AnimeSchema");
const Seasons = require("../Models/Season");
const Episodes = require("../Models/Episodechema");

const AnimeRoutes = (app) => {
  //All Post Animes

  //Add Anime
  app.post("/animes", async (req, res) => {
    const {
      titleAnime,
      img,
      desc,
      stars,
      year,
      titleEpisode,
      imgEpisode,
      link,
      titleSeason,
    } = req.body;
    try {
      const newEpisode = await Episodes({
        titleEpisode,
        imgEpisode,
        link,
      });
      const newSeasons = await Seasons({
        titleSeason,
        episodes: [newEpisode],
      });
      const newAnimes = await Animes({
        titleAnime,
        img,
        desc,
        stars,
        year,
        seasons: [newSeasons],
      });

      await newSeasons.save();
      await newEpisode.save();
      await newAnimes.save();
      res.json(newAnimes);
    } catch (error) {
      res.status(500).json({ error: "Erreur lors du sauvegarde" });
    }
  });

//Add Season
  app.post("/animes/:animeId/seasons", async (req, res) => {
    const { titleSeason, titleEpisode, imgEpisode, link } = req.body;
    const { animeId } = req.params;
  
    try {
      const newEpisode = new Episodes({
        titleEpisode,
        imgEpisode,
        link,
      });
  
      const newSeason = new Seasons({
        titleSeason,
        episodes: [newEpisode],
      });
  
      const anime = await Animes.findById(animeId).populate("seasons");
      if (!anime) {
        return res.status(404).json({ error: "Anime non trouvé" });
      }
  
      anime.seasons.push(newSeason);
      await newEpisode.save();
      await newSeason.save();
      await anime.save();
  
      res.json(anime);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Erreur lors de l'ajout de la saison et de l'épisode" });
    }
  });


//Add Episode
  app.post("/animes/seasons/:seasonId/episodes", async (req, res) => {
    const { titleEpisode, imgEpisode, link } = req.body;
    const { animeId, seasonId } = req.params;
  
    try {
      const newEpisode = new Episodes({
        titleEpisode,
        imgEpisode,
        link,
      });
  
      const season = await Seasons.findById(seasonId).populate('episodes')
      if (!season) {
        return res.status(404).json({ error: "Saison non trouvée" });
      }
  
      season.episodes.push(newEpisode);
      await newEpisode.save();
      await season.save();
  
      res.json(season);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Erreur lors de l'ajout de l'épisode à la saison" });
    }
  });


  //All Get

  app.get("/animes", async (req, res) => {
    try {
      const animes = await Animes.find().populate("seasons").exec();
      res.json( animes );
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "No datas find" });
    }
  });

  app.get("/seasons", async (req, res) => {
    try {
      const seasons = await Seasons.find().populate("episodes");

      res.json(seasons);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "No datas find" });
    }
  });
  app.get("/episodes", async (req, res) => {
    try {
      const episodes = await Episodes.find()

      res.json(episodes);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "No datas find" });
    }
  });
};

module.exports = AnimeRoutes;
