import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Link from 'next/link';
import Image from 'next/image';
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

export default function Forgot_password() {
  // form valid
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
  });

  const formOption = { resolver: yupResolver(validationSchema) };

  const { register, formState, reset, handleSubmit } = useForm(formOption);
  const { errors } = formState;
  const router = useRouter();
  const onSubmit = (data) => router.push('/auth/otp');
  return (
    <>
      <div className="bg-background-auth">
        <Container className="py-5">
          <Row>
            <Col className="col-xl-4 col-lg-5 col-md-7 col-sm-9 mx-auto col_block--auth">
              <Card className="col_block--card p-2">
                <CardBody>
                  <CardTitle>
                    <Image
                      src="/logo-ico.svg"
                      alt="7Hit Logo"
                      width={120}
                      height={50}
                    />
                    <h1 className="font-bold pt-4">Forgot password?</h1>
                  </CardTitle>
                  <CardText tag="h6" className="title pb-5 pt-3">
                    Don’t worry! it happens. Please enter the email associated
                    with your account.
                  </CardText>
                  <CardSubtitle>
                    <Form
                      className="form-default"
                      onSubmit={handleSubmit(onSubmit)}
                    >
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
                      <FormGroup className="pt-5">
                        <Button type="submit" block>
                          Submit
                        </Button>
                      </FormGroup>
                      <div className="pt-3 text-center">
                        <div className="text-reset opacity-60 fs-14">
                          Back to{' '}
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
      </div>
    </>
  );
}

Forgot_password.layout = Auth;
