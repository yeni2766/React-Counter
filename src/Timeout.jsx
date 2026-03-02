import { useState, useEffect } from "react";

export default function Notification() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!visible) return;

    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer); // clears old timer
  }, [visible]);

  return (
    <div className="p-10">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setVisible(true)}
      >
        Show Notification
      </button>

      {visible && (
        <p className="mt-4 bg-yellow-200 p-2 rounded">
          🔔 Notification Appeared!
        </p>
      )}
    </div>
  );
}