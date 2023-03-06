import { useAmida } from "@/hooks/useAmida"

export const AllOpenButton = () => {
  const { isAmidaCover, handlers } = useAmida()

  return (
    <div className="all-button">
      {isAmidaCover && <button onClick={handlers.updateAllPlayer}>残り全て選択する</button>}
    </div>
  )
}
