import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import { FcBusinessman, FcDepartment, FcPortraitMode } from "react-icons/fc";
import { USERS } from "../../constants/users.constant";


interface MenuItem{
    slug: string
    anchor: string
}

interface Props {
  items: Array<MenuItem>;
  title: string;

}

const DropdownMenu = ({ items, title }: Props) => {
  const activatorRef = useRef(null);
  const dropdownListRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  const keyHandler = (event: { key: string; }) => {
    // console.log(event);
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false);
    }
  };

  const clickOutsideHandler = (event: { target: any; }) => {
    if (dropdownListRef.current) {
      if (
        dropdownListRef.current.contains(event.target) ||
        activatorRef.current.contains(event.target)
      ) {
        return;
      }

      setIsOpen(false);
    }
  };

  const getTitleIcon=(title:string)=>{
    if(USERS.find(user=>user.userName===title)?.accountType==="ENTERPRISE"){
        return <FcDepartment style={{ marginRight: "0.5rem" }}/> 
    }else{
        return <FcBusinessman style={{ marginRight: "0.5rem" }}/> 
    }
  }

  useEffect(() => {
    if (isOpen) {
      dropdownListRef.current.querySelector("a").focus();
      document.addEventListener("mousedown", clickOutsideHandler);
    } else {
      document.addEventListener("mousedown", clickOutsideHandler);
    }
  }, [isOpen]);

  return (
    <div className={styles.dropdown_wrapper} onKeyUp={keyHandler}>
      <button
        className={styles.dropdown_activator}
        aria-haspopup="true"
        aria-controls={title}
        onClick={clickHandler}
        ref={activatorRef}
      >
        {getTitleIcon(title)} {title}{" "}
        {isOpen ? (
          <svg
            height="24"
            fill="rgb(70,70,70)"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m0 0h24v24h-24z" fill="none" />
            <path d="m7.41 15.41 4.59-4.58 4.59 4.58 1.41-1.41-6-6-6 6z" />
          </svg>
        ) : (
          <svg
            height="24"
            fill="rgb(70,70,70)"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m0 0h24v24h-24z" fill="none" />
            <path d="m7.41 8.59 4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" />
          </svg>
        )}

      </button>
      <ul
        ref={dropdownListRef}
        className={`${styles.dropdown_item_list} ${isOpen ? styles.active : ""} `}
      >
        {items.map((item, index) => {
          return (
            <li className={styles.item_list} key={index}>
              <a href={item.slug}>{item.anchor}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropdownMenu;