import { useAmida } from "@/hooks/useAmida"

export const Modal = () => {
  const { modalState, isModal, handlers } = useAmida()

  if (!isModal) return null

  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={handlers.modalClose}>
            &times;
          </span>
          <div className="form-item-text">15文字以内でお名前などを入力してください。</div>
          <input autoFocus onChange={(e) => handlers.changeText(e.target.value)} value={modalState.text} />
          <div className="modal-buttons">
            <button onClick={handlers.modalClose} className="button-secondary">
              キャンセル
            </button>
            <button onClick={handlers.updatePlayer} className="button-primary">
              決定
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
