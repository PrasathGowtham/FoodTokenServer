const { Router } = require("express");
const express = require("express");
const router = express(Router);
const saveorder = require("../modules/tokenmodules")

router.post("/token",saveorder.saverOrder);

router.get("/count",saveorder.Ordercount)
router.get("/token",saveorder.Orderlist);
router.post("/signup",saveorder.usersingnup);
router.post("/signin",saveorder.signin);

module.exports=router;