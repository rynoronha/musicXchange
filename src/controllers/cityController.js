const cityQueries = require("../db/queries.cities.js");

module.exports = {

  index(req, res, next){
    cityQueries.getAllCities((err, cities) => {
      if(err){
        res.redirect(500, "/");
      } else {
        res.render("cities/index", {cities});
      }
    })
  },

  show(req, res, next){
     cityQueries.getCity(req.params.id, (err, city) => {
       if(err || city == null){
         res.redirect(404, "/");
       } else {
         res.render("cities/show", {city});
       }
     });
   }

}
