import React from 'react';

// export const HelloWorld = ({ name, children }) => {
//     name = 'Zoey';
//     return (
//         <h1>hello world from {name}</h1>
//     );
// };

export class HelloWorld extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Alex',
            inputValue: 'hannah'
        }

    }

    handleClick = () => {
        this.setState({ name: 'Zoey' });
    }

    render() {
        return (
            <>
                <h1>hello world from {this.state.name}</h1>
                <button onClick={this.handleClick}>click to make the name to Zoey</button >
                <input value={this.state.inputValue} />
            </>
        );
    }
}
