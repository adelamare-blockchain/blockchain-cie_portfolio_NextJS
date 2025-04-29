// Librairies
import React, { useState, useEffect } from "react";

/**
 * CalendlyModal - A reusable modal component for Calendly integration
 *
 * @param {Object} props Component props
 * @param {boolean} props.isOpen Whether the modal is open
 * @param {function} props.onClose Function to call when modal is closed
 * @returns {JSX.Element} Modal component
 */
export default function CalendlyModal({ isOpen, onClose }) {
  // State to manage modal animation
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  // Effect to handle body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      // Prevent background scrolling when modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = "auto";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Handle modal close with animation
  const handleClose = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsAnimatingOut(false);
      onClose();
    }, 300); // Match animation duration
  };

  // Don't render anything if modal is not open
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      {/* Backdrop/overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isAnimatingOut ? "opacity-0" : "opacity-50"
        }`}
        onClick={handleClose}
      />

      {/* Modal content */}
      <div
        className={`relative z-10 bg-white rounded-xl shadow-2xl w-[90%] max-w-3xl h-[80vh] transition-all duration-300 ${
          isAnimatingOut
            ? "opacity-0 scale-95"
            : "opacity-100 scale-100"
        }`}>
        {/* Close button */}
        <button
          className='absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none transition duration-200'
          onClick={handleClose}>
          <svg
            className='w-5 h-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>

        {/* Calendly iframe */}
        <div className='w-full h-full p-4 pt-12'>
          <iframe
            src='https://calendly.com/antoine-blockchain-cie/30min'
            width='100%'
            height='100%'
            title='Calendly Scheduling Page'
            className='rounded-lg'
          />
        </div>
      </div>
    </div>
  );
}
