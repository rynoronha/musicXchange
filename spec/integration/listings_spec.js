const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/cities";
const sequelize = require("../../src/db/models/index").sequelize;
const City = require("../../src/db/models").City;
const Listing = require("../../src/db/models").Listing;
const User = require("../../src/db/models").User;

describe("routes : listings", () => {

  beforeEach((done) => {

    this.city;
    this.listing;
    this.user;
    sequelize.sync({force: true}).then((res) => {
      User.create({
        firstname: "Ryan",
        lastname: "Noronha",
        email: "ryan@email.com",
        password: "1234567890"
      })
      .then((user) => {
        this.user = user;
        City.create({
          name: "London",
          listings: [{
            instrument: "Xylophone",
            description: "Brand new!",
            price: 10,
            until: "Dec 25th",
            pickup: "Contact owner directly",
            userId: this.user.id
          }]
        }, {
          include: {
            model: Listing,
            as: "listings"
          }
        })
        .then((city) => {
          this.city = city;
          this.listings = city.listings[0];
          done();
          });
        })
        .catch((err) => {
          console.log(err);
          done();
        });
      });

    });

});
