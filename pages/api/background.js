const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'DropBox',
                degree: 'Sr, Computer System Engineering',
                detail: "Bachelor's Degree in Computer System Engineering from DropBox.",
                year: '2016-2019'
            },
            {
                id: 1,
                title: 'Texas Tech University',
                degree: 'BS, Science Subjects',
                detail: "awarded Bachelor’s Degree, Computer Science",
                year: '2012-2015'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Andela',
                role: 'Senior Frontend Developer',
                url: 'Austin',
                desc: 'As a senior developer, I have built smart and functional web and mobile applications at Andela company in Austin.',
                year: '04/2022 - Present',
                location: 'Austin, United State'
            },
            {
                id: 2,
                title: 'Salesforce',
                role: 'Mobile Developer',
                url: 'Austin',
                desc: 'As a main developer, I have built smart and functional mobile app development at DropBox company in Austin.',
                year: '07/2019 - 03/2022',
                location: 'Austin, United State'
            },
            {
                id: 3,
                title: 'DropBox',
                role: 'Web designer',
                url: 'Austin',
                desc: "As a main developer, I have built visually appealing user interface of web projects at DropBox company in Austin.",
                year: '04/2016 - 06/2019',
                location: 'Peshawar, Pakistan'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
