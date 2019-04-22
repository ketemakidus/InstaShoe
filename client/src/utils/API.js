import axios from "axios";

export default {
  // Gets all shoes
  getshoes: function() {
    return axios.get("/api/shoes");
  },
  // Gets the shoes with the given id
  getshoes: function(id) {
    return axios.get("/api/shoes/" + id);
  },
  // Deletes the shoes with the given id
  deleteshoes: function(id) {
    return axios.delete("/api/shoes/" + id);
  },
  // Saves a shoes to the database
  saveshoes: function(shoesData) {
    return axios.post("/api/shoes", shoesData);
  }
};
