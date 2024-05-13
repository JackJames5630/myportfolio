const expertise = [
    {
        id: 0,
        title: 'E-Commerce Development',
        desc: 'My mission is to build an innovation and attractive e-commerce site that has great SEO, high performance and good UX.',
    },
    {
        id: 1,
        title: 'NFT Marketplace Development',
        desc: "Whether it's a simple landing page with a mint function or a beautiful, complex, in-depth website I deliver A+ quality.",
    },
    {
        id: 2,
        title: 'Dex/Defi Development',
        desc: 'Get your own platform with me where you can trade and exchange your coins and bitcoins in this amazing crypto universe.',
    },
    {
        id: 3,
        title: 'Mobile Application Development',
        desc: "Using cross platform language like Ionic and react native, android and swift, you can experiment with your ideas on your phone.",
    },
    {
        id: 4,
        title: 'Smart Contract Development',
        desc: "When ready we will deploy your contract to Rinkeby for testing and then to Mainnet for launch. Your images and metadata will never be exposed and I will be on-call in case any issues arise.",
    },
    {
        id: 5,
        title: 'Game Development',
        desc: "Make a P2E Game with your NFT and FT and play around with it, and make some money. so funny!!!"
    }
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
