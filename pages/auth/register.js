import React, { SyntheticEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Link from 'next/link';
import Image from 'next/image';
import LanguageDropdown from 'components/Dropdown/Language';
import { userService } from 'services';
import { Layout } from 'components/account';
import { AiOutlineEye } from 'react-icons/ai';
import axios from 'axios';
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
} from 'reactstrap';

export default function Register() {
  // form valid
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    acceptTerm: Yup.bool().oneOf([true], 'Accept is required'),
  });

  const formOption = { resolver: yupResolver(validationSchema) };

  const { register, formState, handleSubmit } = useForm(formOption);
  const { errors } = formState;
  // hide/show password
  const [passwordShown, setPasswordShown] = useState(false);
  const PasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const [confirmPasswordShown, setconfirmPasswordShown] = useState(false);
  const ConfirmPasswordVisibility = () => {
    setconfirmPasswordShown(confirmPasswordShown ? false : true);
  };
  const router = useRouter();
  function onSubmit(user) {
    return userService
      .register(user)
      .then(() => {
        router.push('/auth/success');
      })
      .catch(() => {
        router.push('/auth/register');
      });
  }

  return (
    <>
      <Layout>
        {' '}
        <div className="bg-background-auth">
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
                          <LanguageDropdown />
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
                          <Label className="text-right" for="username">
                            Full name
                          </Label>
                          <input
                            id="name"
                            name="username"
                            placeholder="Enter your fullname (Optional)"
                            type="text"
                            {...register('username', {
                              required: true,
                              maxLength: 10,
                            })}
                            className={`form-control ${
                              errors.username ? 'is-invalid' : ''
                            }`}
                          />
                          <div className="invalid-feedback">
                            {errors.username?.message}
                          </div>
                        </FormGroup>
                        <FormGroup>
                          <Label for="Email">Email</Label>
                          <input
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            type="email"
                            {...register('email', { required: true })}
                            className={`form-control  ${
                              errors.email ? 'is-invalid' : ''
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
                            type={passwordShown ? 'text' : 'password'}
                            {...register('password', { required: true })}
                            className={`form-control ${
                              errors.password ? 'is-invalid' : ''
                            }`}
                          />
                          <i className="a" onClick={PasswordVisibility}>
                            <AiOutlineEye />
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
                            type={confirmPasswordShown ? 'text' : 'password'}
                            {...register('confirmPassword')}
                            className={`form-control ${
                              errors.confirmPassword ? 'is-invalid' : ''
                            }`}
                          />
                          <i className="a" onClick={ConfirmPasswordVisibility}>
                            <AiOutlineEye />
                          </i>
                          <div className="invalid-feedback">
                            {errors.confirmPassword?.message}
                          </div>
                        </FormGroup>
                        <FormGroup>
                          <input
                            name="acceptTerm"
                            type="checkbox"
                            {...register('acceptTerm', { required: true })}
                            id="acceptTerm"
                            className={`col-1  ${
                              errors.acceptTerm ? 'is-invalid' : ''
                            }`}
                          />
                          <div className="col-11 d-inline-flex">
                            <span className="opacity-60 float-end text-regist">
                              By confirming this account, you agree to{' '}
                              <strong className="text-danger">7Hit.com </strong>
                              about{' '}
                              <strong className="text-danger">
                                Membership fee{' '}
                              </strong>
                              and{' '}
                              <strong className="text-danger">
                                Privacy policy{' '}
                              </strong>{' '}
                            </span>
                          </div>
                          <div className="invalid-feedback ps-4">
                            {errors.acceptTerm?.message}
                          </div>
                        </FormGroup>
                        <FormGroup className="pt-5">
                          <Button
                            type="submit"
                            block
                            disabled={formState.isSubmitting}
                          >
                            {formState.isSubmitting && (
                              <span className="spinner-border spinner-border-sm mr-1"></span>
                            )}
                            Sign Up
                          </Button>
                        </FormGroup>
                        <div className="pt-3 text-center">
                          <div className="text-reset opacity-60 fs-14 ">
                            Already have an account?{' '}
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
        </div>
      </Layout>
    </>
  );
}
