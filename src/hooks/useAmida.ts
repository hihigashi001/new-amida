import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { StoreData, getAmida, updateAmida } from "@/lib/functions"
import useSWR from "swr"
import { create } from "zustand"

type modalState = {
  isOpen: boolean
  player: number
  text: string
}

type Store = {
  amidaData: StoreData
  modalState: modalState
}

type Handlers = {
  modalOpen: (number: number) => void
  modalClose: () => void
  changeText: (text: string) => void
  updatePlayer: () => void
}

const initialValues: Store = {
  amidaData: {
    amidaTitle: "",
    amidaValues: [],
    amidaPlayers: [],
    amidaBorder: "",
  },
  modalState: { isOpen: false, player: 0, text: "" },
}

const statusStore = create<Store>(() => initialValues)

export const useAmida = () => {
  const { amidaData, modalState } = statusStore()
  const [isAmida, SetIsAmida] = useState(true)
  const router = useRouter()
  const pageId = router.query.id as string

  const { data, error, mutate } = useSWR(pageId, getAmida)

  useEffect(() => {
    if (data) {
      statusStore.setState({ amidaData: data })
    }
  }, [data])

  useEffect(() => {
    if (containsEmptyString(amidaData.amidaPlayers)) {
      SetIsAmida(true)
    } else {
      SetIsAmida(false)
    }
  }, [amidaData.amidaPlayers])

  const handlers: Handlers = {
    modalOpen: (number: number) => {
      statusStore.setState({ modalState: { isOpen: true, player: number, text: "" } })
    },
    modalClose: () => {
      statusStore.setState({ modalState: { isOpen: false, player: 0, text: "" } })
    },
    changeText: (text: string) => {
      if (text.length > 15) return
      statusStore.setState({ modalState: { ...modalState, text: text } })
    },
    updatePlayer: async () => {
      const newAmidaData = { ...amidaData, amidaPlayers: replaceAmidaPlayers(amidaData, modalState) }
      await updateAmida(pageId, newAmidaData)
      mutate()
      statusStore.setState({ modalState: { isOpen: false, player: 0, text: "" } })
    },
  }

  return { amidaData, modalState, handlers, error, loading: !data && !error, isModal: modalState.isOpen, isAmida }
}

// functions

function replaceAmidaPlayers(amidaValues: StoreData, modalValues: modalState): string[] {
  const { amidaPlayers } = amidaValues
  const { player, text } = modalValues

  const newAmidaPlayers = [...amidaPlayers]
  newAmidaPlayers[player] = text

  return newAmidaPlayers
}

function containsEmptyString(arr: string[]): boolean {
  return arr.includes("")
}
