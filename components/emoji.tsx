import React from 'react';

interface IEmojiProps {
    label: string;
    symbol: string;
}

export default function Emoji(props: IEmojiProps) {
    return (
        <span
            className="emoji"
            role="img"
            aria-label={props.label ? props.label : ''}
            aria-hidden={props.label ? 'false' : 'true'}
        >
            {props.symbol}
        </span>
    );
}
