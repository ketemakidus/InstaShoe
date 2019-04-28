import axios from "axios";
import auth0Client from '../utils/Auth';

export default {
  // Gets all shoes
  getallshoes: function() {
    return axios.get("/api/shoes");
  },
  // Gets the shoes with the given id
  getshoes: function(id) {
    return axios.get("/api/shoes/" + id);
  },
  // Saves a shoes to the database
  saveshoes: function(shoesData) {
    return axios.post("/api/shoes", shoesData, {headers: { 'Authorization': `Bearer ${auth0Client.getIdToken()}` }});
  }
};
