import { Component } from 'react'
import { ErrorTitle } from './errorBoundaryStyles'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }


  render() {
    if (this.state.hasError) {
      return <ErrorTitle>Что-то пошло не так.</ErrorTitle>;
    }
    return this.props.children; 
  }
}
