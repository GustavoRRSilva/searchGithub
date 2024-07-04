import { UserProps } from "@/types/user";
import Image from "next/image";
import { MdLocationPin } from "react-icons/md";
import Link from "next/link";
import styles from "./user.module.css";

export default function User({
  login,
  avatar_url,
  followers,
  following,
  location,
}: UserProps) {
  return (
    <div className={styles.user}>
      <Image src={avatar_url} alt="image avatar" width={1000} height={70} />
      <h2>{login}</h2>
      {location && (
        <p className={styles.location}>
          <MdLocationPin  />
          <span>{location}</span>
        </p>
      )}
      <div className={styles.followAndFollowing}>
        <div className={styles.follow}>
          <p>Seguidores:</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p>{following}</p>
        </div>
      </div>
      <Link href={`https://github.com/${login}`} target="_blank" > Ver melhores projetos</Link>
    </div>
  );
}
