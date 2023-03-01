import { useAmida } from "@/hooks/useAmida"

export const Players = () => {
  const { amidaData, handlers } = useAmida()

  const players = amidaData.amidaPlayers

  return (
    <div>
      <div className="player-flex-container">
        {players.map((player, index) => {
          return player ? (
            <div key={index} className="player-text">
              {player}
            </div>
          ) : (
            <p key={index} className="select-button" onClick={() => handlers.modalOpen(index)}>
              選択する
            </p>
          )
        })}
      </div>
    </div>
  )
}
