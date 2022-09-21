const express = require("express");

const userRouter = require("./user_router");
const beverageRouter = require("./beverage_router");

const router = express.Router();

router.use("/users", userRouter);
router.use("/beverages", beverageRouter);

module.exports = router;
