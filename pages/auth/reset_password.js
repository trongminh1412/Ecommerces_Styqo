import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Link from "next/link";
import Auth from "../../layouts/Auth";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
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

export default function Reset_password() {
  // form valid
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formOption = { resolver: yupResolver(validationSchema) };

  const { register, formState, reset, handleSubmit } = useForm(formOption);
  const { errors } = formState;

  // hide/show password
  const [passwordShown, setPasswordShown] = useState(false);
  const PasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const [confirmPasswordShown, setconfirmPasswordShown] = useState(false);
  const ConfirmPasswordVisiblity = () => {
    setconfirmPasswordShown(confirmPasswordShown ? false : true);
  };

  //submit
  const router = useRouter();
  const onSubmit = (data) => router.push("/auth/login");
  return (
    <>
      <Container className="py-5">
        <Row>
          <Col className="col-xl-4 col-lg-5 col-md-7 col-sm-9 mx-auto col_block--auth">
            <Card className="col_block--card p-2">
              <CardBody>
                <CardTitle className="pb-5">
                  <Image
                    src="/logo-ico.svg"
                    alt="7Hit Logo"
                    width={120}
                    height={50}
                  />
                  <h1 className="font-bold pt-4">Reset Password</h1>
                </CardTitle>
                <CardSubtitle>
                  <Form
                    className="form-default"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <FormGroup className="position-relative">
                      <Label className="text-right" for="password">
                        New password
                      </Label>
                      <input
                        id="password"
                        name="password"
                        placeholder="Enter your new password"
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
                        Confirm new password
                      </Label>
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Re-enter your new password"
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
                    <FormGroup className="pt-5">
                      <Button type="submit" block>
                        Save update
                      </Button>
                    </FormGroup>
                    <div className="pt-3 text-center">
                      <div className="text-reset opacity-60 fs-14">
                        Back to{" "}
                        <span className="text-danger">
                          <Link href="/auth/login">login</Link>
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

Reset_password.layout = Auth;
