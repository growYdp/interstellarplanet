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

  const classes = classNames('alert', {
    [`alert-${alertType}`]: alertType
  })

  return (
    <div className={classes}>
      <div className="alert-header">
        <div className="alert-title">{title}</div>
        <span>X</span>
      </div>
      {description &&
        <div className="alert-description">
          {description}
        </div>
      }
    </div>
  )
}

Alert.defaultProps = {
  alertType: AlertType.Default
}

export default Alert