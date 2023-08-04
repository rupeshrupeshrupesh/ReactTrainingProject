import React, { useState } from "react";
import { DataModel, UpdatDataModel } from "../Models/EmployeDataModel";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import "./EditPage.css";
import { type } from "@testing-library/user-event/dist/type";

type EditPageProps = {
  initialValues: DataModel;
  onCancel: () => void;
  onUpdate:(value:DataModel) => void;
};

const EditPage: React.FC<EditPageProps> = (props) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    city: Yup.string().required("City is required"),
    MobileNumber: Yup.number()
      .required("Mobile number is required")
      .positive("Mobile number must be positive")
      .integer("Mobile number must be an integer"),
  });

  // const [updateData, setUpdate] = useState<DataModel | null>(null);

  const onSubmit = (values: DataModel) => {
    // Assuming you have some logic to add the new employee to the list
    // For example, you can use setEmployeeData([...employeeData, values]);
    // setUpdate(values);
    props.onUpdate(values);
    // console.log(values);
  };
  return (
    <>
      <main className="form-center-container">
        <Formik
          initialValues={props.initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="form-container">
            {" "}
            {/* Use the new class */}
            <div className="form-field">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <Field className="form-input" type="text" id="name" name="name" />
              <ErrorMessage
                className="form-error"
                name="name"
                component="div"
              />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="city">
                City
              </label>
              <Field className="form-input" type="text" id="city" name="city" />
              <ErrorMessage
                className="form-error"
                name="city"
                component="div"
              />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="MobileNumber">
                Mobile Number
              </label>
              <Field
                className="form-input"
                type="number"
                id="MobileNumber"
                name="MobileNumber"
              />
              <ErrorMessage
                className="form-error"
                name="MobileNumber"
                component="div"
              />
            </div>
            <button
              className="form-button form-submit-button"
              style={{ paddingLeft: "10px", marginRight: "10px" }} // Add marginRight to create a gap
              type="submit"
            >
              Edit Employee
            </button>
            <button onClick={props.onCancel}>Cancel</button>
          </Form>
        </Formik>{" "}
      </main>
    </>
  );
};
export default EditPage;
