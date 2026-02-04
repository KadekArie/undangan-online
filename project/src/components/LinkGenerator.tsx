import { useState } from 'react';

export default function LinkGenerator() {
  const [guestName, setGuestName] = useState('');
  const baseUrl = "https://melaspas-pejeng-gianyar.vercel.app/";

  const createSlug = (text: string) => {
    return text
      .trim()
      .toLowerCase()
      .replace(/[\s,.]+/g, '-')
      .replace(/-+/g, '-')
      .replace(/-+$/, '');
  };

  const safeSlug = encodeURIComponent(createSlug(guestName));
  const generatedUrl = `${baseUrl}?to=${safeSlug}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedUrl);
    alert("Invitation link encoded and copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="bg-[#9a8958]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🔗</span>
          </div>
          <h2 className="text-[#9a8958] font-serif text-2xl font-bold">Link Generator</h2>
          <p className="text-gray-400 text-xs mt-1">Nama dan Gelar Otomatis Terformat</p>
        </div>
        
        <div className="space-y-6">
          <input 
            type="text" 
            placeholder="Example: Wayan Sudira, S.Pd"
            className="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-[#9a8958] rounded-2xl outline-none transition-all text-gray-700"
            onChange={(e) => setGuestName(e.target.value)}
          />

          {guestName && (
            <div className="space-y-4 animate-in fade-in zoom-in duration-300">
              <div className="p-4 bg-gray-900 rounded-2xl relative overflow-hidden border border-gray-800">
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-2">Encoded URL:</p>
                <p className="text-xs font-mono text-gray-300 break-all leading-relaxed">
                  {generatedUrl}
                </p>
              </div>

              <button 
                onClick={copyToClipboard}
                className="w-full py-4 bg-[#9a8958] text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-[#9a8958]/30 active:scale-95 transition-all"
              >
                Salin Link Undangan
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}