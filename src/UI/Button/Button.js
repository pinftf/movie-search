import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

export const Button = ({
  variant = 'primary',
  size,
  children,
  icon,
  ...props
}) => {
  const type = {
    primary: 'button--primary',
    secondary: 'button--secondary',
    ghost: 'button--ghost'
  }

  return (
    <button
      type="button"
      className={[
        'button',
        `button--${size}`,
        icon && 'button--with-icon',
        type[variant]
      ].join(' ')}
      {...props}>
      {icon}
      {children}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
  icon: PropTypes.node,
  children: PropTypes.node.isRequired
}

Button.defaultProps = {
  size: 'medium',
  variant: 'primary'
}
