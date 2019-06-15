import React, { Component } from 'react';
import Dependencies from './Dependencies';
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <h2> react app template </h2>
                <Dependencies />
            </div>
        );
    }
}
export default App;