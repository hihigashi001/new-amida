import { Layout } from "@/components/parts/Layout"

const NotPage = () => {
  return (
    <Layout title="あみだくじサイト | 500エラーPage" description="バックエンドエラーページです。">
      <main className="flex-center section-wrapper">すみません。サーバ側でトラブルが起きました。</main>
    </Layout>
  )
}

export default NotPage
