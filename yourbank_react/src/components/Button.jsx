import React from 'react';
import './button.css'


const Button = ({ content, style,onClick }) => {
  return (
    <button className={style} onClick={onClick}>{content}</button>
  )
}

export default Button