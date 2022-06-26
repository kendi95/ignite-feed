import { FC } from "react"

import styles from "./styles.module.css";
import logoSVG from "../../assets/logo.svg";

export const Header: FC = () => {

  return (
    <header className={styles.header}>
      <img src={logoSVG} alt="Logo na plataforma Ignite Feed" />
      <strong>Ignite Feed</strong>
    </header>
  )

}