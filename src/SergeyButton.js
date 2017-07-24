import React from 'react';

class SergeyButton extends React.Component {

    constructor (props) {
      super(props)
    }

    toggleParentState = () => {
      console.log(this.props.parent);
      this.props.parent.setState( {textOut : "++++++++++"} )
    }

    render () {
      return (
        <button onClick={ this.toggleParentState }>Кнопка</button>
      )
    }

}
export default SergeyButton
