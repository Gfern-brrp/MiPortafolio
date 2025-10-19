export const toastConfig = {
  position: 'top-right',
  reverseOrder: false,
  gutter: 8,
  containerStyle: {
    top: 100, // Espacio para el navbar
  },
  toastOptions: {
    duration: 3000,
    style: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#fff',
      fontWeight: '500',
      borderRadius: '12px',
      padding: '16px 20px',
      boxShadow: '0 10px 40px rgba(102, 126, 234, 0.4)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    success: {
      duration: 3000,
      style: {
        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      },
      iconTheme: {
        primary: '#fff',
        secondary: '#10b981',
      },
    },
    error: {
      duration: 3000,
      style: {
        background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
      },
      iconTheme: {
        primary: '#fff',
        secondary: '#ef4444',
      },
    },
  },
};