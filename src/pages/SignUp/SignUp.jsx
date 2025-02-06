import React from "react";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import MentorSignUp from "../../components/MentorSignUp/MentorSignUp";
import MemberSignUp from "../../components/MemberSignUp/MemberSignUp";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [alignment, setAlignment] = React.useState("member");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        className="mt-5"
        aria-label="Platform">
        <ToggleButton value="member">Member</ToggleButton>
        <ToggleButton value="mentor">Mentor</ToggleButton>
      </ToggleButtonGroup>

      <div className="mt-5 w-full">
        {
            alignment =='mentor'?
            (
                <MentorSignUp navigate={navigate}></MentorSignUp>
            ):
            (
                <MemberSignUp navigate={navigate}></MemberSignUp>
            )
        }
      </div>
    </div>
  );
};

export default SignUp;
