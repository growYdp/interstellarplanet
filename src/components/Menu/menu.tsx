import React, { createContext, useState } from 'react'
import classNames from 'classnames'

type MenuDirection = 'vertical' | 'horizonal'
type MenuSelect = (index: number) => void

export interface MenuProps {
  defaultIndex?: number;
  mode?: MenuDirection;
  className?: string;
  style?: React.CSSProperties;
  onSelect?: MenuSelect;
}

export interface IMenuItem {
  index: number,
  onSelect?: MenuSelect
}

export const MenuContext = createContext<IMenuItem>({index: 0})

const Menu: React.FC<MenuProps> = (props) => {
  const {
    children,
    className,
    defaultIndex,
    mode,
    style,
    onSelect
  } = props

  const [activeIndex, setActiveIndex] = useState(defaultIndex)

  const classes = classNames('viking-menu', className, {
    [`menu-${mode}`]: mode
  })

  const handleClick = (index: number) => {
    setActiveIndex(index)
    if (onSelect) {
      onSelect(index)
    }
  }

  const menuPassed: IMenuItem = {
    index: activeIndex ? activeIndex : 0,
    onSelect: handleClick
  }

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={menuPassed}>
        {children}
      </MenuContext.Provider>
    </ul>
  )
}

export default Menu