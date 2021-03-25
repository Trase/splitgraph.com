/** @jsxImportSource @emotion/react */
// @ts-ignore
import { jsx } from "theme-ui";
import * as React from "react";

import { chevronDownIconURI } from "./cssSvgStrings";
import BaseIcon, { IIconProps } from "./BaseIcon";

const IconChevronDown = (props: IIconProps) => {
  return (
    <BaseIcon iconSlug={"chevronDown"} svgURI={chevronDownIconURI} {...props} />
  );
};

export default IconChevronDown;
