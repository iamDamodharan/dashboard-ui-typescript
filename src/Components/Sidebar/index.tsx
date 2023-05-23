import React from 'react';
import * as Flex from './style';
import Logo from '../../images/logo512.png';

interface IProps {
    user?: any,
}

const Sidebar: React.FC<IProps> = (props: IProps) => {
    const { user } = props;
    const menu = [
        {
            id: 'dashboard',
            name: 'Dashboard',
            link: '/Dashboard'
        },
        {
            id: 'blog',
            name: 'Blog',
            link: '/blog'
        },
    ];
    return (
        <Flex.Container>
            <Flex.Menu className="menu" tabIndex={0}>
                <Flex.Avatar className="avatar">
                    <img alt="dp" src={Logo} />
                    <h2>Hello</h2>
                    <h2 data-testId="name">{user.name}</h2>
                </Flex.Avatar>
                <Flex.UL>
                    {menu.map(m => (<Flex.LI key={m.id} tabIndex={0} className="icon-dashboard"><span>{m.name}</span></Flex.LI>))}
                </Flex.UL>
            </Flex.Menu>
        </Flex.Container>
    )
}

export default Sidebar;