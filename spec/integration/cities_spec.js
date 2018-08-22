const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/cities";
const sequelize = require("../../src/db/models/index").sequelize;
const City = require("../../src/db/models").City;

describe("routes : cities", () => {

  beforeEach((done) => {
      this.city;
      sequelize.sync({force: true}).then((res) => {

       City.create({
         name: "London",
       })
        .then((city) => {
          this.city = city;
          done();
        })
        .catch((err) => {
          console.log(err);
          done();
        });

      });

    });

  describe("GET /cities", () => {

    it("should return a status code 200 and all cities", (done) => {
       request.get(base, (err, res, body) => {
         expect(res.statusCode).toBe(200);
         expect(err).toBeNull();
         expect(body).toContain("Select Your City");
         expect(body).toContain("London");
         done();
       });
     });

   });

});
