const sequelize = require("../../src/db/models/index").sequelize;
const City = require("../../src/db/models").City;
const Listing = require("../../src/db/models").Listing;
const User = require("../../src/db/models").User;

describe("Listing", () => {

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
          name: "London"
        })
        .then((city) => {
          this.city = city;
          Listing.create({
            instrument: "Xylophone",
            description: "Brand new!",
            price: 10,
            until: "Dec 25th",
            pickup: "Contact owner directly",
            userId: this.user.id,
            cityId: this.city.id
          })
          .then((listing) => {
            this.listing = listing;
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

  describe("#create()", () => {

     it("should create a listing object with an instrument, description, price, availability, pickup, and assigned city", (done) => {
       Listing.create({
         instrument: "Triangle",
         description: "Perfect for the novice triangle player!",
         price: 5,
         until: "No limit",
         pickup: "Deliver to your home address",
         userId: this.user.id,
         cityId: this.city.id
       })
       .then((listing) => {
         expect(listing.instrument).toBe("Triangle");
         expect(listing.description).toBe("Perfect for the novice triangle player!");
         expect(listing.price).toBe(5);
         expect(listing.until).toBe("No limit");
         expect(listing.pickup).toBe("Deliver to your home address");
         done();
       })
       .catch((err) => {
         console.log(err);
         done();
       });
     });

     it("should not create a listing with missing instrument, description, price, availability, pickup, or assigned city", (done) => {
     Listing.create({
       instrument: "Triangle"
     })
     .then((listing) => {

      // the code in this block will not be evaluated since the validation error
      // will skip it. Instead, we'll catch the error in the catch block below
      // and set the expectations there

       done();
     })
     .catch((err) => {

       expect(err.message).toContain("Listing.description cannot be null");
       expect(err.message).toContain("Listing.price cannot be null");
       expect(err.message).toContain("Listing.until cannot be null");
       expect(err.message).toContain("Listing.pickup cannot be null");
       done();

     })
   });

  });

  describe("#setCity()", () => {

     it("should associate a city and a listing together", (done) => {
       City.create({
         name: "Paris",
       })
       .then((newCity) => {
         expect(this.listing.cityId).toBe(this.city.id);
         this.listing.setCity(newCity)
         .then((listing) => {
           expect(this.listing.cityId).toBe(newCity.id);
           done();

         });
       })
     });

  });

  describe("#getCity()", () => {

     it("should return the associated city", (done) => {
       this.listing.getCity()
       .then((associatedCity) => {
         expect(associatedCity.name).toBe("London");
         done();
       });
     });

  });

  describe("#setUser()", () => {

     it("should associate a listing and a user together", (done) => {
       User.create({
         firstname: "James",
         lastname: "Bond",
         email: "007@mi6.com",
         password: "password"
       })
       .then((newUser) => {
         expect(this.listing.userId).toBe(this.user.id);
         this.listing.setUser(newUser)
         .then((listing) => {
           expect(this.listing.userId).toBe(newUser.id);
           done();
         });
       })

     });

  });

   describe("#getUser()", () => {

     it("should return the associated user", (done) => {
       this.listing.getUser()
       .then((associatedUser) => {
         expect(associatedUser.email).toBe("ryan@email.com");
         done();
       });

     });

  });

});
