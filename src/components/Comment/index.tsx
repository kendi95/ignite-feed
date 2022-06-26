import { ThumbsUp, Trash } from "phosphor-react";
import { FC, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Avatar } from "../Avatar";

import styles from "./styles.module.css";

interface Props {
  onDeleteComment?: () => void;
  comment: string;
  commenttedAt: Date;
}

export const Comment: FC<Props> = ({ 
  onDeleteComment, 
  comment, 
  commenttedAt 
}) => {
  const [likes, setLikes] = useState(0);

  const commentedRelativeToNow = formatDistanceToNow(commenttedAt, {
    locale: ptBR,
    addSuffix: true
  });

  function handleLike() {
    setLikes(oldLikes => oldLikes + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/kendi95.png" small />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Alisson Kendi Kohatsu</strong>
              <time dateTime={commenttedAt.toISOString()}>
                {commentedRelativeToNow}
              </time>
            </div>

            <button 
              type="button" 
              title="Deletar comentário"
              onClick={onDeleteComment}
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{comment}</p>
        </div>

        <footer>
          <button type="button" onClick={handleLike}>
            <ThumbsUp />
            Aplaudir <span>{likes}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}