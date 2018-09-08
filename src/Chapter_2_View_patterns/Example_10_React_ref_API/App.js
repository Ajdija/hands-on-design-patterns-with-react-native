import React from 'react';
import {TextInput, Text, View, Button} from 'react-native'

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
    }

    render = () => (
        <TextInput style={{height:50}} ref={ref => this.inputRef = ref} />
    );

    componentDidMount() {
        this.inputRef.focus();
    }
}
