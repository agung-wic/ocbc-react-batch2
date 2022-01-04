import React, { Component } from 'react';

interface TitleProps {
  title: string;
  subtitle?: string;
}

class Title extends Component<TitleProps> {
  render() {
    const { title, subtitle, children } = this.props;
    return (
      <>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <div>{children}</div>
      </>
    );
  }
}

export default Title;