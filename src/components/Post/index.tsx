import { FC, FormEvent, FormEventHandler, FormHTMLAttributes, InvalidEvent, TextareaHTMLAttributes, useMemo, useState } from "react";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { v4 as uuidV4 } from "uuid";

import { Post as PostData } from "../../utils/datas";

import { Avatar } from "../Avatar";
import { Comment } from "../Comment";

import styles from "./styles.module.css";

interface Data {
  data: PostData;
};

interface CommentData {
  id: string;
  comment: string;
  commenttedAt: Date;
}

export const Post: FC<Data> = ({ data }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<CommentData[]>([]);

  const isCommentEmpty = !comment || !comment.trim();

  async function handleSubmitComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setComments(oldComment => {
      return [
        ...oldComment, 
        { 
          id: uuidV4(),
          comment,
          commenttedAt: new Date()
        }
      ]
    });

    setComment("");
  }

  function handleCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório.");
  }

  async function handleDeleteComment(commentId: string) {
    const deletedComment = comments
      .filter(comment => comment.id !== commentId);

    setComments(deletedComment);
  }

  const datePublishFormatted = useMemo(() => {
    return format(data.publishAt, "d 'de' LLLL 'às' HH:mm'h'", {
      locale: ptBR
    });
  }, [data.publishAt]);

  const publishedDateRelativeToNow = useMemo(() => {
    return formatDistanceToNow(data.publishAt, {
      locale: ptBR,
      addSuffix: true
    });
  }, [data.publishAt]);

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={data.author.avatarUrl} bordered />

          <div className={styles.authorInfo}>
            <strong>{data.author.name}</strong>
            <span>{data.author.role}</span>
          </div>
        </div>

        <time   
          title={datePublishFormatted} 
          dateTime={data.publishAt.toISOString()}
        >
          Publicado {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {data.content.map(line => {
          if (line.type === "paragraph") {
            return (
              <p key={line.content}>{line.content}</p>
            )
          }

          if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            )
          }
        })}
      </div>

      <form 
        className={styles.commentForm} 
        onSubmit={handleSubmitComment}
      >
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder="Deixe seu comentário..."
          name="comment"
          required
          value={comment}
          onInvalid={handleCommentInvalid}
          onChange={event => {
            event.target.setCustomValidity("");
            setComment(event.target.value);
          }}
        />

        <footer>
          <button 
            type="submit"
            disabled={isCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => (
          <Comment 
            key={comment.id} 
            comment={comment.comment}
            commenttedAt={comment.commenttedAt}
            onDeleteComment={() => handleDeleteComment(comment.id)} 
          />
        ))}
      </div>
    </article>
  )
}