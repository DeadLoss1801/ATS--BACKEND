import {
  create,
  deleteEmployee,
  getAllEmployees,
  updateEmployee,
} from "../controller/employee";
import express from "express";

export default (router: express.Router) => {
  /**
   * @swagger
   * components:
   *   schemas:
   *     Employee:
   *       type: object
   *       required:
   *         - name
   *         - job_title
   *         - date_of_application
   *         - source_of_application
   *         - email
   *         - phone
   *         - currentLocation
   *         - preferredLocation
   *         - totalExperience
   *         - expected_ctc
   *         - notice_period
   *         - undergraduate_Degree
   *         - ug_specialization
   *         - gender
   *         - currentLocation
   *         - dob
   *
   *       properties:
   *          job_title:
   *            type: String
   *            description: Job Applied for
   *          date_of_application:
   *            type: String
   *            description: Date when Applied
   *          source_of_application:
   *            type: String
   *            description: Sources where saw the job application
   *          name:
   *            type: String
   *            description: Employee name
   *          email:
   *            type: String
   *            description: Email
   *          phone:
   *            type: String
   *            description: Contact Number
   *          currentLocation:
   *            type: String
   *            description: employee Current Location
   *          preferredLoction:
   *            type: String
   *            description: Location Prefferred for
   *          totalExperience:
   *            type: Number
   *            description: Total Experience
   *          relevantExperience:
   *            type: Number
   *            description: Relevant Experenice same as job you apply for
   *          reason_for_change:
   *            type: String
   *            description: Reason for changing Job
   *          current_company_name:
   *            type: String
   *            description: Current Company name
   *          current_company_designation:
   *            type: String
   *            description: Current company designation
   *          Department:
   *            type: String
   *            description:  Department Currently working on
   *          Role:
   *            type: String
   *            description:  Position at your previous company
   *          Industry:
   *            type: String
   *            description: Current Industry
   *          skills:
   *            type: array
   *            items:
   *              type: string
   *          ctc:
   *            type: Number
   *            description: current ctc
   *          expected_ctc:
   *            type: Number
   *            description: Expected Ctc from new company
   *          notice_period:
   *            type: String
   *            description: Notice period of current Company
   *          last_working_day:
   *            type: String
   *            description: last Working Date
   *          undergraduate_Degree:
   *            type: String
   *            description: UG Degree
   *          ug_specialization:
   *            type: String
   *            description: UG specialization
   *          postgraduation_degree:
   *            type: String
   *            description: PG Degree
   *          pg_specialization:
   *            type: String
   *            description: PG specialization
   *          gender:
   *            type: String
   *            description: Gender
   *            enum:
   *              - "male"
   *              - "female"
   *              - "other"
   *          martial_status:
   *            type: String
   *            enum:
   *              - "single"
   *              - "married"
   *              - "divorced"
   *              - "widowed"
   *          home_city:
   *            type: String
   *            description: Home city/ town
   *          dob:
   *            type: Date
   *            description: Date of Birth
   *
   */

  /**
   * @swagger
   * tags:
   *   name: Employee
   *   description: Employee API
   */
  /**
   * @swagger
   * /employee:
   *   get:
   *     summary: Returns the list of all employees
   *     tags: [Employee]
   *     responses:
   *       200:
   *         description: The list of the employees
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   */
  router.get("/employee", getAllEmployees);

  // /**
  //  * @swagger
  //  * /employee
  //  *  post:
  //  *    summary: to add the employee
  //  *    tags: [Employee]
  //  *    description: to add details of emplee
  //  *    responses:
  //  *      201:
  //  *
  //  */

  router.post("/employee", create);
  router.patch("/employee", updateEmployee);
  router.delete("/employee", deleteEmployee);
};
