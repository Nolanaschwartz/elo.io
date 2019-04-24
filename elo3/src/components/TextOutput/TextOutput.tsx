import React from 'react';

type props = {
    text: string
}


const TextOutput = (props: any) => {
    return (
        <div className='Text'>
            <p>{props.text}</p>
        </div>
    );
};

export default TextOutput;
