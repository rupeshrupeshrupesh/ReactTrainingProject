import React, { useEffect, useState } from "react";
import "./Action.css";

export type ActionProps = {
  onDelete: () => void;
  onEdit:()=>void;

};

const Action: React.FC<ActionProps> = (props) => {
  const [onCheck, setCheck] = useState(true);

  const showEditPage = () => {
    setCheck((prevValue) => !prevValue);
  };

  const onDeleteHandler = () => {
    setCheck(true);
    props.onDelete()
  };

  const onEditPageHandler=()=>{
    props.onEdit()

  }


  return (
    <>
      {onCheck && <button onClick={showEditPage}>Action </button>}
      {!onCheck && (
        <main>
          <button className="button-container" onClick={() => onEditPageHandler()}>Edit</button>
          <br />
          <button
            className="button-container"
            onClick={() => onDeleteHandler()}
          >
            Delete
          </button>
        </main>
      )}
    </>
  );
};
export default Action;

