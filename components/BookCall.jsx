// Librairies
import React, { useState } from 'react';
import { IoCalendarOutline } from 'react-icons/io5';

// Components
import CalendlyModal from './UI/CalendlyModal';

/**
 * Reusable BookCall component to schedule a diagnostic call
 * This avoids duplication between Services and Contact components (DRY principle)
 * Uses a modal popup for better user experience
 */
export default function BookCall() {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open the modal
  const openModal = () => setIsModalOpen(true);
  
  // Close the modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div id="book-call" className="w-full my-12">
      <div className="max-w-[1240px] mx-auto">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Schedule a Call
        </p>
        <h2 className="py-4">30-Minute Blockchain & AI Diagnostic</h2>
        <p className="text-gray-800 mb-8">
          Ready to explore how our combined blockchain and AI expertise can transform your business? 
          Schedule a free 30-minute diagnostic call with our team to discuss your specific needs and goals.
        </p>
        
        {/* Call-to-action button */}
        <button 
          onClick={openModal}
          className="flex items-center justify-center gap-3 mx-auto py-4 px-8 text-lg font-medium text-white bg-[#5651e5] rounded-xl shadow-md hover:bg-[#4842c5] transition-all duration-300 hover:shadow-lg transform hover:scale-105"
        >
          <IoCalendarOutline size={24} />
          Schedule Your Free Diagnostic Call
        </button>
        
        {/* Calendly Modal */}
        <CalendlyModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
}
