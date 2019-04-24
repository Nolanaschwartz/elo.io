import React, {Component} from 'react';

type props = {
    onChange(): void
}


export default class TextInput extends React.Component<any> {
    render() {
        return (
            <div className= 'Text'>
                <input onChange={e => this.props.onChange(e)}/>
            </div>
        )
    }
}