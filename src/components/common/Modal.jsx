import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

export function Modal({ isOpen, onClose, title, children, actions, maxWidth = 480 }) {
  const previousActiveElement = useRef(null);
  const modalBoxRef = useRef(null);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    }

    if (isOpen) {
      previousActiveElement.current = document.activeElement;
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);

      // Focus modal dialog container on open for accessibility
      const focusTimer = setTimeout(() => {
        modalBoxRef.current?.focus();
      }, 50);

      return () => {
        clearTimeout(focusTimer);
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
        if (previousActiveElement.current && typeof previousActiveElement.current.focus === 'function') {
          previousActiveElement.current.focus();
        }
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const content = (
    <div
      role="presentation"
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        ref={modalBoxRef}
        role="dialog"
        aria-modal="true"
        aria-label={typeof title === 'string' ? title : 'Dialog EduKids'}
        tabIndex={-1}
        className="modal-dialog-box"
        style={{
          maxWidth: `${maxWidth}px`
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            marginBottom: '16px'
          }}
        >
          {title ? (
            <h3
              style={{
                margin: 0,
                color: '#205784',
                fontSize: '1.2rem',
                fontFamily: 'var(--font-display)',
                lineHeight: 1.3
              }}
            >
              {title}
            </h3>
          ) : (
            <div />
          )}

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup dialog"
            className="modal-close-btn"
          >
            <X size={18} strokeWidth={2.5} />
          </button>
        </div>

        {/* Modal Body Content */}
        <div style={{ color: 'var(--color-text)', flex: 1 }}>
          {children}
        </div>

        {/* Modal Actions Footer if any */}
        {actions && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '12px',
              marginTop: '20px'
            }}
          >
            {actions}
          </div>
        )}
      </div>
    </div>
  );

  return typeof document !== 'undefined'
    ? createPortal(content, document.body)
    : content;
}
