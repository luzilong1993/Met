import React, { ReactNode } from 'react';
import classNames from 'classnames';

import './button.css'

interface buttonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
    className?: string;
    type?: 'normal' | 'primary' | 'dashed' | 'link' | 'text';
    size?: 'small' | 'medium' | 'large'
    children?: ReactNode;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    onBlur?: React.FocusEventHandler<HTMLButtonElement>;
}

const Button: React.FC<buttonProps> = (props) => {
    const { className, type = 'normal', children, style, size = 'medium',onClick,onBlur, ...others  } = props;

    const cls = classNames({
        'met-btn': true,
        [`met-btn-${type}`]: type,
        [`met-btn-${size}`]: size,
        [className as string]: !!className
    })

    return <button {...others} className={cls} style={style} onClick={onClick} onBlur={onBlur}>{children}</button>
}

export default Button