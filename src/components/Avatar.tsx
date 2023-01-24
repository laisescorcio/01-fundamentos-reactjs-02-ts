import styles from './Avatar.module.css';


// Typescript: definido a tipagem do AvatarProps porque estava dando erro no 'alt' de outro componente que chamava o componente Avatar

interface AvatarProps {
    hasBorder?: boolean; // 
    src: string;
    alt?: string;
}
// Typescript: quando há o ponto ? é porque é uma propriedade opcional. Exemplo: alt?:string
// dessa forma evita erro quando chamamos o componente Avatar em outro componente e não passamos uma dessas propriedades

// Typescript: para objeto não se define o tipo da informação separadamente, por isso foi criado o AvatarProps, englobando todas essas propriedades
export function Avatar({ hasBorder = true, src, alt }: AvatarProps) {
    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src}
            alt={alt}
        />
    )
}