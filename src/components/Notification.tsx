import React from "react";

interface NotificationProps {
  message: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, onClose }) => {
  return (
    <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
      Added to cart
      <button
        onClick={onClose}
        className="ml-2 bg-transparent text-white hover:text-gray-200"
      >
        &times;
      </button>
    </div>
  );
};

export default Notification;
