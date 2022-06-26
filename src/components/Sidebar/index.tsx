import { FC } from "react";
import { PencilLine } from "phosphor-react";

import styles from "./styles.module.css";
import { Avatar } from "../Avatar";

export const Sidebar: FC = () => {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
        alt="Imagem de fundo do usuário." 
      />

      <div className={styles.profile}>
        <div className={styles.avatarContainer}>
          <Avatar src="https://github.com/kendi95.png" bordered />
        </div>

        <strong>Alisson Kendi Kohatsu</strong>
        <span>Software Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}