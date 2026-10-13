import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function NextChallengeButton({
  onClick,
  isLast = false,
  nextLabel = 'Lanjut ke Tantangan Berikutnya',
  lastLabel = 'Selesaikan & Lihat Hasil Akhir',
  disabled = false,
  className = '',
  style = {}
}) {
  const Icon = isLast ? CheckCircle2 : ArrowRight;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`btn-next-challenge ${className}`}
      style={style}
    >
      <span>{isLast ? lastLabel : nextLabel}</span>
      <span className="btn-next-icon" aria-hidden="true">
        <Icon size={24} strokeWidth={2.4} />
      </span>
    </button>
  );
}
