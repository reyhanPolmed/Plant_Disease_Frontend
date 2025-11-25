import { useEffect } from "react";

interface LoginSuccessProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginSuccess({ isOpen, onClose }: LoginSuccessProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000); // auto close in 2 seconds

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg px-6 py-4 text-center w-64 animate-fadeIn">
        <h3 className="text-lg font-semibold text-green-600">
          Berhasil Login
        </h3>
        <p className="text-sm text-gray-600 mt-1">Selamat datang kembali! 😊</p>
      </div>
    </div>
  );
}
