import { CreateForm } from "@/components/pages/create/CreateForm"
import { Layout } from "@/components/parts/Layout"

export const Create = () => {
  const title = "あみだくじサイト | あみだくじ作成"
  const description = "あみだくじを作成するページです。"
  return (
    <Layout title={title} description={description}>
      <h2>あみだくじの作成</h2>
      <CreateForm />
    </Layout>
  )
}

export default Create