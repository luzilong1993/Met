import React, { ReactNode } from 'react';
import classNames from 'classnames';

import './button.css'

interface IButtonProps {
    className?: string;
    type?: 'normal' | 'primary' | 'dashed' | 'link' | 'text';
    children?: ReactNode;
    style?: React.CSSProperties;
}

const Button: React.FC<IButtonProps> = (props) => {
    const { className, type = 'normal', children, style } = props;

    const cls = classNames({
        'met-btn': true,
        [`met-btn-${type}`]: type,
        [className as string]: !!className
    })

    return <button className={cls} style={style}>{children}</button>
}

export default Button