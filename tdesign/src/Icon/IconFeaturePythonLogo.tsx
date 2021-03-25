/** @jsxImportSource @emotion/react */
// @ts-ignore
import { jsx } from "theme-ui";
import * as React from "react";

import { featurePythonLogoIconURI } from "./cssSvgStrings";
import BaseIcon, { IIconProps } from "./BaseIcon";

const IconFeaturePythonLogo = (props: IIconProps) => {
  return (
    <BaseIcon
      iconSlug={"featurePythonLogo"}
      svgURI={featurePythonLogoIconURI}
      {...props}
    />
  );
};

export default IconFeaturePythonLogo;
