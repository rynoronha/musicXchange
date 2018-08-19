module.exports = {
  init(app){
    const staticRoutes = require("../routes/static");
    const userRoutes = require("../routes/users");
    const cityRoutes = require("../routes/cities");

    app.use(staticRoutes);
    app.use(userRoutes);
    app.use(cityRoutes);
  }
}
