import {
  createEmployee,
  deleteEmployeeByEmail,
  getEmployeeByEmail,
  updateEmployeeByEmail,
  getEmployees,
} from "../db/employee";
import express from "express";

export const create = async (req: express.Request, res: express.Response) => {
  try {
    const employee = await createEmployee(req.body);
    return res.status(200).json(employee).end();
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({
        message: error,
      })
      .end();
  }
};

export const updateEmployee = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { email, values } = req.body;
    const updatedEmployee = await updateEmployeeByEmail(email, values);

    return res.status(200).json(updatedEmployee).end();
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({
        message: error,
      })
      .end();
  }
};

export const deleteEmployee = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { email, values } = req.body;
    const deletedEmployee = await deleteEmployeeByEmail(email);

    return res.status(200).json(deletedEmployee).end();
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({
        message: error,
      })
      .end();
  }
};

export const getEmployee = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { email } = req.body;
    const employee = await getEmployeeByEmail(email);

    return res.status(200).json(employee).end();
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({
        message: error,
      })
      .end();
  }
};

export const getAllEmployees = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const employees = await getEmployees();
    return res.status(200).json(employees).end();
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({
        message: error,
      })
      .end();
  }
};
