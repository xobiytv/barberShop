import React from 'react'
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";


export default function ProfelNav() {
  return (
    <div>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 , background:'none'}}
        // elevation={3} 
        
      >
        <div className='ml-5 mr-5 mb-5 bg-none'>
          <Link to={'/'}
            variant="primary"
            type="Submit"
            className="bg-[#FB9400] w-full mt-5 text-center rounded-3xl text-white text-xl py-2 hover:scale-105 duration-300"
          >
            Book New
          </Link>
        </div>
      </Paper>
    </div>
  );
}
