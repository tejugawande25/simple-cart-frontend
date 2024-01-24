import styled from "@emotion/styled";
import { Box} from "@mui/material";
import React from "react";
import Navbar from "../navbar/navbar";
import { Button } from '@mui/material';

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
margin-top:50px;
`;
const ProductImageDiv = styled(Box)`
height:100%;
width:35%;
border:1px solid blue;
`;
const DescriptionDiv = styled(Box)`
height:100%;
width:65%;
border:1px solid green;
display:flex;
flex-direction:column;

`;
const HeadingDiv = styled(Box)`
height:25%;
width:100%;
border:1px solid black;
display:flex;
`;
const ULDiv = styled(Box)`
height:50%;
border:1px solid black;
`; 
const PricingDiv = styled(Box)`
height:25%;
font-size:26px;
font-weight:600;
display:flex;

flex-direction:row;
align-items:center;
`;

const AddCartButton = styled(Button)`
border:1px solid red;
color:black;
padding:0;
margin:0;
width:50px;
`;
function Dashboard(){
    return(<>
    <Navbar />
    <DashboardDiv>
        <ProductDiv>
            <ProductImageDiv>
                <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg" style={{height:"300px"}}/>
            </ProductImageDiv>
            <DescriptionDiv>
                <HeadingDiv>
                   <h2 style={{marginLeft:"25px",fontFamily:"Roboto,Arial,sans-serif",color:"#FFBF00"}}>Apple iPhone 14 (Midnight, 128 GB)</h2>
                </HeadingDiv>
                <ULDiv>
                    <ul style={{fontFamily:"Roboto,Arial,sans-serif", fontSize:"16px",lineHeight:"25px"}}>
                        <li>128 GB ROM</li>
                        <li>15.49 cm (6.1 inch) Super Retina XDR Display</li>
                        <li>12MP + 12MP | 12MP Front-Camera</li>
                        <li>A15 Bionic Chip, 6 Core Processor</li>
                        <li>NA</li>
                    </ul>
                </ULDiv>
                <PricingDiv>
                 <span style={{marginLeft:"25px"}}>₹ 57,999/-</span>
                 <AddCartButton sx={{fontSize:"15px"}}>+</AddCartButton>
                </PricingDiv>
                
            </DescriptionDiv>
            
        </ProductDiv>
        <ProductDiv></ProductDiv>
        <ProductDiv></ProductDiv>
        <ProductDiv></ProductDiv>
        
    </DashboardDiv>
    </>);
}

export default Dashboard;