import React from 'react'
import classNames from 'classnames'

// size
export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

// type
export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

// radius
export enum ButtonRadius {
  Mini = 'mini',
  Large = 'lg',
  Small = 'sm'
}

// shape
export enum ButtonShape {
  Round = 'round',
  Circle = 'circle'
}

// base props
interface BaseButtonProps {
  className?: string,
  disabled?: boolean,
  size?: ButtonSize,
  btnType?: ButtonType,
  children?: React.ReactNode,
  href?: string,
  radius?: string
}

// 解决没有原生属性和方法的问题
//  | 联合类型  & 交叉类型（多个类型合并成一种类型，包含所属的所有类型的特性）

// 1. button 的自定义属性和原生使用交叉类型合并
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
// 2. a 的自定义属性和原生使用交叉类型合并
type AnchorButtonPorps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
// 3. 解决button有的而a没有的 使用 Partial 属性都设置成可选的
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonPorps>

// restProps 就是除了展示出来的剩下所有的属性。
const Button: React.FC<ButtonProps> = (props) => {
  const {
    btnType,
    disabled,
    size,
    children,
    className,
    href,
    radius,
    ...restProps
  } = props

  // classes btn,btn-[type],btn-[size]
  // Link disabled 添加额外样式
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    [`btn-radius-${radius}`]: radius,
    disabled: (btnType === ButtonType.Link)
      && disabled
  })

  // Link
  if (btnType === ButtonType.Link && href) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  }

  // Normal Button
  return (
    <button
      className={classes}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  )
}

// default props
Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button