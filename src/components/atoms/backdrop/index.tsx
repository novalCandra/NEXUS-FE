type BackdropProps = {
    onClick?: () => void;
    isVisible: boolean;
};
const Backdrop = ({ onClick, isVisible }: BackdropProps) => {
    if (!isVisible) return null;
    return (
        <div
            onClick={onClick}
            className="fixed inset-0 bg-white/85 z-50 transition-opacity duration-300" />
    )
}

export default Backdrop