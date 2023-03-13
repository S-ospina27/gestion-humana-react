import * as React from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#2759cd",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#c4c4c4",
    },
    "&:hover fieldset": {
      borderColor: "#2759cd",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#2759cd",
    },
  },
});

function TexfilledCss({ label, type, disabled, value, required, readOnly }) {
  return (
    <CssTextField
      fullWidth
      label={label}
      type={type}
      disabled={disabled}
      required={required}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      autoComplete={"off"}
      InputProps={{
        readOnly: readOnly,
      }}
    />
  );
}

export default TexfilledCss;
