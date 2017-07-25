import React from 'react';

class SergeyButton extends React.Component {

    constructor (props) {
      super(props)
    }

    toggleParentState = () => {
      if (this.props.parent.state.selectValue=="zone") this.props.parent.setState( {textOut : "Во-первых"} )
      if (this.props.parent.state.selectValue=="ztoo") this.props.parent.setState( {textOut : "Во-вторых"} )
    }

    render () {
      return (
        <button onClick={ this.toggleParentState }>Кнопка</button>
      )
    }

}
export default SergeyButton
