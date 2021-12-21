import React, { SyntheticEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Link from "next/link";
import Auth from "../../layouts/Auth";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import NavDropdown from "components/Dropdowns/navDropdown";
import axios from "axios";
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

export default function Register() {
  // form valid
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    acceptTerm: Yup.bool().oneOf([true], "Accept is required"),
  });

  const formOption = { resolver: yupResolver(validationSchema) };

  const { register, formState, reset, handleSubmit } = useForm(formOption);
  const { errors } = formState;

  //
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // hide/show password
  const [passwordShown, setPasswordShown] = useState(false);
  const PasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const [confirmPasswordShown, setconfirmPasswordShown] = useState(false);
  const ConfirmPasswordVisiblity = () => {
    setconfirmPasswordShown(confirmPasswordShown ? false : true);
  };
  const router = useRouter();
  const onSubmit = (data) => {
    axios
      .post("http://localhost:3000/auth/register", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    router.push("/auth/success");
  };

  return (
    <>
      <Container className="py-5">
        <Row>
          <Col className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto col_block--auth">
            <Card className="col_block--card p-2">
              <CardBody>
                <CardTitle className="pb-5">
                  <Image
                    src="/logo-ico.svg"
                    alt="7Hit Logo"
                    width={120}
                    height={50}
                  />
                  <div className="py-2 float-end">
                    <li className="d-inline-block">
                      <NavDropdown />
                    </li>
                  </div>
                  <h1 className="font-bold px-4 pt-3">Create an account</h1>
                </CardTitle>
                <CardSubtitle className="px-4">
                  <Form
                    className="form-default"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <FormGroup>
                      <Label className="text-right" for="fullName">
                        Full name
                      </Label>
                      <input
                        id="name"
                        name="fullName"
                        placeholder="Enter your fullname (Optional)"
                        type="text"
                        {...register("fullName", {
                          required: true,
                          maxLength: 10,
                        })}
                        className={`form-control ${
                          errors.fullName ? "is-invalid" : ""
                        }`}
                      />
                      <div className="invalid-feedback">
                        {errors.fullName?.message}
                      </div>
                    </FormGroup>
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
                      <i className="a" onClick={PasswordVisiblity}>
                        {eye}
                      </i>
                      <div className="invalid-feedback">
                        {errors.password?.message}
                      </div>
                    </FormGroup>
                    <FormGroup className="position-relative">
                      <Label className="text-right" for="repassword">
                        Password
                      </Label>
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Re-enter password"
                        type={confirmPasswordShown ? "text" : "password"}
                        {...register("confirmPassword")}
                        className={`form-control ${
                          errors.confirmPassword ? "is-invalid" : ""
                        }`}
                      />
                      <i className="a" onClick={ConfirmPasswordVisiblity}>
                        {eye}
                      </i>
                      <div className="invalid-feedback">
                        {errors.confirmPassword?.message}
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <input
                        name="acceptTerm"
                        type="checkbox"
                        {...register("acceptTerm", { required: true })}
                        id="acceptTerm"
                        className={`col-1  ${
                          errors.acceptTerm ? "is-invalid" : ""
                        }`}
                      />
                      <div className="col-11 d-inline-flex">
                        <span className="opacity-60 float-end text-regist">
                          By confirming this account, you agree to{" "}
                          <strong className="text-danger">7Hit.com </strong>
                          about{" "}
                          <strong className="text-danger">
                            Membership fee{" "}
                          </strong>
                          and{" "}
                          <strong className="text-danger">
                            Privacy policy{" "}
                          </strong>{" "}
                        </span>
                      </div>
                      <div className="invalid-feedback ps-4">
                        {errors.acceptTerm?.message}
                      </div>
                    </FormGroup>
                    <FormGroup className="pt-5">
                      <Button type="submit" block>
                        Sign Up
                      </Button>
                    </FormGroup>
                    <div className="pt-3 text-center">
                      <div className="text-reset opacity-60 fs-14 ">
                        Already have an account?{" "}
                        <span className="text-danger">
                          <Link href="/auth/login">Sign In</Link>
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

Register.layout = Auth;
