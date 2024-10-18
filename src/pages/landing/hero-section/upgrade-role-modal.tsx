interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  primaryActionLabel: string;
  onPrimaryAction: () => void;
}

export function UpgradeRoleModal({
  isOpen,
  onClose,
  title,
  description,
  primaryActionLabel,
  onPrimaryAction,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h2 className="font-bold text-lg text-black">{title}</h2>
        <p className="py-4 text-black">{description}</p>
        <div className="modal-action">
          <button className="btn btn-primary" onClick={onPrimaryAction}>
            {primaryActionLabel}
          </button>
          <button className="btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
