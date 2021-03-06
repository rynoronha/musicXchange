module.exports = {

   validateUserSignUp(req, res, next) {
     if(req.method === "POST") {
       req.checkBody("firstname", "is required").notEmpty();
       req.checkBody("lastname", "is required").notEmpty();
       req.checkBody("email", "must be valid").isEmail();
       req.checkBody("password", "must be at least 6 characters in length").isLength({min: 6});
       req.checkBody("passwordConfirmation", "must match password provided").optional().matches(req.body.password);
     }
     const errors = req.validationErrors();
     if (errors) {
       req.flash("error", errors);
       return res.redirect(req.headers.referer);
     } else {
       return next();
     }
   },

   validateUserSignIn(req, res, next) {
     if(req.method === "POST") {
       req.checkBody("email", "must be valid").isEmail();
     }
     const errors = req.validationErrors();
     if (errors) {
       req.flash("error", errors);
       return res.redirect(req.headers.referer);
     } else {
       return next();
     }
   },

}
