import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '20px', 
          textAlign: 'center',
          backgroundColor: '#f4f3ef',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          color: '#66615B'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '10px',
            padding: '40px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            maxWidth: '500px'
          }}>
            <h1 style={{ color: '#66615B', marginBottom: '20px' }}>
              Oops! Something went wrong.
            </h1>
            <p style={{ marginBottom: '20px', color: '#9A9A9A' }}>
              We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists.
            </p>
            <button 
              onClick={() => window.location.reload()} 
              style={{
                backgroundColor: '#007070',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Refresh Page
            </button>
            {process.env.NODE_ENV === 'development' && (
              <details style={{ 
                whiteSpace: 'pre-wrap', 
                marginTop: '20px',
                textAlign: 'left',
                backgroundColor: '#f8f9fa',
                padding: '15px',
                borderRadius: '5px',
                fontSize: '12px',
                color: '#666'
              }}>
                <summary style={{ cursor: 'pointer', marginBottom: '10px' }}>
                  Error Details (Development Only)
                </summary>
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo && this.state.errorInfo.componentStack}
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
