import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import styles from './Post.module.css'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'

// Typescript: foi criado o Author pois a prop author é um objeto 
// que contém propriedades que também dever ser tipadas (assim como o author como um todo) e que está em outro arquivo, por isso o ts não teria como saber
interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link'; // Typescript: é uma string porém são dois tipos de string, ou uma ou outra, assim não permitirá utilizar outra opção de string
    content: string;
}

export interface PostProps {
    id?: number;
    author: Author;
    publishedAt: Date;
    content: Content[]; // Typescript: definimos o Content anteriormente e ele é um array
}

// Typescript: para objeto não se define o tipo da informação separadamente, por isso foi criado o PostProps, englobando todas essas propriedades
export function Post({ author, publishedAt, content }: PostProps) {
    const [comments, setComments] = useState([
        'Post muito legal!'
    ])

    const [newCommentText, setNewCommentText] = useState('') // inicializar o estado com a mesma tipagem seja texto vazio, array vazio, etc

    // formatar data em extenso, exemplo: 20 de agosto às 20:00h
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH'h'mm", {
        locale: ptBR
    })

    // compara a data de publicação com a data atual e adiciona o sufix 'há', exemplo: há 8 dias
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    // Typescript: para usar o event dentro de uma função ele deve estar no parametro dessa função
    // E no parametro, definir a tipagem do event avisando que é um evento de determinado elemento
    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault() //previne o default de que no clique o usuário seja redirecionado

        //imutabilidade
        setComments([...comments, newCommentText]) //spread: insere comentários anteriores, lenght: confere o numero de itens que ja existia e adiciona mais um
        setNewCommentText('') // depois de criar o novo comentário, a textarea ficará em branco novamente
    }
    // Typescript: neste caso temos que sinalizar em que elemento está o onChange do qual ele pegou o evento: do textarea (HTML)
    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity(''); // necessário setar para retirar o erro de validação
        setNewCommentText(event.target.value);
    }

    // Sobre a próxima função de Deletar Comentário:
    // imutabilidade => as variaveis não se modificam, elas são criadas de novo => melhor para performance
    // ou seja, o comentárionão foi removido. Apenas criamos um novo array SEM o comentário 'excluído'. 
    // Assim o React não precisa utilizar a memória.
    // Typescript: definimos que é uma string, o comentário que vamos deletar
    function deleteComment(commentToDelete: string) {
        const commentWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete // retornar lista com os comentários diferentes do comentario que eu deletei => gerei nova lista sem o comentário deletado
        })
        setComments(commentWithoutDeletedOne)
    }

    // Typescript: neste caso temos que sinalizar em que elemento está o onInvalid do qual ele pegou o evento: do textarea (HTML)
    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Este campo é obrigatório!') // necessário setar para retornar erro de validação
    }

    const isNewCommentEmpty = newCommentText.length === 0 // quando não há conteúdo de comentário o botão fica desabilitado

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time
                    title={publishedDateFormatted}
                    // formato, exemplo: 2022-08-03T23:00:00.000Z
                    dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="">{line.content}</a></p>
                    }
                })}
            </div>

            <form
                onSubmit={handleCreateNewComment}
                className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>

                <textarea
                    name="comment"
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}