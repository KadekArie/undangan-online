import { useState } from 'react';

export default function LinkGenerator() {
  const [namaTamu, setNamaTamu] = useState("");
  const baseUrl = "https://melaspas-pejeng-gianyar.vercel.app/";

  const encodedUrl = encodeURI(baseUrl + "/?to=" + namaTamu);

  const salinKeClipboard = () => {
    navigator.clipboard.writeText(encodedUrl);
    alert("Link disalin ke clipboard!");
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-2xl shadow-xl border border-gray-100 font-sans">
      <h2 className="text-shadow-500 font-serif text-2xl mb-6 text-center font-bold">
        Link Undangan Generator
      </h2>
      <div className="space-y-6">
        <div>
          <label className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-2 block ml-1">
            Nama Tamu & Gelar
          </label>
          <input
            type="text"
            placeholder="Contoh: Wayan Sudira, S.Pd"
            className="w-full p-4 border-2 border-gray-50 rounded-xl focus:ring-2 focus:ring-shadow-500 focus:border-transparent outline-none transition-all bg-gray-50"
            onChange={(e) => setNamaTamu(e.target.value)}
          />
        </div>
        {namaTamu && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="p-4 bg-shadow-500/5 rounded-xl border border-shadow-500/20 text-center">
              <p className="text-[10px] text-shadow-500 uppercase tracking-widest mb-1">
                Preview di Undangan:
              </p>
              <p className="text-lg font-serif text-gray-800">{namaTamu}</p>
            </div>
            <div className="p-4 bg-gray-900 rounded-xl">
              <p className="text-[10px] text-gray-500 uppercase mb-2 font-bold tracking-tighter">
                Link:
              </p>
              <p className="text-xs break-all font-mono text-gray-300 mb-4 opacity-80">
                {encodedUrl}
              </p>
              <button
                onClick={salinKeClipboard}
                className="w-full py-4 bg-shadow-500 text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-500/30 active:scale-95 transition-all"
              >
                Salin Link Undangan
              </button>
            </div>
          </div>
        )}
      </div>
      <p className="mt-8 text-center text-[10px] text-gray-400 italic"></p>
    </div>
  );
}