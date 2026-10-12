import Link from 'next/link';
export default function NotFound() { return <main id="main" className="container not-found"><span className="eyebrow">404</span><h1>这页还没写进故事。</h1><Link href="/" className="button primary">回到作品集</Link></main>; }
