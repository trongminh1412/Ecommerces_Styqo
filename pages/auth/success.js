import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
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

export default function Success() {
  return (
    <>
      <div className="bg-background-auth">
        <Container className="py-5">
          <div className="text-center pb-5">
            <h1 className="fw-bold">Verify Your Email</h1>
            <h6 className="fw-bold">
              Congratulations, you have successfully created an account.
              <br />
              Please verify your email so that you can conveniently access,
              purchase and receive promotions on{' '}
              <strong className="text-danger">7Hit.</strong>{' '}
            </h6>
          </div>
          <Row className="pt-5">
            <Col className="col-7">
              <div>
                When you <strong>become</strong>{' '}
                <strong className="text-danger">7Hit`s </strong>
                <strong>user</strong>, you will receive:
              </div>
              <div>
                <strong>• Discounts and promotions every day</strong>
              </div>
              <div>
                <strong>• Flash sale up to 40%</strong>
              </div>
              <div>
                <strong>• Deliver to 160 countries</strong>
              </div>
              <div>
                <strong>• Free shipping from only 1 item </strong>
              </div>
              <div>
                <strong>• 100% Money Back Guarantee - 30 Days Returns</strong>
              </div>
              <div className="pt-5">
                Also, congratulations on becoming{' '}
                <strong className="text-danger">7Hit </strong>
                <strong>Partner</strong> in the{' '}
                <strong className="text-danger">7Hit </strong>
                <strong>Affiliate Program</strong> You can{' '}
                <strong>earn money</strong> with{' '}
                <strong className="text-danger">7Hit </strong> by{' '}
                <strong>sharing product links</strong> or{' '}
                <strong>doing simple tasks</strong> on{' '}
                <strong className="text-danger">7Hit.com </strong>
              </div>
              <Button className="bg-danger mt-5">
                <Link href="/">Back to Homepage</Link>
              </Button>
            </Col>
            <Col className="col-5">
              <div>
                <Image
                  src="/login/success.png"
                  alt="7Hit Logo"
                  width={473}
                  height={409}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
