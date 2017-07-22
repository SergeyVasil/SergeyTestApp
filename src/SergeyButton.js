import React from 'react';

class SergeyButton extends React.Component {

    constructor (props) {
      super(props)
    }

    toggleParentState = () => {
      var parent = this.props.parent
      parent.state.textOut ? parent.setState( {textOut : false} ) : parent.setState( {textOut : true} )
    }

    render () {
      return (
        <button onClick={ this.toggleParentState }>Кнопка</button>
      )
    }

}
export default SergeyButton
