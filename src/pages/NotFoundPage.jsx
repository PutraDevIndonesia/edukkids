import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home } from 'lucide-react';
import { CharacterAvatar } from '../components/characters/CharacterAvatar';
import { Button } from '../components/common/Button';

export function NotFoundPage() {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '60px 20px' }}>
      <div style={{ maxWidth: '480px', margin: '0 auto' }}>
        <CharacterAvatar characterId="kiko" size={100} />
        <h1 style={{ marginTop: '24px', marginBottom: '12px', color: 'var(--color-primary-dark)' }}>
          Ups! Jalur Belum Ditemukan
        </h1>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '28px', fontSize: '1.05rem' }}>
          Sepertinya kamu melangkah ke luar batas peta petualangan. Tenang saja, Kiko siap memandumu kembali ke jalan yang aman!
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
          <Link to="/">
            <Button variant="primary" icon={Home}>
              Kembali ke Beranda
            </Button>
          </Link>
          <Link to="/peta">
            <Button variant="secondary" icon={Compass}>
              Buka Peta Petualangan
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
