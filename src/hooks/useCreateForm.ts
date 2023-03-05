import { useRouter } from "next/router"
import { addAmida, dataNow } from "@/lib/functions"
import { useFormik } from "formik"
import * as Yup from "yup"

type AmidaValues = {
  amidaTitle: string
  amidaCount: number
  amidaValues: string[]
}

const initialValues: AmidaValues = {
  amidaTitle: "",
  amidaCount: 5,
  amidaValues: ["当たり", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
}

const validationSchema = Yup.object({
  amidaTitle: Yup.string().max(15, "15文字以下で入力してください。"),
  amidaCount: Yup.number()
    .max(10, "10以下で入力してください。")
    .min(2, "2以下で入力してください。")
    .required("入力必須です。"),
  amidaValues: Yup.array().of(Yup.string().max(15, "15文字以下で入力してください。")),
})

export const useCreateForm = () => {
  const router = useRouter()
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const id = await addAmida({
        amidaTitle: values.amidaTitle,
        amidaValues: createAmidaValues(values.amidaValues, values.amidaCount),
        amidaPlayers: createAmidaPlayers(values.amidaCount),
        amidaBorder: generateAmidaBorder(values.amidaCount),
        expireDate: dataNow(),
      })
      id ? router.push(`/user/${id}`) : alert("作成に失敗しました。")
    },
  })
  const incrementAmidaCount = () => {
    const newCount = formik.values.amidaCount + 1
    if (newCount <= 10) {
      formik.setFieldValue("amidaCount", newCount)
    }
  }
  const decrementAmidaCount = () => {
    const newCount = formik.values.amidaCount - 1
    if (newCount >= 2) {
      formik.setFieldValue("amidaCount", newCount)
    }
  }

  return { ...formik, incrementAmidaCount, decrementAmidaCount }
}

// Functions: あみだくじを作る時の関数たち

function zeros(num: number): string {
  return "0".repeat(num)
}

const replaceOnesWithZeros = (str: string): string => {
  const arr = str.split("")
  let prevVal = "0"
  const newArr = arr.map((val) => {
    if (prevVal === "1" && val === "1") {
      prevVal = "0"
      return "0"
    } else {
      prevVal = val
      return val
    }
  })
  return newArr.join("")
}

const generateAmidaBorder = (count: number): string => {
  const rowBorder = (count - 1) * 7
  let amidaBorder = zeros(count - 1)
  for (let i = 0; i < rowBorder; i++) {
    amidaBorder += Math.round(Math.random())
  }
  amidaBorder = replaceOnesWithZeros(amidaBorder)

  return amidaBorder
}

const createAmidaPlayers = (count: number): string[] => {
  const arr = Array(count).fill("")
  return arr
}

const shuffleArray = (array: string[]): string[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const createAmidaValues = (values: string[], count: number): string[] => {
  const arr = values.slice(0, count)
  return shuffleArray(arr)
}