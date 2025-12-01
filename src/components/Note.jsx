import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <IconButton
        onClick={handleClick}
        aria-label="delete"
        sx={{
          color: "#f97316",
          backgroundColor: "rgba(249, 115, 22, 0.1)",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "#f97316",
            color: "#fff",
            transform: "scale(1.1)",
          },
        }}
      >
        <DeleteOutlineIcon />
      </IconButton>
    </div>
  );
}

export default Note;
