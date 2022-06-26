
import { useMemo, ImgHTMLAttributes } from "react";
import styles from "./styles.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  small?: boolean;
  bordered?: boolean;
  src?: string;
}

export function Avatar({ 
  small, 
  bordered,
  ...rest
}: AvatarProps) {

  const style = useMemo(() => {
    if (small && !bordered) {
      return styles.avatarSmallNoBordered;
    }

    if (small && bordered) {
      return styles.avatarSmall;
    }

    if (!small && bordered) {
      return styles.avatar;
    }

    if (!small && !bordered) {
      return styles.avatarNoBordered;
    }
  }, [small, bordered]);

  return (
    <img 
      className={style}
      alt="Avatar do usuário." 
      { ...rest }
    />
  )
}