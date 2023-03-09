const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("../models/user-model");

router.get("/login", (req, res) => {
  res.render("login", { user: req.user });
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/auth/login",
    failureFlash: "Wrong email or password.",
  }),
  (req, res) => {
    if (req.session.returnTo) {
      let newPath = req.session.returnTo;
      req.session.returnTo = "";
      res.redirect(newPath); 
    } else {
      res.redirect("/course");
    }
  }
);

router.get("/signup", (req, res) => {
  res.render("signup", { user: req.user });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.post("/signup", async (req, res) => {
  let { name, email, password } = req.body;
  //check if the data is already in db.
  const emailExist = await User.findOne({ email });
  if (emailExist) {
    req.flash("error_msg", "Email is already exist.");
    res.redirect("/auth/signup");
  }

  const hash = await bcrypt.hash(password, 10);
  password = hash;
  let newUser = new User({ name, email, password });
  try {
    await newUser.save();
    req.flash("success_msg", "Registration succeeds. You can login now.");
    res.redirect("/auth/login");
  } catch (err) {
    req.flash("error_msg", err.errors.name.properties.message);
    res.redirect("/auth/signup");
  }
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"], // "email" 讓使用者每次登入系統時，可以選擇登入的帳號
    prompt: "select_account", // prompt 讓使用者每次登入系統時，可以選擇登入的帳號
  })
);

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  if (req.session.returnTo) {
    let newPath = req.session.returnTo;
    req.session.returnTo = "";
    res.redirect(newPath);
  } else {
    res.redirect("/course");
  }
});

module.exports = router;
