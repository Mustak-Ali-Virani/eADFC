import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return <div>Something went wrong.</div>;
    }
    // Render children if no error occurred
    return this.props.children;
  }
}

export default ErrorBoundary;
