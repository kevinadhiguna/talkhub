import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message';
import { StyledMessages } from './styles';

function Messages(props) {
    const { messages, username } = props;
    
    return(
        <StyledMessages>
            <ScrollToBottom>
                {
                    messages.map((message, i) => {
                        <div key={i}>
                            <Message
                                message={message}
                                username={username}
                            />
                        </div>
                    })
                }
            </ScrollToBottom>
        </StyledMessages>
    );
}

export default Messages;
