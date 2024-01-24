import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import Navbar from "../navbar/navbar";


const DashboardDiv= styled(Box)`
  height:200vh;
  min-width:99%;
  border:1px solid blue;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

const ProductDiv = styled(Box)`
height:50%;
width:55%;
display:flex;
border:1px solid red;
margin-top:50px;
`;
const ProductImageDiv = styled(Box)`
height:100%;
width:35%;
border:1px solid blue;
`;

function Dashboard(){
    return(<>
    <Navbar />
    <DashboardDiv>
        <ProductDiv>
            <ProductImageDiv>
                <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg" style={{height:"300px"}}/>
            </ProductImageDiv>
        </ProductDiv>
        <ProductDiv></ProductDiv>
        <ProductDiv></ProductDiv>
        <ProductDiv></ProductDiv>
        
    </DashboardDiv>
    </>);
}

export default Dashboard;