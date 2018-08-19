const cityQueries = require("../db/queries.cities.js");

module.exports = {

  index(req, res, next){
    cityQueries.getAllCities((err, cities) => {
      if(err){
        res.redirect(500, "static/index");
      } else {
        res.render("cities/index", {cities});
      }
    })
  }

}
