const authUsers = require("../Models/AuthSchema");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UsersRoute = (app) => {
  app.post("/signup", async (req, res) => {
    const { username, email, password, token } = req.body;

    try {
      const existingUser = await authUsers.findOne({ username, email });
      if (existingUser) {
        return res
          .status(409)
          .json({ message: "Nom d'utilisateur déjà utilisé" });
      }

      const hash = await bcryptjs.hash(password, 16);

      const newUser = new authUsers({
        username,
        email,
        password: hash,
      });

      await newUser.save();

      res.status(201).json({ message: "Inscription réussie" });
    } catch (err) {
      console.error("Erreur lors de l'inscription:", err);
      res.status(500).json({ message: "Erreur lors de l'inscription" });
    }
  });

  app.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    const privateKey =
      "eyJhbGciOiJIUzI1NiJ9.eyJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY4ODg0OTUxNiwiaWF0IjoxNjg4ODQ5NTE2fQ.ZoVN6rbRI4L5E2ajMs3vuQ4SQ2yWSCD8rqPQ2HUYHs8";
    try {
      const user = await authUsers.findOne({ email });
      if (!user) {
        return res
          .status(401)
          .json({ message: "Nom d'utilisateur ou mot de passe incorrect" });
      }
      const passwordMatch = await bcryptjs.compare(password, user.password);
      if (!passwordMatch) {
        return res
          .status(401)
          .json({ message: "Nom d'utilisateur ou mot de passe incorrect" });
      }
      const token = jwt.sign({ userId: email }, privateKey);

      res.json({ message: "Connexion réussie", token });
      console.log({ message: "Connexion réussie", token });
    } catch (err) {
      console.error("Erreur lors de la connexion:", err);
      res.status(500).json({ message: "Erreur lors de la connexion" });
    }
  });

  app.get("/users", async (req, res) => {
    try {
      const users = await authUsers.find();
      res.json(users);
    } catch (error) {
      res.json("Erreur lors de la récupération des utilisateurs");
      console.log("Erreur lors de la récupération des utilisateurs", error);
    }
  });
  app.get("/users/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const users = await authUsers.findById(id);
      res.json(users);
    } catch (error) {
      res.json("Utilisateur non trouvé");
      console.log("Erreur lors de la récupération de l'utilisateur", error);
    }
  });
};

module.exports = UsersRoute;
