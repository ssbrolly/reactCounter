import React from 'react';

class Counter extends React.Component {
  state = { value: 0 }

  inc = () => {
    this.setState( state => {
      return { value: state.value + 1 }
    });
  }

  dec = () => {
    this.setState( state => {
      return { value: state.value - 1 }
    });
  }

  render() {
    const { name } = this.props;
    const { value } = this.state;
    return (
      <div style={{ backgroundColor: name, color: 'white' }}>
        <p>{ name } counter</p>
        <p>{ value }</p>
        <button onClick={ this.inc }>+</button>
        <button onClick={ this.dec }>-</button>
      </div>
    )
  }
}

export default Counter;