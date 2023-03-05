import { Layout } from "@/components/parts/Layout"

const NotPage = () => {
  return (
    <Layout title="あみだくじサイト | 404エラーPage" description="このページは存在しないURLです。">
      <main className="flex-center section-wrapper">このページは存在しません。</main>
    </Layout>
  )
}

export default NotPage
