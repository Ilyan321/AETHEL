'use client';
import { useState, useEffect } from 'react';

export default function ReservationModal({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Stop Lenis outer scroll
    } else {
      document.body.style.overflow = '';
      setSuccessData(null);
      setError(null);
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      editionSerial: formData.get('editionSerial'),
      customEngraving: formData.get('customEngraving')
    };

    try {
      const res = await fetch('/api/reserve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Failed to request allocation');
      
      setSuccessData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-basalt/95 backdrop-blur-md transition-opacity">
      <div className="relative w-full max-w-lg border border-olive p-12 bg-basalt shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-chalk hover:text-terracotta text-2xl font-light"
        >
          &times;
        </button>

        {!successData ? (
          <>
            <h3 className="font-serif text-3xl text-sandstone mb-2">SECURE ALLOCATION</h3>
            <p className="font-mono text-xs text-chalk tracking-widest mb-10">SUBMIT REQUEST FOR TERRAFORM BATCH</p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block font-mono text-[10px] text-bronze mb-2">FULL NAME (REQUIRED)</label>
                <input 
                  type="text" 
                  name="fullName" 
                  required 
                  className="w-full bg-transparent border-b border-olive pb-2 text-sandstone font-sans focus:outline-none focus:border-terracotta transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] text-bronze mb-2">EMAIL ADDRESS (REQUIRED)</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="w-full bg-transparent border-b border-olive pb-2 text-sandstone font-sans focus:outline-none focus:border-terracotta transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="block font-mono text-[10px] text-bronze mb-2">SERIAL PREF (01-50)</label>
                  <input 
                    type="number" 
                    name="editionSerial" 
                    min="1" max="50"
                    className="w-full bg-transparent border-b border-olive pb-2 text-sandstone font-sans focus:outline-none focus:border-terracotta transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] text-bronze mb-2">ENGRAVING (OPTIONAL)</label>
                  <input 
                    type="text" 
                    name="customEngraving" 
                    maxLength="20"
                    className="w-full bg-transparent border-b border-olive pb-2 text-sandstone font-sans focus:outline-none focus:border-terracotta transition-colors"
                  />
                </div>
              </div>

              {error && <div className="font-mono text-xs text-terracotta mt-4">{error}</div>}

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 mt-8 bg-sandstone text-basalt font-mono font-bold tracking-widest hover:bg-bronze hover:text-sandstone transition-colors disabled:opacity-50"
              >
                {loading ? 'PROCESSING...' : 'INITIALIZE REQUEST'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="font-mono text-terracotta text-sm mb-4">REQUEST CONFIRMED</div>
            <h3 className="font-serif text-3xl text-sandstone mb-8">ALLOCATION LOGGED</h3>
            
            <div className="border border-olive p-6 text-left mb-8">
              <div className="font-mono text-xs text-chalk mb-4 flex justify-between border-b border-olive pb-2">
                <span>STATUS:</span> <span className="text-bronze">{successData.status}</span>
              </div>
              <div className="font-mono text-xs text-chalk mb-4 flex justify-between border-b border-olive pb-2">
                <span>CODE:</span> <span className="text-sandstone">{successData.allocationCode}</span>
              </div>
              <div className="font-mono text-xs text-chalk flex justify-between">
                <span>RECIPIENT:</span> <span className="text-sandstone">{successData.data.email}</span>
              </div>
            </div>

            <button 
              onClick={onClose}
              className="px-8 py-3 border border-bronze text-bronze font-mono text-xs tracking-widest hover:bg-bronze hover:text-basalt transition-colors"
            >
              CLOSE TERMINAL
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
