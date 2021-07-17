import React from "react";
import styled from "styled-components";
import Color from "./Color";

// Text
const Text = (props) => {
  if (props.type === "bookName") {
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
  ${(props) => (props.margin ? `margin:${props.margin};` : "")}
  ${(props) => (props.color ? `margin:${props.color};` : "")}
  font-size: 1em;
`;

const Span = styled.span`
  margin: 0px;
  font-size: 0.4em;
  color: #888;
  font-family: "PoppinsR";
`;


//Input
const Input = (props) => {
  const {
    multiLine,
    boxShadow,
    borderRadius,
    width,
    height,
    value,
    _onChange,
    _onClick,
    placeholder,
    type,
    border,
    borderBottom,
    margin,
    padding, } = props;

  const styles = {
    boxShadow: boxShadow,
    borderRadius: borderRadius,
    width: width,
    height: height,
    onChange: _onChange,
    onClick: _onClick,
    placeholder,
    type,
    value,
    border,
    margin,
    borderBottom,
    padding,
  };

  if (multiLine) {
    return <ElTextarea {...styles} />;
  } else {
    return <ElInput {...styles} />;
  }
}

Input.defaultProps = {
  multiLine: false,
  value: "",
  placeholder: "",
  disabled: false,
  type: "text",
  _onChange: () => { },
  _onClick: () => { },
  border: "none",
  borderBottom: false,
};

const ElInput = styled.input`
  font-size: 15px;
  box-sizing: border-box;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "50px")};
  border: 0.5px solid ${Color.borderGray};
  padding: 14px 18px;
  margin: ${(props) => props.margin};
  &:focus,
  &:active {
    outline: none;
  }
  border-radius: ${({ borderRadius }) => borderRadius};
`;

const ElTextarea = styled.textarea`
  box-sizing: border-box;
  letter-spacing: -0.05em;
  word-spacing: -0.2em;
  min-height: 112px;
  padding: 12px 15px;
  font-size: 13px;
  font-weight: bold;
  width: 100%;
  height: 47px;
  resize: none;
  color: ${Color.borderGray};
  border: 2px solid ${Color.borderGray};
  border-radius: 5px;
  &:focus,
  &:active {
    outline: none;
  }
`;

// Login, Signup - LogoImage
const LogoImage = styled.div`
  background-image: url("${(props) => props.src}");
  background-size: contain;
  background-repeat: no-repeat;
  width: 90px;
  height: 15px;
  resize: both;
`;

// Button
const Button = (props) => {
  const {
    borderColor,
    bgColor,
    color,
    margin,
    padding,
    width,
    children,
    _onClick,
  } = props;

  const styles = {
    borderColor: borderColor,
    bgColor: bgColor,
    color: color,
    margin: margin,
    padding: padding,
    width: width,
  };


  return (
    <BasicBtn {...styles} onClick={_onClick}>
      {children}
    </BasicBtn>
  );

};

Button.defaultProps = {
  _onClick: () => { },
  circle: false,
  margin: "0px",
  width: "50%",
  padding: "1em",
  color: "black",
};

const BasicBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: 50px;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid;
  border-color: ${({ borderColor }) => borderColor};
  box-sizing: border-box;
  font-weight: 700;
  font-size: 15px;
  line-height: 1em;
`;

export { Text, Input, LogoImage, Button };
