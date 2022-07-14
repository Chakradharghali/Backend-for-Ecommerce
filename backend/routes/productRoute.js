const express = require("express");
const { getAllProducts , createProduct, updateProduct, deleteProduct, getProductDetails, createProductReview, getProductReviews, deleteReview} = require("../controllers/productController");
const { isAuthenticatedUser , authoriseRoles } = require("../middleware/auth");
const router = express.Router();


router.route("/products").get(getAllProducts);

router.route("/product/new").post(isAuthenticatedUser,authoriseRoles("admin"),createProduct);

router.route("/product/:id").put(isAuthenticatedUser,authoriseRoles("admin"),updateProduct).delete(isAuthenticatedUser,authoriseRoles("admin"),deleteProduct);

router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuthenticatedUser,createProductReview);

router.route("/reviews").get(getProductReviews).delete(isAuthenticatedUser,deleteReview);

module.exports = router