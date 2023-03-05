import Link from "next/link"
import { Layout } from "@/components/parts/Layout"

export const Home = () => {
  const title = "あみだくじサイト | home"
  const description = "このあみだくじサイトの説明ページです。"
  return (
    <Layout title={title} description={description}>
      <div className="">
        <section className="section-wrapper">
          <div>
            当サイトではあみだくじを簡単に作ることが出来ます。
            スマホ、PCなどに対応していて、完全無料で会員登録も必要ありません。
            ページ移動した時に広告が表示されることがありますが、ご了承下さい。
          </div>
        </section>
        <div className="flex-center">
          <Link href="/create" className="a-primary">
            あみだくじを作成する
          </Link>
        </div>
        <section className="section-wrapper">
          <h2 className="">このサイトの利用方法</h2>
          <ol className="">
            <li>あみだくじ作成ページで、あみだくじを作成します。</li>
            <li>作成したあみだくじのURLをコピーして、メールやLineなどで共有してご活用下さい。</li>
            <li>あみだくじは全員が選択すると、自動的に表示されます。</li>
            <li>予期せぬエラーが発生した場合は、ページをリロードすることで解決することがあります。</li>
          </ol>
        </section>
        <h2 className="">プライバシーポリシー・免責事項</h2>
        <section className="section-wrapper bg-white">
          <h3 className="">免責事項</h3>
          <div>
            当サイトからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。また当サイトのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
          </div>
          <h3 className="">著作権について</h3>
          <div>
            当サイトで掲載している文章や画像などにつきましては、無断転載することを禁止します。
            当サイトは著作権や肖像権の侵害を目的としたものではありません。
          </div>
          <h3 className="">リンクについて</h3>
          <div>
            当サイトは基本的にリンクフリーです。リンクを行う場合の許可や連絡は不要です。むしろ多くの方に利用されたいのでSNSで拡散して頂けると幸いです。
            ただし、インラインフレームの使用や画像の直リンクはご遠慮ください。
          </div>
        </section>
      </div>
      <section className="section-wrapper">
        <h2 className="">よくある質問Q&A</h2>
        <div className="">
          <h4>Q. あみだくじサイトの特徴は？</h4>
          <p className="anser-text">
            A.このサイトの特徴として、ユーザ登録や課金等一切ないので無料で気楽にあみだくじを作成できます。また、みんなでくじ引きをする用途だけでもなく、1人の時でも5択から何かを選びたいという時にもご利用いただけるよう、「残りすべてを選択」ボタンがあります。そのボタンを押すことによって一気に自動で「-」が入力されて結果を表示することができます。
          </p>
        </div>
        <div className="">
          <h4>Q. あみだくじ作成できる本数は</h4>
          <p className="anser-text">
            A.2～10本で作成できます。多すぎると公平性に欠けるため本数制限を行っています。あくまでも公平なゲームである事が大切だと思います。11本以上の場合は、あみだくじではなくて別の方法で決めることをおすすめします。
          </p>
        </div>
        <div className="">
          <h4>Q. あみだくじの消し方は？</h4>
          <p className="anser-text">
            A.
            このサイトのあみだくじは一度作成したら取消、削除できません。また、選択したら取消も出来ません。それによって公平になるので当然な仕様だと思います。ですが、ＵＲＬさえ共有しなければ、新たに新規作成してあみだくじをやり直すことができます。
          </p>
        </div>
        <div className="">
          <h4>Q. あみだくじのデータ保存期間は？</h4>
          <p className="anser-text">
            A.10日間で自動的に削除されます。ただし、10日以内でもデータの保証はしないためデータが消えたらまずい事柄で本サイトのご利用はご遠慮ください。
          </p>
        </div>
        <div className="">
          <h4>Q. もしエラーになった場合は？</h4>
          <p className="anser-text">
            A.エラーが発生した場合は、たいてい画面をリロードすることで解決できます。万が一、解決できない場合は問合せページからご連絡をお願い致します。
          </p>
        </div>
        <div className="">
          <h4>Q. 本サイトあみだくじの(仕組み)ロジックは？</h4>
          <p className="anser-text">
            A.JavaScriptの乱数ではしごの横棒1本づつON/OFFを決定しています。そのため、毎回違う横棒が発生する仕組みとなっています。
          </p>
        </div>
      </section>
      <div className="flex-center">
        <Link href="/create" className="a-primary">
          あみだくじを作成する
        </Link>
      </div>
    </Layout>
  )
}

export default Home
