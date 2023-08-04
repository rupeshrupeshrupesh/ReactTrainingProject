import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./empl.css";
import { DataModel } from "../Models/EmployeDataModel";

export type propsData={
    onAddEmployee:(value:DataModel)=>void
}
const AddEmpl: React.FC<propsData> = (props) => {
  const initialValues = {
    id: "",
    name: "",
    city: "",
    MobileNumber: "",
    companyName: "",
    rating: "",
    office: "",
  };

  const handleSubmit = (value: any) => {
    props.onAddEmployee(value);
  };

  const validationSchema = Yup.object().shape({
    id: Yup.string().required("ID is required"),
    name: Yup.string().required("Name is required"),
    city: Yup.string().required("City is required"),
    MobileNumber: Yup.number().required("Mobile Number is required"),
    companyName: Yup.string().required("Company Name is required"),
    rating: Yup.string().required("Rating is required"),
    office: Yup.string().required("Office is required"),
  });
  return (
    <>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-field">
                <label htmlFor="id" className="form-label">
                  ID:
                </label>
                <Field type="text" name="id" className="form-input" />
                <ErrorMessage
                  className="form-error"
                  name="id"
                  component="div"
                />
              </div>

              <div className="form-field">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <Field type="text" name="name" className="form-input" />
                <ErrorMessage
                  className="form-error"
                  name="name"
                  component="div"
                />
              </div>

              <div className="form-field">
                <label htmlFor="city" className="form-label">
                  City:
                </label>
                <Field type="text" name="city" className="form-input" />
                <ErrorMessage
                  className="form-error"
                  name="city"
                  component="div"
                />
              </div>

              <div className="form-field">
                <label htmlFor="MobileNumber" className="form-label">
                  Mobile Number:
                </label>
                <Field
                  type="number"
                  name="MobileNumber"
                  className="form-input"
                />
                <ErrorMessage
                  className="form-error"
                  name="MobileNumber"
                  component="div"
                />
              </div>

              <div className="form-field">
                <label htmlFor="companyName" className="form-label">
                  Company Name:
                </label>
                <Field type="text" name="companyName" className="form-input" />
                <ErrorMessage
                  className="form-error"
                  name="companyName"
                  component="div"
                />
              </div>

              <div className="form-field">
                <label htmlFor="rating" className="form-label">
                  Rating:
                </label>
                <Field type="text" name="rating" className="form-input" />
                <ErrorMessage
                  className="form-error"
                  name="rating"
                  component="div"
                />
              </div>

              <div className="form-field">
                <label htmlFor="office" className="form-label">
                  Office:
                </label>
                <Field type="text" name="office" className="form-input" />
                <ErrorMessage
                  className="form-error"
                  name="office"
                  component="div"
                />
              </div>

              <button
                className="form-button"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </main>
    </>
  );
};
export default AddEmpl;
