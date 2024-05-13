const review = [
    {
        id: 0,
        clientName: 'driftwoodhealin',
        clientLocation: 'Canada',
        clientSource: 'Uwork',
        clientReview: 'It was a great experience to work with such a good listener. He was very willing and able to take instruction and follow through on the promises he made. He took my suggestions of how to improve the design and used the nessacary shopify apps to gain the functionality i required in the store. He went as far to reach out to app developers to ensure the app was performing exactly as i wanted it to and didnt stop until i was satisfied. over all a great experience. I will work with him again.'
    },
    {
        id: 2,
        clientName: 'Melissabrown255',
        clientLocation: 'United States',
        clientSource: 'Upwork',
        clientReview: 'Very responsive and dedicated to mobile development. Does excellent programming flow and structure. Highly recommend and definitely knows what they are doing. Responds very well to feedback and does their best to make exactly what you want. I definitely recommend them!!!'
    },
    {
        id: 3,
        clientName: 'wdodson',
        clientLocation: 'United States',
        clientSource: 'Fiverr',
        clientReview: "Wow! I enjoyed working with Manir on this project. He always had a solution to what we were needing and went above and beyond what we asked for. There were several freelancers we reached out to but Manir was truly the best person for the job!"
    },
    {
        id: 4,
        clientName: 'Blaise Labriola',
        clientLocation: 'France',
        clientSource: 'Upwork',
        clientReview: 'I have honestly never been more pleased before after purchasing a service from Fiverr. He was extremely helpful, kind, knowledgeable, and was always communicating with me for whatever request I made. The work was done professionally, efficiently, and according to the timeline I provided. I am excited to work with Him again and I am proud to say I will be coming back to work with Him again in the future.'
    },
    {
        id: 5,
        clientName: 'maitrythakkar',
        clientLocation: 'German',
        clientSource: 'Upwork',
        clientReview: 'I love the revised website! He reflected US - gave a modern update. BUT the most amazing part was his willingness to understand my needs and options. Both times I have hired him, he has exceeded my expectations - from my perspective, more than expected for the money paid. HIGHLY thankful'
    },
    {
        id: 6,
        clientName: 'milo_v',
        clientLocation: 'Australia',
        clientSource: 'Upwork',
        clientReview: 'He was a great help to our project!! He fixed the issue within our time limit and is looking forward to working with him for upcoming projects.'
    },
    {
        id: 7,
        clientName: 'elitewebstar',
        clientLocation: 'Nigeria',
        clientSource: 'Upwork',
        clientReview: 'I have honestly never been more pleased before after purchasing a service from Fiverr. He was extremely helpful, kind, knowledgeable, and was always communicating with me for whatever request I made. The work was done professionally, efficiently, and according to the timeline I provided. I am excited to work with Him again and I am proud to say I will be coming back to work with Him again in the future.'
    },
    {
        id: 8,
        clientName: 'misterjoosy',
        clientLocation: 'Netherlands',
        clientSource: 'Upwork',
        clientReview: 'Very satisfied. James is very professional and the communication is amazing. Thanks a lot and we can not wait to do more work together.'
    },
    {
        id: 9,
        clientName: 'youngerservices',
        clientLocation: 'United States',
        clientSource: 'Upwork',
        clientReview: '2nd time working with this team and they performed just as well as the first! Highly recommend them.'
    },
]
export default function handler(req, res) {
    res.status(200).json(review)
}
