const City = require("./models").City;

module.exports = {

  getAllCities(callback){
    return City.all()
    .then((cities) => {
      callback(null, cities);
    })
    .catch((err) => {
      callback(err);
    })
  }
  
}
