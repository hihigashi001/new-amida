import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { StoreData, getAmida, updateAmida } from "@/lib/apiClient"
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
  changeText: (text: string) => void
  modalOpen: (number: number) => void
  modalClose: () => void
  updatePlayer: () => void
  updateAllPlayer: () => void
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
  const [isAmidaCover, SetIsAmidaCover] = useState(true)
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
      SetIsAmidaCover(true)
    } else {
      SetIsAmidaCover(false)
    }
  }, [amidaData.amidaPlayers])

  const handlers: Handlers = {
    modalOpen: (number) => {
      statusStore.setState({ modalState: { isOpen: true, player: number, text: "" } })
    },
    modalClose: () => {
      statusStore.setState({ modalState: { isOpen: false, player: 0, text: "" } })
    },
    changeText: (text) => {
      if (text.length > 15) return
      statusStore.setState({ modalState: { ...modalState, text: text } })
    },
    updatePlayer: async () => {
      const newAmidaData = { ...amidaData, amidaPlayers: replaceAmidaPlayers(amidaData, modalState) }
      await updateAmida(pageId, newAmidaData)
      mutate()
      statusStore.setState({ modalState: { isOpen: false, player: 0, text: "" } })
    },
    updateAllPlayer: async () => {
      const newAmidaData = { ...amidaData, amidaPlayers: allPlayers(amidaData) }
      await updateAmida(pageId, newAmidaData)
      mutate()
    },
  }

  return { amidaData, modalState, handlers, error, loading: !data && !error, isAmidaCover }
}

// this is a function that is not exported

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

function allPlayers(amidaValues: StoreData): string[] {
  const { amidaPlayers } = amidaValues

  let newAmidaPlayers = []
  for (let i = 0; i < amidaPlayers.length; i++) {
    if (amidaPlayers[i] === "") {
      newAmidaPlayers.push("-")
    } else {
      newAmidaPlayers.push(amidaPlayers[i])
    }
  }

  return newAmidaPlayers
}