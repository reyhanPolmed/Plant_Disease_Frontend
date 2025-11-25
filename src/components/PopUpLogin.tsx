import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
type PopupLoginPromptProps = {
  onClose: () => void;
};
export default function PopupLoginPrompt({ onClose }: PopupLoginPromptProps) {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="w-[90%] max-w-sm"
      >
        <Card className="rounded-2xl shadow-xl">
          <CardContent className="p-6 text-center space-y-4">
            <h2 className="text-xl font-semibold">Login Required</h2>
            <p className="text-sm text-gray-600">
              Anda harus login terlebih dahulu untuk mengakses halaman ini.
            </p>

            <div className="flex gap-3 justify-center mt-4">
              <Button onClick={onClose} variant="outline" className="rounded-xl px-5">
                Batal
              </Button>
              <Button onClick={goToLogin} className="rounded-xl px-5">
                Login
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
