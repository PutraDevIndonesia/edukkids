import React, { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Award, Download, Printer, X, Sparkles, Star, Check } from 'lucide-react';
import { Button } from '../common/Button';
import { soundFx } from '../../utils/soundFx';

const STAMP_OPTIONS = [
  { id: 'official', name: 'Akademi Resmi', signer: 'Tim Akademi EduKids', sub: 'Keluarga Sahabat Belajar', color: '#E5A823', icon: '★' },
  { id: 'kiko', name: 'Kiko Kelinci', signer: 'Kiko si Pemandu Petualang', sub: 'Sahabat Penjelajah Cilik', color: '#2875B8', icon: '🐰' },
  { id: 'mimi', name: 'Mimi Kucing', signer: 'Mimi si Ahli Sains & Hitung', sub: 'Sahabat Cerdas Ceria', color: '#D97706', icon: '🐱' },
  { id: 'bimo', name: 'Bimo Beruang', signer: 'Bimo si Penjaga Alam', sub: 'Sahabat Pemberani', color: '#059669', icon: '🐻' }
];

export function CertificateModal({ isOpen, onClose, profile, progress }) {
  const canvasRef = useRef(null);
  const [selectedStamp, setSelectedStamp] = useState('official');

  const nickname = profile?.nickname || profile?.fullName || 'Petualang Cilik';
  const grade = profile?.grade || '3';
  const stars = Number(progress?.totalStars ?? progress?.stars ?? 0);
  const level = progress?.level || Math.max(1, Math.floor((Number(progress?.totalXp || 0)) / 100) + 1);
  const dateStr = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // Sound fanfare and lock body scroll when modal opens
  useEffect(() => {
    if (!isOpen) return;

    soundFx.playFanfare();
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Render high-res printable certificate to Canvas
  useEffect(() => {
    if (!isOpen) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = 1200;
    const height = 850;
    canvas.width = width;
    canvas.height = height;

    const stamp = STAMP_OPTIONS.find((s) => s.id === selectedStamp) || STAMP_OPTIONS[0];

    // 1. Background Cream / Paper
    const gradBg = ctx.createLinearGradient(0, 0, width, height);
    gradBg.addColorStop(0, '#FFFDF8');
    gradBg.addColorStop(1, '#FDF6E8');
    ctx.fillStyle = gradBg;
    ctx.fillRect(0, 0, width, height);

    // 2. Ornate Border - Outer & Inner Gold/Navy
    ctx.lineWidth = 14;
    ctx.strokeStyle = '#205784'; // Navy
    ctx.strokeRect(28, 28, width - 56, height - 56);

    ctx.lineWidth = 3;
    ctx.strokeStyle = stamp.color; // Theme Accent
    ctx.strokeRect(48, 48, width - 96, height - 96);

    ctx.lineWidth = 1.5;
    ctx.strokeStyle = '#205784';
    ctx.strokeRect(56, 56, width - 112, height - 112);

    // Corner decorative accents
    const drawCorner = (x, y, flipX, flipY) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(flipX, flipY);
      ctx.fillStyle = stamp.color;
      ctx.beginPath();
      ctx.arc(0, 0, 16, 0, Math.PI * 0.5);
      ctx.lineTo(0, 0);
      ctx.fill();
      ctx.restore();
    };
    drawCorner(56, 56, 1, 1);
    drawCorner(width - 56, 56, -1, 1);
    drawCorner(56, height - 56, 1, -1);
    drawCorner(width - 56, height - 56, -1, -1);

    // 3. Header Ribbon / Badge
    ctx.fillStyle = '#205784';
    ctx.font = 'bold 22px "Quicksand", sans-serif';
    ctx.textAlign = 'center';
    ctx.letterSpacing = '4px';
    ctx.fillText('AKADEMI PETUALANG BELAJAR EDUKIDS', width / 2, 120);

    // Decorative line under header
    ctx.strokeStyle = stamp.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 200, 138);
    ctx.lineTo(width / 2 + 200, 138);
    ctx.stroke();

    // 4. Big Certificate Title
    ctx.fillStyle = '#C68A14';
    ctx.font = '900 52px "Fredoka", "Quicksand", sans-serif';
    ctx.letterSpacing = '1px';
    ctx.fillText('PIAGAM PENGHARGAAN', width / 2, 210);

    ctx.fillStyle = '#5A6E85';
    ctx.font = '500 20px "Quicksand", sans-serif';
    ctx.letterSpacing = '2px';
    ctx.fillText('SERTIFIKAT KELULUSAN & KETEKUNAN PETUALANG CILIK', width / 2, 250);

    // 5. Body Text
    ctx.fillStyle = '#4A5568';
    ctx.font = '18px "Quicksand", sans-serif';
    ctx.letterSpacing = '0px';
    ctx.fillText('Dengan bangga dipersembahkan kepada:', width / 2, 310);

    // Recipient Name Highlight
    ctx.fillStyle = '#205784';
    ctx.font = '900 46px "Fredoka", "Quicksand", sans-serif';
    ctx.fillText(nickname.toUpperCase(), width / 2, 380);

    // Name Underline
    ctx.strokeStyle = '#205784';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 240, 400);
    ctx.lineTo(width / 2 + 240, 400);
    ctx.stroke();

    // Citation description
    ctx.fillStyle = '#4A5568';
    ctx.font = '20px "Quicksand", sans-serif';
    ctx.fillText(
      `Siswa Penjelajah Kelas ${grade} SD yang telah menunjukkan dedikasi,`,
      width / 2,
      445
    );
    ctx.fillText(
      'keberanian, dan prestasi gemilang dalam menuntaskan misi belajar di Dunia EduKids.',
      width / 2,
      478
    );

    // 6. Stats Box (Stars, Level, Badge)
    const boxW = 540;
    const boxH = 90;
    const boxX = (width - boxW) / 2;
    const boxY = 525;

    ctx.fillStyle = '#FFFFFF';
    ctx.strokeStyle = '#E8E2D8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(boxX, boxY, boxW, boxH, 16);
    ctx.fill();
    ctx.stroke();

    // Stats items
    ctx.fillStyle = '#E5A823';
    ctx.font = 'bold 30px "Fredoka", sans-serif';
    ctx.fillText(`★ ${stars}`, boxX + 130, boxY + 46);
    ctx.fillStyle = '#718096';
    ctx.font = '14px "Quicksand", sans-serif';
    ctx.fillText('Bintang Prestasi', boxX + 130, boxY + 70);

    ctx.strokeStyle = '#E8E2D8';
    ctx.beginPath();
    ctx.moveTo(boxX + 270, boxY + 15);
    ctx.lineTo(boxX + 270, boxY + 75);
    ctx.stroke();

    ctx.fillStyle = '#205784';
    ctx.font = 'bold 30px "Fredoka", sans-serif';
    ctx.fillText(`Lv. ${level}`, boxX + 410, boxY + 46);
    ctx.fillStyle = '#718096';
    ctx.font = '14px "Quicksand", sans-serif';
    ctx.fillText('Tingkat Petualang', boxX + 410, boxY + 70);

    // 7. Footer: Date & Signatures
    // Date & Place
    ctx.fillStyle = '#5A6E85';
    ctx.font = '16px "Quicksand", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`Diterbitkan pada: ${dateStr}`, 100, 710);
    ctx.fillText('Dunia EduKids Indonesia', 100, 735);

    // Signature Area
    ctx.textAlign = 'center';
    ctx.fillStyle = '#205784';
    ctx.font = 'italic bold 24px "Caveat", "Brush Script MT", cursive, sans-serif';
    ctx.fillText(stamp.signer, width - 230, 700);

    ctx.strokeStyle = '#205784';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(width - 340, 715);
    ctx.lineTo(width - 120, 715);
    ctx.stroke();

    ctx.fillStyle = '#718096';
    ctx.font = 'bold 14px "Quicksand", sans-serif';
    ctx.fillText(stamp.sub, width - 230, 738);

    // Official Seal / Medallion in center bottom
    const sealX = width / 2;
    const sealY = 705;
    ctx.beginPath();
    ctx.arc(sealX, sealY, 44, 0, Math.PI * 2);
    ctx.fillStyle = '#FFF8E6';
    ctx.fill();
    ctx.strokeStyle = stamp.color;
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(sealX, sealY, 38, 0, Math.PI * 2);
    ctx.strokeStyle = '#C68A14';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([3, 3]);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = '#C68A14';
    ctx.font = 'bold 11px "Quicksand", sans-serif';
    ctx.fillText('STEMPEL', sealX, sealY - 12);
    ctx.font = 'bold 22px "Fredoka", sans-serif';
    ctx.fillText(stamp.icon, sealX, sealY + 10);
    ctx.font = 'bold 10px "Quicksand", sans-serif';
    ctx.fillText('EDUKIDS', sealX, sealY + 26);
  }, [isOpen, nickname, grade, stars, level, dateStr, selectedStamp]);

  if (!isOpen) return null;

  const handleDownloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    soundFx.playPop();
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `Piagam-EduKids-${nickname.replace(/\s+/g, '_')}.png`;
    link.href = image;
    link.click();
  };

  const handlePrint = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    soundFx.playPop();
    const dataUrl = canvas.toDataURL('image/png');
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Piagam Penghargaan - ${nickname}</title>
          <style>
            @page {
              size: landscape;
              margin: 0;
            }
            body {
              margin: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100vh;
              background-color: #ffffff;
            }
            img {
              max-width: 95vw;
              max-height: 95vh;
              object-fit: contain;
            }
          </style>
        </head>
        <body>
          <img src="${dataUrl}" onload="window.print(); window.close();" />
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  const modalContent = (
    <div
      role="presentation"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(35, 48, 65, 0.48)',
        backdropFilter: 'blur(3px)',
        WebkitBackdropFilter: 'blur(3px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        overflowY: 'auto'
      }}
      onClick={onClose}
    >
      <div
        className="anim-scale-in"
        role="dialog"
        aria-modal="true"
        aria-label="Piagam Prestasi EduKids"
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          maxWidth: '880px',
          width: '100%',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 40px rgba(18, 43, 73, 0.25)',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '16px 24px',
            borderBottom: '1px solid #E8E2D8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#FFFDF9'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '12px',
                backgroundColor: '#FFF4D6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#C68A14'
              }}
            >
              <Award size={22} />
            </div>
            <div>
              <h3 style={{ margin: 0, color: '#205784', fontSize: '1.2rem' }}>
                Piagam Prestasi EduKids
              </h3>
              <span style={{ fontSize: '0.85rem', color: '#718096' }}>
                Pilih stempel maskot, unduh gambar, atau cetak sertifikat resmi
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '6px',
              borderRadius: '8px',
              color: '#718096'
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Mascot Stamp Selector */}
        <div
          style={{
            padding: '10px 24px',
            backgroundColor: '#F8F9FA',
            borderBottom: '1px solid #E8E2D8',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            flexWrap: 'wrap'
          }}
        >
          <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#4A5568' }}>
            Pilih Cap & Tanda Tangan:
          </span>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {STAMP_OPTIONS.map((opt) => {
              const isSelected = selectedStamp === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    soundFx.playPop();
                    setSelectedStamp(opt.id);
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '5px 12px',
                    borderRadius: '999px',
                    border: isSelected ? `2px solid ${opt.color}` : '1.5px solid #D5DDE5',
                    backgroundColor: isSelected ? '#FFFFFF' : '#F1F4F7',
                    color: isSelected ? '#205784' : '#64748B',
                    fontWeight: isSelected ? 800 : 600,
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    boxShadow: isSelected ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <span>{opt.icon}</span>
                  <span>{opt.name}</span>
                  {isSelected && <Check size={14} color={opt.color} />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Certificate Preview Body */}
        <div
          style={{
            padding: '16px 20px',
            overflowY: 'auto',
            flex: '1 1 auto',
            minHeight: '220px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F4F7FA'
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '820px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(48, 60, 74, 0.12)',
              border: '1px solid #DFE5EB',
              backgroundColor: '#FFFDF8'
            }}
          >
            <canvas
              ref={canvasRef}
              style={{
                maxWidth: '100%',
                maxHeight: 'min(580px, calc(86vh - 230px))',
                width: 'auto',
                height: 'auto',
                aspectRatio: '1200 / 850',
                objectFit: 'contain',
                display: 'block',
                borderRadius: '11px'
              }}
            />
          </div>
        </div>

        {/* Modal Actions */}
        <div
          style={{
            padding: '16px 24px',
            borderTop: '1px solid #E8E2D8',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            backgroundColor: '#FFFDF9'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#5A6E85', fontSize: '0.88rem' }}>
            <Sparkles size={16} color="#E5A823" />
            <span>Format resolusi tinggi siap print ukuran A4 landscape</span>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <Button variant="secondary" size="md" icon={Printer} onClick={handlePrint}>
              Cetak / PDF
            </Button>
            <Button variant="primary" size="md" icon={Download} onClick={handleDownloadImage}>
              Unduh Gambar (PNG)
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
