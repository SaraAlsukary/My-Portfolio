import style from "./Model.module.css";
const { modalBackdrop, modalBody, modalTitle, modalContent, modalClose, modalHeader, modalWrapper } = style;
type TModal = {
    children: React.ReactNode,
    show: boolean,
    onClose: () => void,
    title: string
}
const Modal = ({ children, show, onClose, title }: TModal) => {
    return (
        show && (
            <>
                <div className={modalBackdrop} onClick={onClose} />
                <div className={modalWrapper}>
                    <div className={modalContent}>
                        <div className={modalHeader}>
                            <div className={modalTitle}>{title}</div>
                            <div onClick={onClose} className={modalClose}>
                                X
                            </div>
                        </div>
                        <div className={modalBody}>{children}</div>
                    </div>
                </div>
            </>
        )
    );
};

export default Modal;