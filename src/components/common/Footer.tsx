import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const FooterWrapper = styled.footer`
  display: grid;
  place-items: center;
  margin-top: auto;
  margin-bottom: 70px;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      I Deal With A Service That Provides Sports News To Everyone
      <br />
      Thank You for Visiting My Blog, Have a Good Day 😆
      <br />© 2023 Developer Yoo, Made By Gatsby.
    </FooterWrapper>
  );
};

export default Footer;
