import React, { ReactNode } from 'react';
import classNames from 'classnames';

import './index.scss'

interface iconProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
    className?: string;
    type?: 'fixed' | 'copy' | 'close';
    size?: number;
}

const svgMap = {
    fixed: <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="807"><path d="M334.72 612.16L127.36 404.736l85.12-85.184L390.016 391.04l275.968-214.4-72.32-72.32L678.912 19.2l82.944 82.88 0.192-0.128L928 267.84l-0.192 0.256 82.944 82.944-85.12 85.184-72.32-72.256L638.848 640l71.488 177.408-85.12 85.184-207.488-207.36-255.36 255.296-82.944-82.944 255.36-255.36z" fill="#262626" p-id="808"></path></svg>,
    copy: <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="807"><path d="M672 832 224 832c-52.928 0-96-43.072-96-96L128 160c0-52.928 43.072-96 96-96l448 0c52.928 0 96 43.072 96 96l0 576C768 788.928 724.928 832 672 832zM224 128C206.368 128 192 142.368 192 160l0 576c0 17.664 14.368 32 32 32l448 0c17.664 0 32-14.336 32-32L704 160c0-17.632-14.336-32-32-32L224 128z" fill="#5E6570" p-id="808"></path><path d="M800 960 320 960c-17.664 0-32-14.304-32-32s14.336-32 32-32l480 0c17.664 0 32-14.336 32-32L832 256c0-17.664 14.304-32 32-32s32 14.336 32 32l0 608C896 916.928 852.928 960 800 960z" fill="#5E6570" p-id="809"></path><path d="M544 320 288 320c-17.664 0-32-14.336-32-32s14.336-32 32-32l256 0c17.696 0 32 14.336 32 32S561.696 320 544 320z" fill="#5E6570" p-id="810"></path><path d="M608 480 288.032 480c-17.664 0-32-14.336-32-32s14.336-32 32-32L608 416c17.696 0 32 14.336 32 32S625.696 480 608 480z" fill="#5E6570" p-id="811"></path><path d="M608 640 288 640c-17.664 0-32-14.304-32-32s14.336-32 32-32l320 0c17.696 0 32 14.304 32 32S625.696 640 608 640z" fill="#5E6570" p-id="812"></path></svg>,
    close: <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="807"><path d="M507.168 473.232L716.48 263.936a16 16 0 0 1 22.624 0l11.312 11.312a16 16 0 0 1 0 22.624L541.12 507.168 750.4 716.48a16 16 0 0 1 0 22.624l-11.312 11.312a16 16 0 0 1-22.624 0L507.168 541.12 297.872 750.4a16 16 0 0 1-22.624 0l-11.312-11.312a16 16 0 0 1 0-22.624l209.296-209.312-209.296-209.296a16 16 0 0 1 0-22.624l11.312-11.312a16 16 0 0 1 22.624 0l209.296 209.296z" fill="#000000" p-id="808"></path></svg>,
}

const Icon: React.FC<iconProps> = (props) => {
    const { className, type = 'fixed', size = 32, ...others  } = props;

    const cls = classNames({
        'met-icon': true,
        [className as string]: !!className
    })

    const style: React.CSSProperties = {...props.style};

    if(size) {
        style.width = size;
        style.height = size;
    }
    
    if(type in svgMap) {
        const svg =  svgMap[type];
        return React.cloneElement(svg, {
            ...others,
            className: cls,
            style
        })
    }

    return <i />
}

export default Icon