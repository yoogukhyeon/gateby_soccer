import React, { FunctionComponent, ReactNode } from 'react';
import styled from '@emotion/styled';
import GlobalStyle from 'components/common/Globalstyle';
import Footer from 'components/common/Footer';
import { Helmet } from 'react-helmet';
import TenpingFixed from 'components/tenping/TenpingFixed';

type TemplateProps = {
  title: string;
  description: string;
  url: string;
  image: string;
  children: ReactNode;
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Template: FunctionComponent<TemplateProps> = function ({ title, description, url, image, children }) {
  return (
    <Container>
      <Helmet>
        <title>{title}</title>
        <meta name="google-site-verification" content="LyKV5XqH5LxkNQ9d3YUtbrDEmauUZg3oOX1dd4yTU04" />
        <meta name="naver-site-verification" content="0332db52157a6d6b538ce58954313a0785a4a3a7" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content="축구 분석, 실시간 분석, 축구 소식, 축구 실시간 소식, 축구 블로그, 축구 분석 블로그" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@yoogukhyeon" />
        <meta name="twitter:creator" content="@yoogukhyeon" />

        <html lang="ko" />
        <link rel="shortcut icon" href="favicon.png" />
        <link rel="apple-touch-icon-precomposed" href="apple-touch-icon.png" />
        <link rel="canonical" href="https://soccer.everyday-365.com" />
      </Helmet>

      <GlobalStyle />
      {children}
      <FixedAdfitWrap>
        <TenpingFixed />
      </FixedAdfitWrap>
      <Footer />
    </Container>
  );
};

const FixedAdfitWrap = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: -17px;
  width: 100%;
  max-width: 1068px;
  text-align: center;
`;
export default Template;
