export const protocolStats = [
  { label: 'Target TPS', value: '1000' },
  { label: 'Block Time', value: '1s' },
  { label: 'Token', value: 'ELD' },
  { label: 'Consensus', value: 'PoS' },
  { label: 'Testnet', value: 'LIVE' },
];

export const features = [
  {
    number: '01',
    eyebrow: 'Earn',
    title: 'Provide Storage',
    body: 'Run a node on any device - laptop, phone, server. Contribute disk space to decentralized storage. Earn ELD tokens proportional to uptime and capacity.',
    note: 'Any device',
  },
  {
    number: '02',
    eyebrow: 'Share',
    title: 'Ephemeral Content-Addressed Data',
    body: 'Upload content-addressed files identified by their cryptographic hash. Set your own TTL (Time To Live). Ephemeral storage lives exactly as long as you need, then automatically expires and is cleaned from the network. Fast, cheap, and self-managing.',
    note: 'TTL-controlled - Automatic expiry',
  },
  {
    number: '03',
    eyebrow: 'Build',
    title: 'Decentralized Apps',
    body: 'Full API and SDK access. Perfect for live streaming, caching layers, temporary media, session data, social feeds, and any application that needs fast, unstoppable ephemeral storage that does not live forever.',
    note: 'Open protocol',
  },
];

export const footerColumns = [
  {
    heading: 'ELD',
    items: ['a decentralized ephemeral storage protocol.', '/eld/ - old nordic word for fire.'],
  },
  {
    heading: 'Protocol',
    items: [
      { label: 'Litepaper', href: 'https://docs.eld.network/litepaper' },
      { label: 'Roadmap', href: 'https://docs.eld.network/roadmap' },
      { label: 'Documentation', href: 'https://docs.eld.network' },
    ],
  },
  {
    heading: 'Resources',
    items: [
      { label: 'Eld Blockchain Explorer', href: 'https://explorer.eld.network' },
      { label: 'GitHub', href: 'https://github.com/eldnetwork' },
    ],
  },
  {
    heading: 'Community',
    items: [{ label: 'X / Twitter', href: 'https://x.com/eld_network' }],
  },
];
