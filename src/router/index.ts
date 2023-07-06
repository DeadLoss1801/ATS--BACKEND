import express from "express";

import employees from "./employees";

const router = express.Router();
export default (): express.Router => {
  employees(router);

  return router;
};
