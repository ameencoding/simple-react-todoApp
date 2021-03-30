import React, { Component } from 'react';
import './App.css';
import Board from './components/board';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      err: false,
      delFlag: false,
      currentItem: { text: '', key: '' },
    };
  }

  handleChange = e => {
    this.setState({
      currentItem: { text: e.target.value, key: Date.now() },
      err: false,
      delFlag: false,
    });
  };

  handleDelete = e => {
    const updatedItem = [...this.state.items].filter(itemId => itemId.key != e);

    const updatedItems = [...updatedItem];
    this.setState({
      delFlag: true,
      items: updatedItems,
      currentItem: { text: '', key: '' },
    });

    console.log('updated', updatedItems);
  };

  handleSubmit = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text.trim() !== '') {
      const newItems = [...this.state.items, newItem];
      this.setState({
        delFlag: false,
        items: newItems,
        currentItem: {
          text: '',
          key: '',
        },
      });
    } else {
      this.setState({ err: true, delFlag: false });
    }
  };

  render() {
    return (
      <div className='App'>
        <Board
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          Allitems={this.state}
          onclickDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
