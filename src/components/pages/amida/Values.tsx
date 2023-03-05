import { useAmida } from "@/hooks/useAmida"

export const Values = () => {
  const { amidaData } = useAmida()

  const values = amidaData.amidaValues

  return (
    <div>
      <div className="value-flex-container">
        {values.map((value, index) => {
          return (
            <div key={index} className="value-text">
              {value}
            </div>
          )
        })}
      </div>
    </div>
  )
}
