import React from "react";
import { Link } from "react-router-dom";
import { RedirectLinkProps } from "../../../interfaces/interfaces";
import styles from "./index.module.css";

const RedirectLink: React.FC<RedirectLinkProps> = ({
  to,
  content,
  styledClass,
}: RedirectLinkProps) => {
  return (
    <Link className={`${styles.linkForm} ${styledClass}`} to={to}>
      {content}
    </Link>
  );
};

export default RedirectLink;
