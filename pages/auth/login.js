import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Link from "next/link";
import Auth from "../../layouts/Auth";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import NavDropdown from "components/Dropdowns/navDropdown";
// import { signIn, SessionProvider, getCsrfToken } from "next-auth/react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

const eye = <FontAwesomeIcon icon={faEye} />;
const sleye = <FontAwesomeIcon icon={faEyeSlash} />;

export default function Login() {
  // form valid
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("No account exist with this email")
      .email("Email is invalid"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    acceptTerm: Yup.bool().oneOf([true], "Accept is required"),
  });

  const formOption = { resolver: yupResolver(validationSchema) };

  const { register, formState, reset, handleSubmit } = useForm(formOption);
  const { errors } = formState;

  // hide/show password
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const onSubmit = (data) => {
    // signIn(SessionProvider.id);
    console.log(data);
  };
  return (
    <>
      <Container className="py-5">
        <Row>
          <Col className="col-xl-4 col-lg-5 col-md-7 col-sm-9 mx-auto col_block--auth">
            <Card className="col_block--card p-2">
              <CardBody>
                <div className="py-2">
                  <li className="d-inline-block float-end">
                    <NavDropdown />
                  </li>
                </div>
                <CardTitle className="py-5">
                  <h1 className="font-bold">Welcome back to</h1>
                  <Image
                    src="/logo-ico.svg"
                    alt="7Hit Logo"
                    width={120}
                    height={50}
                  />
                </CardTitle>
                <CardSubtitle>
                  <Form
                    className="form-default"
                    onSubmit={handleSubmit(onSubmit)}
                    method="post"
                    action="/"
                  >
                    <FormGroup>
                      <Label for="Email">Email</Label>
                      <input
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", { required: true })}
                        className={`form-control  ${
                          errors.email ? "is-invalid" : ""
                        }`}
                      />
                      <div className="invalid-feedback">
                        {errors.email?.message}
                      </div>
                    </FormGroup>
                    <FormGroup className="position-relative">
                      <Label className="text-right" for="password">
                        Password
                      </Label>
                      <input
                        id="password"
                        name="password"
                        placeholder="At least 6 characters"
                        type={passwordShown ? "text" : "password"}
                        {...register("password", { required: true })}
                        className={`form-control ${
                          errors.password ? "is-invalid" : ""
                        }`}
                      />
                      <i className="a" onClick={togglePasswordVisiblity}>
                        {eye}
                      </i>
                      <div className="invalid-feedback">
                        {errors.password?.message}
                      </div>
                    </FormGroup>
                    <Row className="mb-2" lg="2">
                      <Col>
                        <FormGroup>
                          <input
                            name="acceptTerm"
                            type="checkbox"
                            {...register("acceptTerm", { required: true })}
                            id="acceptTerm"
                            className={`col-1  ${
                              errors.acceptTerm ? "is-invalid" : ""
                            }`}
                          />{" "}
                          <div className="d-inline-flex">Remember Me</div>
                          <div className="invalid-feedback">
                            {errors.acceptTerm?.message}
                          </div>
                        </FormGroup>
                      </Col>
                      <Col className="form-default--text">
                        <div className="text-reset opacity-60 fs-14 ">
                          <Link href="/auth/forgot_password">
                            Forgot Password
                          </Link>
                        </div>
                      </Col>
                    </Row>
                    <FormGroup className="pt-5">
                      <Button type="submit" block>
                        <Link href="/auth/success">Sign In</Link>
                      </Button>
                    </FormGroup>
                    <div className="pt-3 text-center">
                      <div className="text-reset opacity-60 fs-14">
                        Don`t have an account?{" "}
                        <span className="text-danger">
                          <Link href="/auth/register">Sign Up</Link>
                        </span>
                      </div>
                    </div>
                  </Form>
                </CardSubtitle>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
Login.layout = Auth;
