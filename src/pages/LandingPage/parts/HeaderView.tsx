import React, {useState} from "react";
import styled from "styled-components";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useWindowSize} from "../../../hooks/useWindowSize";
import Button from "../../../components/Button";

const HeaderView: React.FC = () => {
    const windowSize = useWindowSize();
    const context = useDocusaurusContext();
    const siteConfig = context.siteConfig;

    const HeaderContent = () => {
        return (
            <Container>
                <Title>{siteConfig.title}</Title>
                <SubTitle>{siteConfig.tagline}</SubTitle>
                <Button to={useBaseUrl('docs/')}>Get Started</Button>
                <GithubButton
                    src="https://ghbtns.com/github-btn.html?user=agile-ts&amp;repo=agile&amp;type=star&amp;count=true&amp;size=large"
                    width={160}
                    height={30}
                    title="GitHub Stars"
                />
            </Container>
        );
    }


    // =======================================================================================================
    // Render
    // =======================================================================================================

    return (
        windowSize.windowWidth > 1300 ?
            <div>
                <img
                    src={"img/header_background.svg"}
                    alt={"Header Background"}
                />
                <ImageContent>
                    <HeaderContent/>
                </ImageContent>
            </div>
            :
            <div style={{backgroundColor: "#3F3D56"}} className={'hero hero--primary'}>
                <HeaderContent/>
            </div>
    );
}

export default HeaderView;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ImageContent = styled.div`
  position: absolute;
  top: 150px;
  left: 0;

  display: flex;
  flex-direction: column;

  width: 100%;

  text-align: center;
  justify-content: center;
  align-items: center;
`;

const GithubButton = styled.iframe`
  border: none;
  overflow: hidden;
  margin-top: 10px;
`;

const SubTitle = styled.p`
  font-weight: normal;
  font-size: 20px;
  color: #ffffff;
`;

const Title = styled.h1`
  color: #ffffff;
  font-weight: bold;
  font-size: 50px;
`;