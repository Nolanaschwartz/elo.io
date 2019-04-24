import React, {Component} from 'react';
import TextInput from '../../components/TextInput/TextInput';
import TextOutput from '../../components/TextOutput/TextOutput';
import Aux from '../../hoc/_Aux/_Aux';

interface Props {
}

interface State {
    text: string
}


export default class TextContainer extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {text: ''};
    }

    updateTextField = (e: any) =>{
        this.setState({...this.state, text: e.target.value})
    };



    public render()
    {
        return (
            <Aux>
                <TextInput onChange = {this.updateTextField}/>
                <TextOutput text = {this.state.text} />
            </Aux>
        );
    }
}
