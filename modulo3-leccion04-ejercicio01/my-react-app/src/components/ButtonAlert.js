import React from 'react';

class ButtonAlert extends React.Component {
  render() {
    const onClickListener = ev => {
      alert('Para más información, acuda a recepción.');
    };

    return (
       <button className="button" onClick={onClickListener}>Clik Me</button>
    );
  }
}

export default ButtonAlert;