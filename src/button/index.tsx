import React, { ReactNode } from 'react';
import classNames from 'classnames';

import './index.css'

interface IButtonProps {
    className?: string;
    type?: 'normal' | 'primary';
    children?: ReactNode;
}

const Button: React.FC<IButtonProps> = (props) => {
    const { className, type, children } = props;

    const cls = classNames({
        'met-btn': true,
        [`met-btn-${type}`]: type,
        [className as string]: !!className
    })

    return <button className={cls}>{children}</button>
}

export default Button