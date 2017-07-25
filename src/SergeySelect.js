import React from 'react';

class SergeySelect extends React.Component {

    constructor (props) {
      super(props)
    }

    toggleParentState = () => {
      var n = document.getElementById("SergSel").options.selectedIndex;
      if (n==0) this.props.parent.setState( {selectValue : "zone"} )
      if (n==1) this.props.parent.setState( {selectValue : "ztoo"} )
    }

    render () {
      return (
        <select id="SergSel" name="vybor" onChange={ this.toggleParentState }>
          <option value="vone">один</option>
          <option value="vtoo">два</option>
        </select>
      )
    }
}

export default SergeySelect
