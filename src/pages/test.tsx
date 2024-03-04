import React, { useState, useEffect } from "react";
import { PageProps } from "gatsby";
import Layout from "../components/Layout";
import "../styles/global.scss";
import styled from "styled-components";
//@ts-ignore
import offerBackground from "../images/offers_elements/background.png";

const ParentDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const LeftDiv = styled.div`
    width: 20%;
    margin-left: 6%;
    background-color: lightblue; /* Just for demonstration */
`;

const RightDiv = styled.div`
    width: 80%;
    height: auto;
    margin-right: 6%;
    background-color: red;
`;

const DivLayout = () => {
    return (
        <Layout>
            <ParentDiv>
                <LeftDiv>Left Div</LeftDiv>
                <RightDiv>Right Div</RightDiv>
            </ParentDiv>
        </Layout>
    );
};

export default DivLayout;