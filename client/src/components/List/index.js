import React from 'react';
import { List as ListAntd, Avatar } from 'antd';

import { ListHeading, StyledList } from './styles';

function List(props) {
    return (
        <StyledList>
            <ListHeading>Active Users</ListHeading>
            <ListAntd
                itemLayout="horizontal"
                dataSource={props.users}
                renderItem={user => (
                    <ListAntd.Item>
                        <ListAntd.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href="https://ant.design">{user.username}</a>}
                        />
                    </ListAntd.Item>
                )}
            />
        </StyledList>
    );
}

export default List;
