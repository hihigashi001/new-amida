import { AllOpenButton } from "./AllOpenButton"
import { Borders } from "./Borders"
import { Modal } from "./Modal"
import { Players } from "./Players"
import { Values } from "./Values"

export const AmidaBoard = () => {
  return (
    <div className="borders-wrapper">
      <Modal />
      <Players />
      <div className="borders-inner">
        <Borders />
      </div>
      <Values />
      <AllOpenButton />
    </div>
  )
}
