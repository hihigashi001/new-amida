import { useAmida } from "@/hooks/useAmida"

export const AllOpenButton = () => {
  const { isAmida, handlers } = useAmida()

  return (
    <div className="all-button">{isAmida && <button onClick={handlers.updateAllPlayer}>残り全て選択する</button>}</div>
  )
}
