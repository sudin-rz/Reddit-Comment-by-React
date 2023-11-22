
import React, { useState } from 'react';

interface Comment {
  text: string;
  replies?: Comment[];
}

const CommentComponent: React.FC<Comment> = ({ text, replies }) => {
  const [showReplies, setShowReplies] = useState(false);

  return (
    <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
      <div>{text}</div>
      {replies && replies.length > 0 && (
        <button onClick={() => setShowReplies(!showReplies)}>
          {showReplies ? 'Hide Replies' : 'Show Replies'}
        </button>
      )}
      {showReplies &&
        replies?.map((reply, index) => (
          <CommentComponent key={index} text={reply.text} replies={reply.replies} />
        ))}
    </div>
  );
};

const CommentApp: React.FC = () => {
  const comments: Comment[] = [
    {
      text: 'This is reply 1',
      replies: [
        {
          text: 'This is reply to reply 1',
        },
        {
          text: 'This is another reply to reply 1',
          replies: [
            {
              text: 'This is reply to second reply of reply 1',
            },
          ],
        },
      ],
    },
    {
      text: 'This is reply 2',
    },
  ];

  return (
    <div>
      <h1>Reddit-like Comment System</h1>
      {comments.map((comment, index) => (
        <CommentComponent key={index} text={comment.text} replies={comment.replies} />
      ))}
    </div>
  );
};

export default CommentApp;
