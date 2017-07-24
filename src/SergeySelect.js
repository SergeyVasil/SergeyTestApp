import React from 'react';

class SergeySelect extends React.Component {

    constructor (props) {
      super(props)
    }

    toggleParentState = () => {
      var n = document.getElementById("SergSel").options.selectedIndex;
      var val = document.getElementById("SergSel").options[n].value;

      console.log(n);

      if (n===0) this.props.parent.setState( {selectValue : "vone"} )
      if (n===1) this.props.parent.setState( {selectValue : "vtoo"} )
      console.log(this.props.parent.state.selectValue);
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
