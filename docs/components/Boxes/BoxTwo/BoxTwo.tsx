// @jsx jsx
// @ts-ignore
import { jsx } from "theme-ui";
import * as React from "react";

import { GenericBox, IGenericBoxProps } from "../GenericBox";

export interface IBoxTwoProps extends IGenericBoxProps {}

const BoxTwo = (props: IBoxTwoProps) => {
  return <GenericBox classNames="box-2" {...props} />;
};

export default BoxTwo;
