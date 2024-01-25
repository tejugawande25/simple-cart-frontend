import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import { Button } from "@mui/material";

const DashboardDiv = styled(Box)`
  height: 200vh;
  min-width: 99%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductDiv = styled(Box)`
  height: 50%;
  width: 55%;
  display: flex;
  margin-top: 50px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;
const ProductImageDiv = styled(Box)`
  height: 100%;
  width: 35%;
`;
const DescriptionDiv = styled(Box)`
  height: 100%;
  width: 65%;
  display: flex;
  flex-direction: column;
`;
const HeadingDiv = styled(Box)`
  height: 25%;
  width: 100%;
  display: flex;
`;
const ULDiv = styled(Box)`
  height: 50%;
`;
const PricingDiv = styled(Box)`
  height: 25%;
  font-size: 26px;
  font-weight: 600;
  display: flex;
  gap: 50px;
  flex-direction: row;
  align-items: center;
`;

const AddCartButton = styled(Button)`
  color: black;
  background: #e5e8ff;
  padding: 0;
  margin: 0;
  width: 50px;
`;
const SubCartButton = styled(Button)`
  color: black;
  background: #e5e8ff;
  padding: 0;
  margin: 0;
  width: 50px;
`;
const ShowQuantity = styled(Box)`
 height:27px;
 width:60px;
 border-radius:4px;
 border:1px solid black;
`;

const products = [
  {
    // id :'1',
    src: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
    heading: "Apple iphone 14",
    ram: "128 GB ROM",
    display: "15.49 cm (6.1 inch) Super Retina XDR Display",
    camera: "12MP + 12MP | 12MP Front-Camera",
    processor: "A15 Bionic Chip, 6 Core Processor",
    NA: "NA",
    price: "₹ 57,999/-",
  },
  {
    id: "2",
    src: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
    heading: "Apple iphone 14",
    ram: "128 GB ROM",
    display: "15.49 cm (6.1 inch) Super Retina XDR Display",
    camera: "12MP + 12MP | 12MP Front-Camera",
    processor: "A15 Bionic Chip, 6 Core Processor",
    NA: "NA",
    price: "₹ 57,999/-",
  },
  {
    id: "3",
    src: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
    heading: "Apple iphone 14",
    ram: "128 GB ROM",
    display: "15.49 cm (6.1 inch) Super Retina XDR Display",
    camera: "12MP + 12MP | 12MP Front-Camera",
    processor: "A15 Bionic Chip, 6 Core Processor",
    NA: "NA",
    price: "₹ 57,999/-",
  },
  {
    id: "4",
    src: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
    heading: "Apple iphone 14",
    ram: "128 GB ROM",
    display: "15.49 cm (6.1 inch) Super Retina XDR Display",
    camera: "12MP + 12MP | 12MP Front-Camera",
    processor: "A15 Bionic Chip, 6 Core Processor",
    NA: "NA",
    price: "₹ 57,999/-",
  },
  {
    id: "5",
    src: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
    heading: "Apple iphone 14",
    ram: "128 GB ROM",
    display: "15.49 cm (6.1 inch) Super Retina XDR Display",
    camera: "12MP + 12MP | 12MP Front-Camera",
    processor: "A15 Bionic Chip, 6 Core Processor",
    NA: "NA",
    price: "₹ 57,999/-",
  },
  {
    id: "6",
    src: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
    heading: "Apple iphone 14",
    ram: "128 GB ROM",
    display: "15.49 cm (6.1 inch) Super Retina XDR Display",
    camera: "12MP + 12MP | 12MP Front-Camera",
    processor: "A15 Bionic Chip, 6 Core Processor",
    NA: "NA",
    price: "₹ 57,999/-",
  },
];

function Dashboard({ price }) {
  const [add, setAdd] = useState(0);
  const[cardProduct, setCardProduct] = useState([]);

  const handleAdd = (id) => {
   setAdd(add + 1);
  };

  const totaPrice = () =>{
    
  }
  return (
    <>
      <Navbar />
      <DashboardDiv>
        {products.map((product, id) => {
          return (
            <ProductDiv>
              <ProductImageDiv>
                <img src={product.src} style={{ height: "300px" }} />
              </ProductImageDiv>
              <DescriptionDiv>
                <HeadingDiv>
                  <h2
                    style={{
                      marginLeft: "25px",
                      fontFamily: "Roboto,Arial,sans-serif",
                      color: "#FFBF00",
                    }}
                  >
                    {product.heading}
                  </h2>
                </HeadingDiv>
                <ULDiv>
                  <ul
                    style={{
                      fontFamily: "Roboto,Arial,sans-serif",
                      fontSize: "16px",
                      lineHeight: "25px",
                    }}
                  >
                    <li>{product.ram}</li>
                    <li>{product.display}</li>
                    <li>{product.camera}</li>
                    <li>{product.processor}</li>
                    <li>{product.NA}</li>
                  </ul>
                </ULDiv>
                <PricingDiv>
                  <span style={{ marginLeft: "25px" }} value={price}>
                    {product.price}
                  </span>
                  <AddCartButton
                    sx={{ fontSize: "18px", fontWeight: "600" }}
                    onClick={handleAdd}
                    value={add}
                  >
                    +
                  </AddCartButton>
                  <SubCartButton
                    sx={{ fontSize: "18px", fontWeight: "600" }}
                   
                  >
                    -
                  </SubCartButton>
                  <ShowQuantity >
                   {add} 
                  </ShowQuantity>
                </PricingDiv>
              </DescriptionDiv>
            </ProductDiv>
          );
        })}
        <ProductDiv></ProductDiv>
        <ProductDiv></ProductDiv>
        <ProductDiv></ProductDiv>
      </DashboardDiv>
    </>
  );
}

export default Dashboard;
