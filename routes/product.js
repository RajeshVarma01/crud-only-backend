import { Router } from "express";
import { postproduct_new, updateStudentController, deleteproduct_delete, getproduct_all } from "../controllers/productController.js";

const route = Router()
route.post("/product", postproduct_new);
route.get("/productget", getproduct_all);
route.get("/:productId");
route.put("/productupdate/:id", updateStudentController);
route.delete("/product/:email", deleteproduct_delete); 

export default route