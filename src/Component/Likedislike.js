import React from "react";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect } from "react";
import { API } from "./Global";


export function Likedislike({id, deleteButton, editButton }) {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
 
  return (
    <div className="icons">
      <div>
      <IconButton
        aria-label="Like Button"
        color="primary"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        <Badge badgeContent={like} color="success">
        👍
        </Badge>
      </IconButton>

      <IconButton
        aria-label="DisLike Button"
        color="error"
        onClick={() => {
          setDisLike(disLike + 1);
        }}
      >
        <Badge badgeContent={disLike} color="error">
          👎{" "}
        </Badge>
      </IconButton>
    </div>
    
    <div className="edit-delete">
    {deleteButton} {editButton}

    {/* <IconButton aria-label="delete"
    color="error"
    onClick={()=>{
     fetch(`${API}/movies/${mv.id}`, {
      method: "DELETE",
    })
     
}}>
  <DeleteIcon />
</IconButton>
<IconButton aria-label="delete"
>
<EditIcon />
</IconButton> */}
    </div> 
    
    </div>

  );
}
