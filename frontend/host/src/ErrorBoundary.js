/* eslint-disable require-jsdoc */
import React from 'react';
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {hasError: true};
  }

  componentDidCatch(error, errorInfo) {
    console.error('malas noticias:', {error, errorInfo});
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      // eslint-disable-next-line react/no-unescaped-entities
      return <h1>Ups! algo se rompio ='(</h1>;
    }

    return this.props.children;
  }
}
