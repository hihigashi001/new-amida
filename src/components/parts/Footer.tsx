import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { FaHome, FaLine, FaLink, FaTwitter } from "react-icons/fa"
import { LineShareButton, TwitterShareButton } from "react-share"

export const Footer = () => {
  const [isCopied, setIsCopied] = useState(false)
  const router = useRouter()
  const currentUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`
  const message = "あみだくじはこちら"

  const handleCopy = () => {
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 3000)
  }

  return (
    <footer className="footer-fixed">
      <div className="footer-wrapper">
        <Link href="/" className="footer-items">
          <FaHome size={35} />
          <div>Home</div>
        </Link>
        <div className="footer-items">
          <TwitterShareButton url={currentUrl} title={message}>
            <FaTwitter size={35} />
            <div>Twitter</div>
          </TwitterShareButton>
        </div>
        <div className="footer-items">
          <LineShareButton url={currentUrl} title={message}>
            <FaLine size={35} />
            <div>Line</div>
          </LineShareButton>
        </div>
        <div className="footer-items copy-button">
          <CopyToClipboard text={currentUrl} onCopy={handleCopy}>
            <FaLink size={35} />
          </CopyToClipboard>
          <div>Copy</div>
          {isCopied && <div className="copied">Copied!</div>}
        </div>
      </div>
    </footer>
  )
}
