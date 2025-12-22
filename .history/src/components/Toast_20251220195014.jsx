import { CheckCircle, XCircle } from "lucide-react";

const Toast = ({ type = "success", message, onClose }) => {
  const isSuccess = type === "success";

  return (
    <div
      className={`
        fixed top-6 right-6 z-[9999]
        flex items-start gap-3
        px-5 py-4 rounded-xl shadow-2xl
        border backdrop-blur-md
        animate-slide-in
        ${
          isSuccess
            ? "bg-green-900/80 border-green-400 text-green-100"
            : "bg-red-900/80 border-red-400 text-red-100"
        }
      `}
    >
      {isSuccess ? (
        <CheckCircle className="w-6 h-6 text-green-400 mt-0.5" />
      ) : (
        <XCircle className="w-6 h-6 text-red-400 mt-0.5" />
      )}

      <div className="flex-1 text-sm leading-relaxed">{message}</div>

      <button
        onClick={onClose}
        className="text-white/70 hover:text-white transition"
      >
        ✕
      </button>
    </div>
  );
};

export default Toast;
