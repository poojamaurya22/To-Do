import React from 'react';

class ListItem extends React.Component {

	render() {
    	return (
            <li id={this.props.item.key}>
            <span>{ this.props.item.text }</span>
            <button onClick={this.props.handleRemove}>Remove</button>
            </li>
    	);
	}
}


export default ListItem;