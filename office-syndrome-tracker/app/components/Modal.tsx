"use client";

interface ModalProps {
  isOpen: boolean;
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

export default function Modal({ isOpen, message, type, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.5)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', zIndex: 1000,
      backdropFilter: 'blur(4px)'
    }}>
      <div className="card" style={{
        padding: '30px', maxWidth: '400px', width: '90%',
        textAlign: 'center', borderRadius: '20px', backgroundColor: '#ffffff',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        animation: 'modalFadeIn 0.3s ease-out'
      }}>
        <div style={{
          fontSize: '50px', marginBottom: '15px',
          color: type === 'success' ? '#10b981' : '#ef4444'
        }}>
          {type === 'success' ? '✅' : '❌'}
        </div>
        <h3 style={{ marginBottom: '10px', color: '#0f172a' }}>
          {type === 'success' ? 'ดำเนินการสำเร็จ' : 'เกิดข้อผิดพลาด'}
        </h3>
        <p style={{ color: '#64748b', marginBottom: '25px' }}>{message}</p>
        <button 
          onClick={onClose}
          style={{
            width: '100%', padding: '12px', borderRadius: '12px',
            backgroundColor: '#0f172a', color: '#ffffff', border: 'none',
            fontWeight: '600', cursor: 'pointer'
          }}
        >
          ตกลง
        </button>
      </div>
      <style jsx>{`
        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}