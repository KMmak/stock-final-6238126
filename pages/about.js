import Head from 'next/head'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
    <center><Head>
      <title>About Page</title>
    </Head>
    <h1>Hello, folks </h1>
    <p>
      Existence is pain.
    </p>
    <Link href="/">Home</Link></center>

    </>
  )
}