import React from 'react'
import classNames from 'classnames'

export enum AlertType {
  Success = 'success',
  Default = 'default',
  Danger = 'danger',
  Warning = 'warning'
}

interface AlertProps {
  title: string,
  description?: string,
  alertType?: AlertType
}

const Alert: React.FC<AlertProps> = (props) => {
  const {
    title,
    description,
    alertType
  } = props

  const classes = classNames(alert)

  return (
    <div className="alert">
      <div className="alert-header">
        <div className="alert-title">测试标题</div>
        <span>X</span>
      </div>
      <div className="alert-description">
        测试描述
      </div>
    </div>
  )
}

export default Alert