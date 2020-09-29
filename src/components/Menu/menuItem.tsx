import React, { useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'

export interface MenuItemProps {
  index: number;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const {
    className,
    index,
    style,
    disabled,
    children
  } = props

  const context = useContext(MenuContext)
  const classes = classNames('menu-item', className, {
    'is-active': context.index === index,
    'is-disabled': disabled
  })
  
  const handleClick = () => {
    if (context.onSelect && !disabled) {
      context.onSelect(index)
    }
  }

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}

export default MenuItem