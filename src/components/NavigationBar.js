import React from "react";

import { Anchor } from "antd";
const { Link } = Anchor;

const NavigationBar = (props) => {
  return (
    <div>
      <Anchor className="nav">
        <Link href="/#markdown" title="Markdown Generator" />
        <Link href="/#syntax" title="Useful Syntax" />
      </Anchor>
    </div>
  );
};

export default NavigationBar;
