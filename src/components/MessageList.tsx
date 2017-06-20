import * as React from 'react';

interface Props {
  // eslint-disable-next-line
  responses: Array<any>;
}

function MessageList({ responses }: Props) {
  const listMessages = responses.map((message, i) => <li key={i}>{message}</li>);
  return (
    <ul>{listMessages}</ul>
  );
}

export default MessageList;