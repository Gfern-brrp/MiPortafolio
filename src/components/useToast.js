import toast from 'react-hot-toast';

export const useToast = () => {
  const showNotification = (message, type = 'success') => {
    if (type === 'success') {
      toast.success(message, {
        duration: 3000,
        position: 'top-right',
        style: {
         // 1. Fondo semitransparente (usando RGBA para la transparencia)
    background: 'rgba(16, 185, 129, 0.0)', // El color #10b981 (esmeralda) con 20% de opacidad

    // 2. Desenfoque del fondo (la propiedad clave del Glassmorphism)
    backdropFilter: 'blur(8px)', // Simula la clase 'backdrop-blur-md' o 'backdrop-blur-lg'

    // Resto de estilos
    color: '#fff',
    fontWeight: '500',
    borderRadius: '12px',
    padding: '16px',
    // También puedes agregar un borde sutil para mejor efecto
    border: '1px solid rgba(16, 185, 129, 0.3)',
        },
        iconTheme: {
          primary: '#fff',
          secondary: '#10b981',
        },
      });
    } else if (type === 'error') {
      toast.error(message, {
        duration: 3000,
        position: 'top-right',
        style: {
          background: '#ef4444',
          color: '#fff',
          fontWeight: '500',
          borderRadius: '12px',
          padding: '16px',
        },
      });
    }
  };

  const copyToClipboard = async (text, successMessage = '¡Copiado al portapapeles!') => {
    try {
      await navigator.clipboard.writeText(text);
      showNotification(successMessage, 'success');
      return true;
    } catch (err) {
      showNotification('Error al copiar', 'error');
      return false;
    }
  };

  return {
    showNotification,
    copyToClipboard,
  };
};