const express= require("express");
const router = express.Router();

router.get("/" , (req,res)=> {
  res.json({msg:"animals api work !"})
})

module.exports = router;