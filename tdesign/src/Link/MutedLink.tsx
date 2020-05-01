// @jsx jsx
import * as React from 'react';

import Link, { LinkProps } from './Link';

export default ({ children, href, ...rest }: LinkProps) => (
  <Link variant="links.muted" href={href} {...rest}>
    {children}
  </Link>
);
