import {
  createEmployer,
  getAllEmployers,
  getEmployerById,
  updateEmployerById,
} from "controller/employer";
import express from "express";

export default (router: express.Router) => {
  router.get("/", getAllEmployers);
  router.post("/", createEmployer);
  router.get("/:id", getEmployerById);
  router.patch("/:id", updateEmployerById);
  //   router.delete("/:id", delel);
};
