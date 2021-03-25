/** @jsxImportSource @emotion/react */
// @ts-ignore
import { jsx } from "theme-ui";
import * as React from "react";

import { postgresLogoIconURI } from "./cssSvgStrings";
import BaseIcon, { IIconProps } from "./BaseIcon";

const IconPostgresLogo = (props: IIconProps) => {
  return (
    <BaseIcon
      iconSlug={"postgresLogo"}
      svgURI={postgresLogoIconURI}
      {...props}
    />
  );
};

export default IconPostgresLogo;
