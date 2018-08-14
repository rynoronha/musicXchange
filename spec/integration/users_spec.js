const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/users/";
const User = require("../../src/db/models").User;
const sequelize = require("../../src/db/models/index").sequelize;

describe("routes : users", () => {

  beforeEach((done) => {
    sequelize.sync({force: true})
    .then(() => {
      done();
    })
    .catch((err) => {
      console.log(err);
      done();
    });
  });

  describe("GET /users/sign_up", () => {

    it("should render a view with a sign up form", (done) => {
      request.get(`${base}sign_up`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain("Sign up");
        done();
      });
    });

  });

  describe("POST /users", () => {

    it("should create a new user with valid values and redirect", (done) => {
      const options = {
        url: base,
        form: {
          firstname: "Ryan",
          lastname: "Noronha",
          email: "ryan@email.com",
          password: "123456789"
        }
      }
      request.post(options,
        (err, res, body) => {
          User.findOne({where: {email: "ryan@email.com"}})
          .then((user) => {
            expect(user).not.toBeNull();
            expect(user.firstname).toBe("Ryan");
            expect(user.lastname).toBe("Noronha");
            expect(user.email).toBe("ryan@email.com");
            expect(user.id).toBe(1);
            done();
          })
          .catch((err) => {
            console.log(err);
            done();
          });
        }
      );
    });

    it("should not create a new user with invalid attributes and redirect", (done) => {
      request.post(
        {
          url: base,
          form: {
            firstname: "Ryan",
            lastname: "Noronha",
            email: "not a valid email",
            password: "123456789"
          }
        },
        (err, res, body) => {
          User.findOne({where: {email: "not a valid email"}})
          .then((user) => {
            expect(user).toBeNull();
            done();
          })
          .catch((err) => {
            console.log(err);
            done();
          });
        }
      );
    });

    it("should not create a new user with empty first name", (done) => {
      request.post(
        {
          url: base,
          form: {
            firstname: "",
            lastname: "Noronha",
            email: "ryan@email.com",
            password: "123456789"
          }
        },
        (err, res, body) => {
          User.findOne({where: {email: "ryan@email.com"}})
          .then((user) => {
            expect(user).toBeNull();
            done();
          })
          .catch((err) => {
            console.log(err);
            done();
          });
        }
      );
    });

    it("should not create a new user with empty last name", (done) => {
      request.post(
        {
          url: base,
          form: {
            firstname: "Ryan",
            lastname: "",
            email: "ryan@email.com",
            password: "123456789"
          }
        },
        (err, res, body) => {
          User.findOne({where: {email: "ryan@email.com"}})
          .then((user) => {
            expect(user).toBeNull();
            done();
          })
          .catch((err) => {
            console.log(err);
            done();
          });
        }
      );
    });

  });


});
