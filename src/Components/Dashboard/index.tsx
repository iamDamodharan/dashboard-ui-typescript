import React from "react";
import * as Flex from './style';

interface IProps {
    user?: any,
}

const Dashboard = (props: IProps) => {
    const { user } = props;
    return (
        <Flex.Container>
            <h1>Dashboard</h1>
            <Flex.FlexRow>
                <Flex.wrapper>
                    <h2>{user.name}</h2>
                    <h4><span>Username: </span>{user.username}</h4>
                    <h4><span>Email: </span>{user.email}</h4>
                    <h4><span>Phone: </span>{user.phone}</h4>
                    <h4><span>Website: </span>{user.website}</h4>
                </Flex.wrapper>
                <Flex.wrapper>
                    <h2>{'Company'}</h2>
                    <h4><span>{user.company.name}</span></h4>
                    <h4><span>{user.company.catchPhrase}</span></h4>
                    <h4><span>{user.company.bs}</span></h4>
                </Flex.wrapper>
            </Flex.FlexRow>
        </Flex.Container>
    )
}

export default Dashboard;