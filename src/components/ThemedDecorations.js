import React from 'react';

export default class ThemedDecorations extends React.Component {
  render() {

    const childrenWithTheme = React.Children.map(this.props.children, child => {
      return (<div className="theme">{child}</div>);
    });

    return (<div>{childrenWithTheme}</div>);
}
