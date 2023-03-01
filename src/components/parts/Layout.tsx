import Head from "next/head"
import { Footer } from "@/components/parts/Footer"
import { Header } from "@/components/parts/Header"

type Props = {
  title: string
  description: string
  children: React.ReactNode
}

export const Layout = ({ title, description, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="content-wrapper">
        <Header />
        <main className="main-wrapper">{children}</main>
        <Footer />
      </div>
    </>
  )
}
