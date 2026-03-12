import { createContext, useContext, useState, ReactNode } from "react";
import ConsultationModal from "@/components/ConsultationModal";

const ConsultationContext = createContext<{ open: () => void }>({ open: () => {} });

export const useConsultation = () => useContext(ConsultationContext);

export const ConsultationProvider = ({ children }: { children: ReactNode }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ConsultationContext.Provider value={{ open: () => setModalOpen(true) }}>
      {children}
      <ConsultationModal open={modalOpen} onOpenChange={setModalOpen} />
    </ConsultationContext.Provider>
  );
};
