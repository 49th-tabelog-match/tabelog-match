import React, { useState, useEffect } from "react";
import { db } from "../firebase/index";
import firebase from "../firebase/index";
import Comment from "./RestaurantComment/Comment";

const RestaurantComment = () => {
  const [comments, setComments] = useState(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    db.collection("comments")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        const comments = snapshot.docs.map((doc) => {
          return {
            content: doc.data().content,
            timestamp: doc
              .data({ serverTimestamps: "estimate" })
              .timestamp.toDate(), //serverTimestampが作成途中の時は見積もり時間を返してくれる
            docid: doc.id, //<- keyを設定するためにidを所得
          };
        });
        setComments(comments);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let valueReplace = value.replace(/\s+/g, "");
    if (valueReplace === "") {
      alert("コメントを入力してください。");
      return;
    }
    db.collection("comments").add({
      content: value,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(), //<-new Date()だとそのパソコンの時刻が使われるのでズレる場合を考慮してサーバーサイドの時刻を追加する
      // user: user.displayName,
    });
    setValue("");
  };

  return (
    <>
      <h1>RestaurantComment</h1>
      <ul>
        {comments?.map((comment) => {
          // <- commentsの後の?はオプショナルチェイニング演算子といってcommentsがnullやundefinedであったとしても許容してくれる
          return <Comment comment={comment} key={comment.docid} />; //commentsのひとつ一つの要素を使ってcommentコンポーネントを表示 propsにcommentを渡す。keyにはfirebaseのdocidをつかう
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          placeholder="コメントを入力"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">送信</button>
      </form>
    </>
  );
};

export default RestaurantComment;
