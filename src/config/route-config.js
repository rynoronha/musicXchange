module.exports = {
  init(app){
    const staticRoutes = require("../routes/static");
    const userRoutes = require("../routes/users");
    const cityRoutes = require("../routes/cities");
    const listingRoutes = require("../routes/listings");

    app.use(staticRoutes);
    app.use(userRoutes);
    app.use(cityRoutes);
    app.use(listingRoutes);
  }
}
