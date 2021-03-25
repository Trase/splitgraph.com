/** @jsxImportSource @emotion/react */
// @ts-ignore
import { jsx } from "theme-ui";
import * as React from "react";

import { emailIconURI } from "./cssSvgStrings";
import BaseIcon, { IIconProps } from "./BaseIcon";

const IconEmail = (props: IIconProps) => {
  return <BaseIcon iconSlug={"email"} svgURI={emailIconURI} {...props} />;
};

export default IconEmail;
