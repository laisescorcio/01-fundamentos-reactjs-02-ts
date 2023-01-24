import { ImgHTMLAttributes } from 'react'; // Typescript: elemento para ser possivel utilizar todos os atributos originais da tag HTML (no caso, img)
import styles from './Avatar.module.css';


// Typescript: definido a tipagem do AvatarProps porque estava dando erro no 'alt' de outro componente que chamava o componente Avatar
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> { // Typescript: o 'extends' usa-se quando usamos propriedades novas e as propriedades originais da tag e define que tag está utilizando (no caso, img)
    hasBorder?: boolean; // Typescript: podemos usar agora o hasBorder e todos os outros atributos da tag img do HTML
}
// Typescript: quando há o ponto ? é porque é uma propriedade opcional. Exemplo: alt?:string
// dessa forma evita erro quando chamamos o componente Avatar em outro componente e não passamos uma dessas propriedades

// Typescript: para objeto não se define o tipo da informação separadamente, por isso foi criado o AvatarProps, englobando todas essas propriedades
export function Avatar({ hasBorder = true, ...props }: AvatarProps) { // Typescript: o '...props' serve para pegar os atributos originais da tag img
    console.log(props)

    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            {...props} // Typescript: o '...props' serve para pegar os atributos de onde o componente Avatar foi chamado, no caso (src e alt, por exemplo)
        />
    )
}