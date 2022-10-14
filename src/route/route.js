const express = require("express")
const router = express.Router()
const controllers = require("../controllers/userController")
const productController = require("../controllers/productController")
const mid = require("../middleware/auth")






router.post("/register",controllers.createUser)
router.post("/login",controllers.loginUser)
router.get("/user/:userId/profile",mid.authenticate,controllers.getUserProfile)
router.put("/user/:userId/profile",mid.authenticate,mid.authorisation,controllers.updateProfile)
router.post("/products",productController.createProduct)
router.get("/products", productController.getProduct)
router.put("/products/:productId", productController.updateProduct)

module.exports = router