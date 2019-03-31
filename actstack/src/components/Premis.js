import React from 'react';
class Premis extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        premis: [
        {title: "ocean's 11", summary: "An ex con plans the biggest casino heist in history"},
        {title: "Star Wars", summary: "A farm boy takes on the greatest threat in the galaxy "},
        {title: "The Good the Bad and the Ugly", summary: "A man with no name races two gun slingers for millions of dollars in civil war gold"},
        ]
      }

  }

  render() {
    return (
      <div>
      {this.state.premis.map( item => (
            <div>
              <p>{item.title}</p>
              <p>{item.summary}</p>
            </div>
      ))}
      </div>
      );
  }
}

export default Premis;
