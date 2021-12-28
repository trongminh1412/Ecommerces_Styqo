import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/dist/client/router';
import { userService } from 'services';
import Image from 'next/image';
import Link from 'next/link';
import { DotButton } from './button';
import useEmblaCarousel from 'embla-carousel-react';
import { mediaByIndex } from './image';
import {
  Container,
  Col,
  Row,
  Navbar,
  Nav,
  NavItem,
  Button,
  Input,
} from 'reactstrap';
const EmblaCarousel = ({ slides }) => {
  // login
  // const { data: session } = useSession();
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const subscription = userService.user.subscribe((x) => setUser(x));
    return () => subscription.unsubscribe();
  }, []);
  // slider
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on('select', onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__inner">
                  <Image
                    className="embla__slide__img"
                    src={mediaByIndex(index)}
                    alt="A cool cat."
                    layout="fill"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
        {user ? (
          <div></div>
        ) : (
          <div className="signin_block position-absolute">
            <Container>
              <div className="signin_block--title">
                <p>Sign in so we can personalize your experience</p>
              </div>
              <div className="signin_block--content">
                <Container>
                  <Row>
                    <Col md="6">
                      <Link href="/auth/register" className="text-danger">
                        Register
                      </Link>
                    </Col>
                    <Col md="6">
                      <Link href="/auth/login" className="text-danger">
                        Sign in
                      </Link>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Container>
          </div>
        )}
      </div>
    </>
  );
};

export default EmblaCarousel;
