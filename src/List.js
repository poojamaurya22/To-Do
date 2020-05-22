import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {
	state = {
      items : [],
      currentItem : {text:'', key:''},
    };

  	render() {

  		const listItem = this.state.items.map(item => (
			<ListItem key={item.key} item={item} handleRemove={this.handleRemove}/>
        ));

    	return (
	        <div>
	        <ul>
	        	{listItem}
	        </ul>
	        <form onSubmit={this.handleSubmit}>
	            <input onChange={this.handleChange} value={this.state.currentItem.text} /><br/><br/>
	            <button>
	              Add #{this.state.items.length + 1}
	            </button>
	        </form>
	        </div>
    	);
  	}

  	handleSubmit = e => {
	    e.preventDefault();
	    const newItem = this.state.currentItem;
	    this.setState(state => ({
	        items: [...this.state.items, newItem],
	        currentItem : {text:'', key:''}
	    }));
	  }

	handleChange = e => {
	    const newItem = { text: e.target.value, key: this.state.items.length+1 };
	    this.setState({ currentItem: newItem });
    }

	handleRemove = e => {
		const i = e.target.parentNode.getAttribute('id');
		this.setState(state => ({ 
			items: this.state.items.filter(item => ( item.key != i )) 
		}));
	}

}

export default List;