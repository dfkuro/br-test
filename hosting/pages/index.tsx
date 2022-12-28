import Link from 'next/link'
import Head from 'next/head';

export default function IndexPage() {
	return (
		<div>
			<Head>
				<title>Surman core</title>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<div>
				<h1>
					Hello World.
				</h1>
				<h2>
					dfkuro gives you a salute.
				</h2>
				<Link href="/about">About</Link>
			</div>
		</div>
	)
}
