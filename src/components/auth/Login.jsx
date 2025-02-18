import React, { useState, useEffect } from "react";
import {
  Typography,
  FormGroup,
  FormControl,
  TextField,
  styled,
  Button,
  Avatar,
  InputAdornment,
  IconButton,
  Grid,
  Box,
} from "@mui/material";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { deepOrange } from "@mui/material/colors";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../store/actions/authActions";
import Loading from "../layout/Loading";
import { toast } from "react-toastify";
import * as Yup from "yup"; // Yup is a JavaScript object schema validator.
import { useFormik } from "formik"; //formik is third party React form library. It provides basic form programming and validation
import { useDispatch, useSelector } from "react-redux";
import Logo1 from "../../Logo1.png";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({ showPassword: false });
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo } = userLogin;
  const initialValues = {
    email: "",
    password: "",
    recaptcha: "",
  };
  const schema = Yup.object({
    email: Yup.string("")
      .required("Email is required")
      .email("Enter a valid email!"),

    password: Yup.string("")
      // .min(8, 'The password must be at least 8 characters.')
      .required("Password is required"),
    // .matches(/^(?=(?:[^A-Z]*[A-Z]){1})(?=(?:[^0-9]*[0-9]){1})(?=(?:[^!@#$%^&*()_+|~\-=`{}\[\]:";'<>?,.\/]*[!@#$%^&*()_+|~\-=`{}\[\]:";'<>?,.\/]){1})[A-Za-z0-9!@#$%^&*()_+|~\-=`{}\[\]:";'<>?,.\/]{8}$/,"Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and a special characters!"),
  });
  //for inline validations via Yup and formik
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      onAdminLogin(values, resetForm);
    },
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const onAdminLogin = async (val) => {
    const postBody = {
      email: val.email,
      password: val.password,
    };
    // api call
    document.getElementById("submitting").innerText =
      "Logging User...Please wait";
    document.getElementById("submitting").disabled = true;
    dispatch(loginUser(postBody));
  };
  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    }
  }, [userInfo]);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        borderRadius: "10px",
      }}
    >
      <Grid container spacing={2} sx={{ maxWidth: "900px" }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundColor: "#2a74cb",
            paddingBottom: "20px",
            borderRadius: "10px",
          }}
        >
          <center>
            <h5 style={{ color: "white" }}>Matrix HR Technologies Pvt. Ltd.</h5>
            <img
              style={{ width: "300px", paddingTop: "30px" }}
              src={Logo1}
              alt="Logo"
            />
            <br />
            <br />
            <span style={{ color: "white" }}>
              Stewardship in Servicing clients with <br />
              Entrepreneurial attitude adding lots of Passion and <br />{" "}
              adopting Diversity to achieve Excellence.
            </span>
          </center>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundColor: "white",
            padding: "16px 16px 16px",
            borderRadius: "10px",
          }}
        >
          <h3>Company Login</h3>
          <Container>
            <Typography style={{ textAlign: "left" }}>
              <Ptags style={{ color: "#9c9390" }}>
                Sign In to your account
              </Ptags>
            </Typography>
            {loading && <Loading />}
            <form
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  formik.handleSubmit();
                }
              }}
            >
              <FormControl fullWidth>
                <TextField
                  value={formik.values.email}
                  required="required"
                  id="email"
                  name="email"
                  label={<EmailIcon />}
                  onChange={formik.handleChange}
                  inputProps={{ maxLength: 50 }}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  value={formik.values.password}
                  required="required"
                  id="password"
                  name="password"
                  label={<LockIcon />}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  type={values.showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
              <br />
              <FormControl fullWidth>
                <Buttons
                  variant="contained"
                  type="submit"
                  id="submitting"
                  onClick={formik.handleSubmit}
                >
                  Login
                </Buttons>
              </FormControl>
            </form>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
const Container = styled(FormGroup)`
  width: 100%;
  margin-top: 20px;
  & > div {
    margin-top: 10px;
  }
`;

const Buttons = styled(Button)`
  width: 100%;
  line-height: 3;
  background-color: #2a74cb;
`;

const Ptags = styled("p")`
  font-weight: 500;
  letter-spacing: -0.025em;
  color: #253992;
  line-height: 1.2;
`;
