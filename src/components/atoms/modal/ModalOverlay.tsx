import type { ReactNode } from "react";
import Backdrop from "../backdrop";
import { createPortal } from "react-dom";
type ModalOverlayProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}
const ModalOverlay = ({ isOpen, onClose, children }: ModalOverlayProps) => {
    if (!isOpen) return null;
    return  createPortal(
        <>
            <Backdrop isVisible={isOpen} onClick={onClose} />
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="pointer-events-auto">
                    {children}
                </div>
            </div>
        </>,
        document.body
    )
}

export default ModalOverlay