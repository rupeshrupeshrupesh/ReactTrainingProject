import { useEffect, useState } from "react";
import Action from "../Button/ActionButton";
import { DataModel } from "../Models/EmployeDataModel";
import "./Employee.css";
// import Edit from "../EditFucntion";
import EditPage from "../EditFucntion/EditPage";
import AddEmpl from "../AddEmployee/AddEmployee";

const DUMMY_DATA: DataModel[] = [
  {
    id: "1",
    name: "Rupesh Dafare",
    city: "Nagpur",
    MobileNumber: 9988774455,
    companyName: "Thinkitive",
    rating: "A",
    office: "Teerth",
  },
  {
    id: "2 ",
    name: "Prasad Athvle",
    city: "Pune",
    MobileNumber: 9988774455,
    companyName: "Thinkitive",
    rating: "A",
    office: "Teerth",
  },
  {
    id: "3",
    name: "Omkar Revankar",
    city: "Sangli",
    MobileNumber: 9988774455,
    companyName: "Thinkitive",
    rating: "A",
    office: "Abil",
  },
  {
    id: "4",
    name: "Abhijeet Sawant",
    city: "Pimpri",
    MobileNumber: 9988774455,
    companyName: "Thinkitive",
    rating: "A",
    office: "Teerth",
  },
  {
    id: "5",
    name: "Sneha Tahrnhekar",
    city: "Nagpur",
    MobileNumber: 9988774455,
    companyName: "Thinkitive",
    rating: "A",
    office: "Teerth",
  },
  {
    id: "6",
    name: "Prajkta More",
    city: "AhilyaDevi",
    MobileNumber: 9988774455,
    companyName: "Thinkitive",
    rating: "A",
    office: "Abil",
  },
];

// export type PropsData={

// }

const Employee: React.FC = (props) => {
  const [data, setData] = useState<DataModel[]>(DUMMY_DATA);
  const [editEmployee, setEditEmployee] = useState<DataModel | null>(null);
  const [addemployee, setEmployee] = useState(true);

  const deleteItem = (item: number) => {
    const updatedData = [...data];
    updatedData.splice(item, 1);
    setData(updatedData);
  };

  const editItem = (index: number) => {
    setEditEmployee(data[index]);
  };

  const updateHandler = (value: DataModel) => {
    // Find the index of the item with the matching id
    const index = data.findIndex((item) => item.id === value.id);

    // If the id is found (index !== -1), update the data at that index
    if (index !== -1) {
      const updatedData = [...data];
      updatedData[index] = value;
      setData(updatedData);
    } else {
      // If the id is not found, add the new DataModel to the data array
      setData((prevData) => [...prevData, value]);
    }
    setEditEmployee(null);
  };

  const setNewAddHAndler = () => {
    setEmployee(false);
  };
  const addEmployeeHandler = (value: DataModel) => {
    setData((prevData) => [...prevData, value]);
    setEditEmployee(null);
    setEmployee(true)

  };

  return (
    <>
      <main>
        {!editEmployee && addemployee && (
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>City</td>
                <td>PhoneNumber</td>
                <td>Company</td>
                <td>Rating</td>
                <td>Office</td>
                <td>Action</td>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.city}</td>
                  <td>{item.MobileNumber}</td>
                  <td>{item.companyName}</td>
                  <td>{item.rating}</td>
                  <td>{item.office}</td>
                  <td>
                    <Action
                      onDelete={() => deleteItem(index)}
                      onEdit={() => editItem(index)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "10vh",
          }}
        >
          {addemployee && (
            <button onClick={setNewAddHAndler}>Add Employee</button>
          )}
        </div>
        {editEmployee && (
          <EditPage
            onCancel={() => setEditEmployee(null)}
            initialValues={editEmployee}
            onUpdate={(value) => updateHandler(value)}
          ></EditPage>
        )}
        {!addemployee && (
          <AddEmpl
            onAddEmployee={(value) => addEmployeeHandler(value)}
          ></AddEmpl>
        )}
      </main>
    </>
  );
};
export default Employee;
