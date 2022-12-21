import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Navigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import "./CustomForm.css";

export const CustomForm = (props) => {
  const { FormAttributes } = props;
  const textFields = FormAttributes.TextFields;
  const [navigate, setNavigate] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let result = {};
    textFields.forEach((element) => {
      result[element.name] = data.get(element.name);
    });
    props.setData(result);
  };
  return (
    <Container component="main" maxWidth="s" className="custom-form-container">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {FormAttributes.formType}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {textFields?.length > 0 &&
            textFields.map((textfield, idx) => {
              return (
                <TextField
                  key={idx}
                  margin="normal"
                  required
                  fullWidth
                  id={textfield.id}
                  label={textfield.label}
                  name={textfield.name}
                  type={textfield.type}
                  autoComplete={textfield.autoComplete}
                  autoFocus
                />
              );
            })}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {FormAttributes.submitLabel}
          </Button>
          {FormAttributes?.navigateLabel !== "" && (
            <Grid container>
              <Grid item>
                {navigate && <Navigate to={FormAttributes.navigate} />}
                <Link href="" variant="body2" onClick={() => setNavigate(true)}>
                  {`${FormAttributes.navigateLabel}`}
                </Link>
              </Grid>
            </Grid>
          )}
        </Box>
      </Box>
    </Container>
  );
};
