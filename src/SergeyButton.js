import React from 'react';

function handleClick(parent) {
  parent.setState({textOut: "1234"});
}

const SergeyButton = (props) => {
  return (
    <button onClick= {handleClick(props.onCli)}>Кнопка</button>
  )
}

export default SergeyButton
