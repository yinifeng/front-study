const express = require("express");

const router = express.Router();
//router实际上是一个中间件，可以在该中间件上去绑定各种路由以及其它的中间件
router.get("/list",(req,res) => {
    res.send("Hello 这是一个商品路由");
});

// CommonJs导出
module.exports = router;