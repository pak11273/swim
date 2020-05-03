import { Layout } from "components"
import Link from "next/link"

export default () => (
  <Layout>
    This is a static page goto{" "}
    <Link href="/">
      <a>dynamic</a>
    </Link>{" "}
    page.
  </Layout>
)
