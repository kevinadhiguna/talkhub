import React from 'react';
import styled from 'styled-components';
import {List, Avatar} from 'antd';

function List(props) {
    return(
        <StyledList>
            <ListHeading>Active Users</ListHeading>
            <List
                itemLayout="horizontal"
                dataSource={props.users}
                renderItem={user => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href="https://ant.design">{user.username}</a>}
                        />
                    </List.Item>
                )}
            />
        </StyledList>
    );
}

export default List;
