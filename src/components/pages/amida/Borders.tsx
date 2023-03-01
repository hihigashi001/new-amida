import { useAmida } from "@/hooks/useAmida"

export const Borders = () => {
  const { amidaData, isAmida } = useAmida()

  const colBorder = amidaData.amidaPlayers.length - 1
  const items = amidaData.amidaBorder.split("")

  return (
    <div>
      <div className="amida-grid-container" style={{ gridTemplateColumns: `repeat(${colBorder}, 1fr)` }}>
        {items.map((item, index) => {
          return <div key={index} className={`grid-item ${item === "0" && "border-top-none"}`}></div>
        })}
      </div>
      {isAmida && <div className="hidden-board">すべて選択されたらあみだが見れます。</div>}
    </div>
  )
}
