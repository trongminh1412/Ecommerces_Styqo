import React, { useState } from 'react';
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

export default function OTP() {
  // form valid
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
  });

  const formOption = { resolver: yupResolver(validationSchema) };

  const { register, formState, reset, handleSubmit } = useForm(formOption);
  const { errors } = formState;

  //OTP

  const router = useRouter();
  const onSubmit = (data) => router.push('/auth/reset_password');
  return (
    <>
      {' '}
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
                    <h1 className="font-bold pt-4">Enter OTP</h1>
                  </CardTitle>
                  <CardText tag="h6" className="title pb-5 pt-3">
                    Please enter the 4 digit code we has been sent to
                    ng********ieu@gmail.com.
                  </CardText>
                  <CardSubtitle>
                    <Form
                      className="form-default"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <FormGroup>
                        <div className="text-end fs-6 text-danger pb-2">
                          <Link href="/auth/reset_password">Re-send Code</Link>
                        </div>
                        <div className="d-flex otp">
                          <input type="text" maxLength={1} />
                          <input type="text" maxLength={1} />
                          <input type="text" maxLength={1} />
                          <input type="text" maxLength={1} />
                        </div>
                      </FormGroup>
                      <FormGroup className="pt-5">
                        <Button type="submit" block>
                          <Link href="/auth/reset_password">Continue</Link>
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

OTP.layout = Auth;
