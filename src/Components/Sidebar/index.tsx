import React, { useState } from "react";
import * as Flex from "./style";
import Logo from "../../images/logo512.png";

interface IProps {
  user?: any;
  onMenuClick?: Function;
}

const Sidebar = (props: IProps) => {
  const { user, onMenuClick } = props;
  const [page, setPage] = useState('/dashboard');
  const menu = [
    {
      id: "dashboard",
      name: "Dashboard",
      link: "/Dashboard",
    },
    {
      id: "blog",
      name: "Blog",
      link: "/blog",
    },
  ];
  const onLinkClick = (e?: any, m?: any) => {
    setPage(m.link);
    if (onMenuClick) onMenuClick(e, m);
  };
  return (
    <Flex.Container>
      <Flex.Menu className="menu" tabIndex={0}>
        <Flex.Avatar className="avatar">
          <img alt="dp" src={Logo} />
          <h2>Hello</h2>
          <h2 data-testId="name">{user.name}</h2>
        </Flex.Avatar>
        <Flex.UL>
          {menu.map((m) => (
            <Flex.LI
              key={m.id}
              tabIndex={0}
              className={`${page === m.link ? 'active' : ''}`}
              onClick={(e) => onLinkClick(e, m)}
            >
              <span>{m.name}</span>
            </Flex.LI>
          ))}
        </Flex.UL>
      </Flex.Menu>
    </Flex.Container>
  );
};

export default Sidebar;
