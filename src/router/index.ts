import express from "express";

import employees from "./employees";
import employers from "./employer";
import interviewer from "./interviewer";

const router = express.Router();
export default (): express.Router => {
  employees(router);
  employers(router);
  interviewer(router);
  return router;
};
