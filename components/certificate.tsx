'use client';

import React from 'react';

interface CertificateProps {
  athleteName: string;
  eventName: string;
  category: string;
  placing: number;
  date: string;
  medal?: 'gold' | 'silver' | 'bronze';
  organizationName?: string;
}

export const Certificate: React.FC<CertificateProps> = ({
  athleteName,
  eventName,
  category,
  placing,
  date,
  medal = 'gold',
  organizationName = 'IFBB Argentina',
}) => {
  const getMedalColor = () => {
    switch (medal) {
      case 'gold':
        return { border: '#B78B1E', text: '#B78B1E', bg: '#FBF3E9' };
      case 'silver':
        return { border: '#A0AEC0', text: '#A0AEC0', bg: '#F7FAFC' };
      case 'bronze':
        return { border: '#CA8A04', text: '#CA8A04', bg: '#FFFBEB' };
      default:
        return { border: '#B78B1E', text: '#B78B1E', bg: '#FBF3E9' };
    }
  };

  const getPlacingText = (place: number) => {
    if (place === 1) return '1st Place';
    if (place === 2) return '2nd Place';
    if (place === 3) return '3rd Place';
    return `${place}th Place`;
  };

  const colors = getMedalColor();

  return (
    <div className="w-full max-w-2xl mx-auto print:max-w-full">
      <div
        className="relative bg-white p-12 rounded-lg shadow-xl print:shadow-none"
        style={{
          border: `8px solid ${colors.border}`,
          backgroundColor: colors.bg,
          minHeight: '600px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Decorative corners */}
        <div
          className="absolute top-4 left-4"
          style={{
            width: '30px',
            height: '30px',
            border: `2px solid ${colors.border}`,
            borderRight: 'none',
            borderBottom: 'none',
          }}
        />
        <div
          className="absolute top-4 right-4"
          style={{
            width: '30px',
            height: '30px',
            border: `2px solid ${colors.border}`,
            borderLeft: 'none',
            borderBottom: 'none',
          }}
        />
        <div
          className="absolute bottom-4 left-4"
          style={{
            width: '30px',
            height: '30px',
            border: `2px solid ${colors.border}`,
            borderRight: 'none',
            borderTop: 'none',
          }}
        />
        <div
          className="absolute bottom-4 right-4"
          style={{
            width: '30px',
            height: '30px',
            border: `2px solid ${colors.border}`,
            borderLeft: 'none',
            borderTop: 'none',
          }}
        />

        {/* Content */}
        <div className="text-center z-10 w-full">
          {/* Logo/Organization */}
          <div className="mb-6">
            <div
              style={{ color: colors.text, fontSize: '14px', fontWeight: '600', letterSpacing: '2px' }}
              className="uppercase tracking-widest"
            >
              {organizationName}
            </div>
            <div
              style={{ color: colors.text, fontSize: '12px', marginTop: '4px' }}
              className="text-xs"
            >
              International Federation of Bodybuilding
            </div>
          </div>

          {/* Title */}
          <h1
            style={{ color: colors.text, fontSize: '48px', fontWeight: '700', marginBottom: '8px' }}
            className="text-5xl font-bold tracking-tight"
          >
            Certificate
          </h1>
          <h2
            style={{ color: colors.text, fontSize: '36px', marginBottom: '24px' }}
            className="text-4xl font-light tracking-wide"
          >
            of Achievement
          </h2>

          {/* Main text */}
          <div className="mb-8 space-y-4">
            <p className="text-base text-gray-700">This certifies that</p>
            <p
              style={{ color: '#0B0B0F', fontSize: '32px', fontWeight: '700' }}
              className="text-4xl font-bold tracking-wide"
            >
              {athleteName}
            </p>
            <p className="text-base text-gray-700">has achieved</p>
          </div>

          {/* Achievement */}
          <div
            className="mb-8 p-6 rounded-lg"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              border: `2px dashed ${colors.border}`,
            }}
          >
            <p
              style={{
                color: colors.text,
                fontSize: '28px',
                fontWeight: '700',
                marginBottom: '4px',
              }}
              className="text-3xl font-bold"
            >
              {getPlacingText(placing)}
            </p>
            <p className="text-sm text-gray-600">in {category}</p>
          </div>

          {/* Event and Date */}
          <div className="mb-8">
            <p className="text-base font-semibold text-gray-800">at</p>
            <p
              style={{ color: colors.text, fontSize: '20px', fontWeight: '600' }}
              className="font-semibold mt-1"
            >
              {eventName}
            </p>
            <p className="text-sm text-gray-600 mt-2">{date}</p>
          </div>

          {/* Signature lines */}
          <div
            className="mt-12 pt-8 border-t-2 flex justify-around items-end"
            style={{ borderColor: colors.border }}
          >
            <div className="text-center" style={{ width: '150px' }}>
              <div
                style={{ color: colors.text, fontSize: '10px', fontWeight: '600' }}
                className="text-xs uppercase tracking-widest mb-8"
              >
                ________________
              </div>
              <div className="text-xs text-gray-600">Judge Signature</div>
            </div>
            <div className="text-center" style={{ width: '150px' }}>
              <div
                style={{ color: colors.text, fontSize: '10px', fontWeight: '600' }}
                className="text-xs uppercase tracking-widest mb-8"
              >
                ________________
              </div>
              <div className="text-xs text-gray-600">Organizer</div>
            </div>
          </div>

          {/* Date at bottom */}
          <div className="mt-8 text-xs text-gray-500">
            Certificate issued: {new Date().toLocaleDateString('es-AR')}
          </div>
        </div>

        {/* Medal icon */}
        <div
          className="absolute top-8 right-12"
          style={{
            fontSize: '48px',
            opacity: 0.15,
          }}
        >
          {medal === 'gold' && '🏅'}
          {medal === 'silver' && '🥈'}
          {medal === 'bronze' && '🥉'}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
