import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


const instanceUrl = axios.create({
  baseURL:"http://192.168.1.114:5000"
})

export const AnimeDatas = async () => {
  try {
    const response = await instanceUrl.get(`/animes`);
    if (response && response.data) {
      return response.data;
    } else {
      throw new Error("Réponse invalide du serveur");
    }
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
export const Episode = async () => {
  try {
    const response = await instanceUrl.get(`/episodes`);
    if (response && response.data) {
      return response.data;
    } else {
      throw new Error("Réponse invalide du serveur");
    }
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
export const Season = async () => {
  try {
    const response = await instanceUrl.get(`/seasons`);
    if (response && response.data) {
      return response.data;
    } else {
      throw new Error("Réponse invalide du serveur");
    }
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
export const signUp = async (username, email, password) => {
  try {
    const response = await instanceUrl.post(`/signup`, {
      username,
      email,
      password,
    })
    if (response && response.data) {
      return response.data
    } else {
      throw new Error("Réponse invalide du serveur")
    }
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const signIn = async (email, password) => {
  try {
    const response = await instanceUrl.post(`/signin`, {
      email,
      password,
    });
    if (response && response.data) {
      return response.data
    } else {
      throw new Error("Réponse invalide du serveur");
    }
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const fetchData = async () => {
  try {
    const token = await AsyncStorage.getItem('jwtToken');

    if (token) {
      const response = await axios.get(`http://192.168.1.2:5000/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userData = response.data;
    } else {
      console.log('Aucun jeton JWT trouvé');
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des données de l\'utilisateur:', error);
  }
};