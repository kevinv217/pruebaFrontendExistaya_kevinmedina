import { toast } from "react-toastify";

export default function showMessage(message, error = true) {
  const config = {
    position: "top-right",
    autoClose: 30000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  return error ? toast.error(message, config) : toast.info(message, config);
}
