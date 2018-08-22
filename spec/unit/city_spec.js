const sequelize = require("../../src/db/models/index").sequelize;
const City = require("../../src/db/models").City;
const Listing = require("../../src/db/models").Listing;
const User = require("../../src/db/models").User;

describe("City", () => {

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

  describe("#create()", () => {

     it("should create a city object with a name", (done) => {
       City.create({
         name: "Rome"
       })
       .then((city) => {
         expect(city.name).toBe("Rome");
         done();
       })
       .catch((err) => {
         console.log(err);
         done();
       });
     });

  });

  describe("#getListings()", () => {

    it("should return the associated listing", (done) => {
      this.city.getListings()
      .then((associatedListings) => {
        expect(associatedListings[0].instrument).toBe("Xylophone");
        done();
      });
    });

  });


});
