import { Trash, ThumbsUp } from 'phosphor-react'
import { useState } from 'react';
import { Avatar } from './Avatar'
import styles from './Comment.module.css'


// Typescript: Sobre o onDeleteComment é feita uma definicao de uma propriedade que é uma função () =>
// e é definido o return dela. Como essa função não retorna nada, é usado o void
// e a funcao onDeleteComment recebe um parametro, que é um comentário, que por sua vez é uma string (comment: string)
interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void
}

// Typescript: para objeto não se define o tipo da informação separadamente, por isso foi criado o CommentProps, englobando todas essas propriedades
export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })
    }

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://avatars.githubusercontent.com/u/61030205?v=4' alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Roberto Guerra</strong>
                            <time title="11 de Maio às 08h13" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
                        </div>

                        <button
                            onClick={handleDeleteComment}
                            title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button
                        onClick={handleLikeComment}
                    >
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}