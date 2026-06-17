import React from 'react';
import PropTypes from 'prop-types';

export const HelloWorld1 = ({ name }) => {
    return (
        <h1>hello world from {name}</h1>
    );
};

HelloWorld1.propTypes = {
    name: PropTypes.number.isRequired,
};

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
