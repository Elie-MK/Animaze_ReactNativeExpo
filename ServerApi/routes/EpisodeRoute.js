app.post("/animes/:animeId/seasons/:seasonId/episodes", async (req, res) => {
    const { titleEpisode, imgEpisode, link } = req.body;
    const { animeId, seasonId } = req.params;
  
    try {
      const newEpisode = new Episode({
        titleEpisode,
        imgEpisode,
        link,
      });
  
      const season = await Season.findById(seasonId);
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

  

  //Get All Animes
  app.get("/anime", async (req, res) => {
    try {
      const animeList = await Anime.find().populate("anime");
      res.json(animeList);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  //Get by Id
  app.get("/animes/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const animeList = await Anime.findOne(id);
      res.json(animeList);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  //Episodes
  app.post("/episodes", async (req, res) => {
    const { titleEpisode, imgEpisode, link } = req.body;
    try {
      const newEpisode = await new Episode({
        titleEpisode,
        imgEpisode,
        link,
      });

      await newEpisode.save();
      res.json(newEpisode);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Erreur lors du sauvegarde" });
    }
  });
  app.get("/episodes", async (req, res) => {
    try {
      const EpisodeList = await Episode.find();
      res.json(EpisodeList);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  //Seasons
  app.post("/seasons", async (req, res) => {

    const { titleSeason, titleEpisode, imgEpisode, link } = req.body;
    try {
   
      const newEpisode = await new Episode({
        titleEpisode,
        imgEpisode,
        link,
      });

      await newEpisode.save();
      res.json(newSeasons);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Erreur lors du sauvegarde" });
    }
  });

  app.get("/seasons", async (req, res) => {
    try {
      const SeasonList = await Season.find();
      res.json(SeasonList);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get("/seasons/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const SeasonList = await Season.findById(id);
      res.json(SeasonList);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.post("/seasons/:id", async (req, res) => {
    const { id } = req.params;
    const { titleSeason, titleEpisode, imgEpisode, link } = req.body;

    try {
      const newEpisode = await new Episode({
        titleEpisode,
        imgEpisode,
        link,
      });
      const SeasonList = await Season.findById(id);
      SeasonList.episodes.push(newEpisode);
      SeasonList.save()
      newEpisode.save()
      res.json(SeasonList);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  //Update Episode
  app.post('/animes/:id/:idSeason', async (req, res) => {
    const { id, idSeason } = req.params;
    const {
      titleEpisode,
      imgEpisode,
      link,
    } = req.body;
  
    try {
      const newEpisode = new Episode({
        titleEpisode,
        imgEpisode,
        link,
      });
  
      await newEpisode.save();
      const anime = await Anime.findById(id);

      const season = await Season.findById(idSeason);
      season.episodes.push(newEpisode);
      await season.save();
  
  
      res.json(newEpisode);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Erreur lors de la sauvegarde" });
    }
  });