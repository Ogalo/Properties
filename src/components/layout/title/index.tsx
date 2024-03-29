import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";
import { logo, yariga } from 'Assests'

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={logo} alt="boma" width="28px" />
        ) : (
          <img src={yariga} alt="boma" width="140px" />
        )}
      </Link>
    </Button>
  );
};
