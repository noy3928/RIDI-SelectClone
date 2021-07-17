import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  box-sizing: border-box;
  display: ${(props) => props.display ? `display : ${props.display};` : "flex"};
  flex-direction: ${(props) =>
    props.flex_direction === "column" ? "column" : "row"};
  ${(props) => (props.border ? `border: ${props.border};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100%")};
  align-items: ${(props) => (props.align ? props.align : "center")};
  justify-content: ${(props) =>
    props.justify_contents ? props.justify_contents : "flex-start"};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.is_root ? `width: 100vw; height: 100vh;` : "")}
    ${(props) => (props.color ? `color:${props.color};` : "")}
  ${(props) => (props.textAlign ? `text-align: center;` : "")}
  ${(props) => (props.maxHeight ? `max-height: ${props.maxHeight};` : "")}
  ${(props) => (props.maxWidth ? `max-width: ${props.maxWidth};` : "")}
`;

const Image = styled.img`
width: ${(props) => (props.width ? props.width : "100%")};
min-width: 50px;
height: ${(props) => (props.height ? props.height : "100%")};
${(props) => (props.maxHeight ? `max-height: ${props.maxHeight};` : "")}
${(props) => (props.maxWidth ? `max-width: ${props.maxWidth};` : "")}
`

const Button = styled.button`
box-sizing: border-box;
flex-direction: ${(props) =>
    props.flex_direction === "column" ? "column" : "row"};
${(props) => (props.border ? `border: ${props.border};` : "")}
${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
width: ${(props) => (props.width ? props.width : "100%")};
height: ${(props) => (props.height ? props.height : "100%")};
align-items: ${(props) => (props.align ? props.align : "center")};
justify-content: ${(props) =>
    props.justify_contents ? props.justify_contents : "flex-start"};
${(props) => (props.margin ? `margin: ${props.margin};` : "")}
${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.color ? `color:${props.color};` : "")}
${(props) => (props.textAlign ? `text-align: center;` : "")}
${(props) => (props.maxHeight ? `max-height: ${props.maxHeight};` : "")}
${(props) => (props.maxWidth ? `max-width: ${props.maxWidth};` : "")}
${(props) => (props.border ? `border: ${props.border};` : "")}
${(props) => (props.borderRadius ? `border-radius: ${props.borderRadius};` : "")}
${(props) => (props.pointer ? `cursor: pointer;` : "")}
${(props) => (props.fontSize ? `font-size:${props.fontSize};` : "")}
${(props) => (props.fontWeight ? `font-weight:${props.fontWeight};` : "")}
`

const Text = (props) => {
  if (props.type === "title") {
    return <H1>{props.children}</H1>;
  }

  if (props.type === "contents") {
    return <P>{props.children}</P>;
  }

  if (props.type === "label") {
    return <Span>{props.children}</Span>;
  }

  return <React.Fragment>{props.children}</React.Fragment>;
};

const H1 = styled.h1`
  margin: 0px;
  font-size: 1.5em;
  text-align: center;
  ${(props) => (props.bold ? `font-weight: bold;` : "")}
`;

const P = styled.p`
  ${(props) => (props.margin ? `margin:${props.margin};` : "margin: 0px")}
  ${(props) => (props.color ? `margin:${props.color};` : "")}
  ${(props) => (props.fontSize ? `font-size:${props.fontSize};` : "")}
`;

const Span = styled.span`
  margin: 0px;
  font-size: 0.4em;
  color: #888;
  font-family: "PoppinsR";
`;

// input 스타일!
// const InputC = styled.input`
//   width: ${(props) => (props.width ? props.width : "100%")};
//   border: ${(props) => (props.border ? props.border : "none;")};
//   padding: 2px 4px;
//   ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
// `;

const A = styled.a`
 padding: 6px 4px 12px;
 border-bottom: ${(props) => props.borderBottom ? `1px solid #828990;` : ""}
`

export { Grid, Text, Image, Button, A };