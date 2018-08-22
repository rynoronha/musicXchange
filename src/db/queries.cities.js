const City = require("./models").City;
const Listing = require("./models").Listing;

module.exports = {

  getAllCities(callback){
    return City.all()
    .then((cities) => {
      callback(null, cities);
    })
    .catch((err) => {
      console.log(err);
      callback(err);
    })
  },

  getCity(id, callback){
    return City.findById(id, {
      include: [{
        model: Listing,
        as: "listings"
      }]
    })
     .then((city) => {
       callback(null, city);
     })
     .catch((err) => {
       callback(err);
     })
   },

}
