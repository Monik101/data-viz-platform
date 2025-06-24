import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconX } from "@tabler/icons-react";
import FilterSection from "./filter-section";
import VariablesSection from "./variables-section";

interface EditProps {
  isOpen: boolean;
  onClose: () => void;
}

const Edit: React.FC<EditProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed right-0 top-0 h-screen w-[90%] max-w-2xl bg-[#0E0D0D] z-50 shadow-xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="p-6 flex flex-col h-full py-[42px] px-8">
              <div className="flex justify-between items-center mb-[18px]">
                <h2 className="text-2xl font-medium">Edit Variables</h2>
                <button onClick={onClose} className="text-white cursor-pointer">
                  <IconX />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-2.5 py-3">
                <FilterSection />
                <VariablesSection />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Edit;
