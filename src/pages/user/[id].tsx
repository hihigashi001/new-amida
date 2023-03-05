import { AmidaBoard } from "@/components/pages/amida/AmidaBoard"
import { Layout } from "@/components/parts/Layout"
import { useAmida } from "@/hooks/useAmida"

const Amida = () => {
  const title = "あみだくじサイト | あみだくじ"
  const description = "あみだくじページです。"
  const { amidaData, error, loading } = useAmida()

  if (error) {
    return <Layout title={title} description={description}><div className="flex-center section-wrapper">Error...</div></Layout>
  }

  if (loading) {
    return <Layout title={title} description={description}><div className="flex-center section-wrapper">Loading...</div></Layout>
  }

  const amidaTitle = amidaData.amidaTitle
  return (
    <Layout title={title} description={description}>
      <h2>あみだくじ {amidaTitle}</h2>
      <AmidaBoard />
    </Layout>
  )
}

export default Amida
