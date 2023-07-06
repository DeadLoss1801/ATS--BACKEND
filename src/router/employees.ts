import {
  create,
  deleteEmployee,
  getAllEmployees,
  updateEmployee,
} from "../controller/employee";
import express from "express";

export default (router: express.Router) => {
  router.get("/employee", getAllEmployees);
  router.post("/employee", create);
  router.patch("/employee", updateEmployee);
  router.delete("/employee", deleteEmployee);
};
