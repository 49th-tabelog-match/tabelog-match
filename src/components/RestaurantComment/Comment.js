import Avatar from "@material-ui/core/Avatar";

const Comment = ({ comment }) => {
  const formatTime = `${comment.timestamp.getFullYear()}/${
    comment.timestamp.getMonth() + 1
  }/${comment.timestamp.getDate()} ${comment.timestamp.getHours()}:${comment.timestamp.getMinutes()}`;
  // 秒数をいれるなら、${comment.timestamp.getSeconds()}
  return (
    <li className="list">
      {/* <span>（ユーザー名）</span> */}
      <div className="avaterbox">
        <Avatar alt="icon" src="/static/images/avatar/1.jpg" />
      </div>
      <div className="chat">
        <span className="p-chat">{comment.content}</span>
      </div>
      <div className="date-and-time">
        <span>{formatTime}</span>
      </div>
    </li>
  );
};

export default Comment;
