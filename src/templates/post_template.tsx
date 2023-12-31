import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Template from 'components/common/Template';
import PostHead from 'components/post/PostHead';
import { PostFrontmatterType } from 'types/postItem.types';
import PostContent from 'components/post/PostContent';
import CommentWidget from 'components/post/CommentWidget';
import styled from '@emotion/styled';
import TenpingTop from 'components/tenping/TenpingTop';
import TenpingMiddle from 'components/tenping/TenpingMiddle';
import TenpingBootom from 'components/tenping/TenpingBootom';

type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[];
    };
  };
  location: {
    href: string;
  };
};

export type PostPageItemType = {
  node: {
    html: string;
    frontmatter: PostFrontmatterType;
  };
};

const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
  location: { href },
}) {
  const {
    node: {
      html,
      frontmatter: {
        title,
        summary,
        date,
        categories,
        thumbnail: {
          childImageSharp: { gatsbyImageData },
          publicURL,
        },
      },
    },
  } = edges[0];

  return (
    <Template title={title} description={summary} url={href} image={publicURL}>
      <PostHead title={title} date={date} categories={categories} thumbnail={gatsbyImageData} />
      <KakaoAdfitWrap>
        <TenpingTop />
      </KakaoAdfitWrap>
      <PostContent html={html} />
      <KakaoAdfitWrap>
        <TenpingMiddle />
      </KakaoAdfitWrap>
      <CommentWidget />
      <KakaoAdfitWrap type={true}>
        <TenpingBootom />
      </KakaoAdfitWrap>
    </Template>
  );
};
const KakaoAdfitWrap = styled.div<{ type?: boolean }>`
  text-align: center;
  width: 100%;
  max-width: 1068px;
  margin: ${({ type }) => (type ? '0' : '30px')} auto 0;
`;
export default PostTemplate;

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
              publicURL
            }
          }
        }
      }
    }
  }
`;
