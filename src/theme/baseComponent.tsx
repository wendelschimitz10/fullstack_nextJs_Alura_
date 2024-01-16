import React from "react";
import styled from 'styled-components'
import { StyleSheet } from "@src/theme/styleSheet";
import { parseStyleSheet } from "@displaykit/responsive_styles";

interface IStyledBaseComponent {
  styleSheet?: StyleSheet;
}

const StyledBaseComponent = styled.div<IStyledBaseComponent>`
  ${({ styleSheet }) => parseStyleSheet(styleSheet)}
`;

export const BaseComponent = (props) => {
  return (
    <StyledBaseComponent {...props}/>
  )
}

BaseComponent.defaultProps = {
  styleSheet: {},
}