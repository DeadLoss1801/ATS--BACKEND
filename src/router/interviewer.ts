import {
  createInterviewer,
  deleteInterviewerById,
  getAllInterviewers,
  getInterviewerById,
  updateInterviewerById,
} from "controller/interviewer";
import express from "express";

export default (router: express.Router) => {
  router.get("/", getAllInterviewers);
  router.post("/", createInterviewer);
  router.get("/:id", getInterviewerById);
  router.patch("/:id", updateInterviewerById);
  router.delete("/:id", deleteInterviewerById);
};
