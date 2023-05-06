const express = require("express");
const router = express.Router();
let User = require("../modules/User.model");

//Login
router.route("/login").post((req, res) => {
  const Email = req.body.Email;
  const Password = req.body.Password;
  User.find({Email:Email,Password:Password})
    .then((User) => {
      res.json(User);
    })
    .catch((errr) => {
      console.log(err);
    });
});

//Create
router.route("/add").post((req, res) => {
  const Email = req.body.Email;
  const Password = req.body.Password;

  const newUser = new User({

    Email,
    Password,
  });

  newUser
    .save()
    .then(() => {
      res.json("User Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//Read
router.route("/").get((req, res) => {
  User.find()
    .then((User) => {
      res.json(User);
    })
    .catch((errr) => {
      console.log(err);
    });
});

//Update
router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;
  const { Password, Email } = req.body;

  const updateUser = {
  
    Password,
    Email,
  };

  const update = await User.findByIdAndUpdate(userId, updateUser)
    .then(() => {
      res.status(200).send({ status: "User update", User: update });
    })
    .catch(() => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
});

//Delete
router.route("delete/:id").delete(async (req, res) => {
  let UserId = req.params.id;

  await User.findByIdAndDelete(UserId)
    .then(() => {
      res.status(200).send({ status: "User Deleted" });
    })
    .catch((errr) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete user", error: err.message });
    });
});

//Get By ID
router.route("/get/id").get(async (req, res) => {
  let UserId = req.params.id;
  const User = await User.findById(UserId)
    .then(() => {
      res.status(200).send({ status: "User fetched" });
    })
    .catch(() => {
      consol.log(err.message),
        res
          .status(500)
          .send({ status: "Error with get User", error: err.message });
    });
});

module.exports = router;
