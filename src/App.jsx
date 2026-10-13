import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router';
import { soundFx } from './utils/soundFx';

export function App() {
  useEffect(() => {
    function handleGlobalClick(e) {
      const target = e.target;
      if (!target || typeof target.closest !== 'function') return;

      // Detect interactive buttons, links, and clickable cards
      const interactive = target.closest(
        'button, a, [role="button"], input[type="button"], input[type="submit"], .btn, .interactive-choice-btn, .interactive-card, .tab-item'
      );

      if (interactive && !interactive.disabled && !interactive.getAttribute('aria-disabled')) {
        soundFx.playPop();
      }
    }

    document.addEventListener('click', handleGlobalClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleGlobalClick, { capture: true });
    };
  }, []);

  return <RouterProvider router={router} />;
}
