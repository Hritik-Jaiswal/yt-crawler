const express = require("express")
const bodyParser = require("body-parser")
const usetube = require("usetube")


const app = express()
// app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const PORT = 5000;

const channel1 = 'UClWTBNGnjXEZOtEwEp9BGTg'
const channel2 = 'UCz6s_ScG0PZThdwhKsUFSRw'
const channel3 = 'UCSxKBShys3kLEZJqJPS0WAg'
const channel4 = 'UCMU--mVsrZ3LE2T9zUBf-Zg'
const channel5 = 'UCkMtcoYWWFeRH_5xygtl2aA'


app.post('/channel1', async (req, res) => {
    const { search } = req.body
    try {
        let channelData = await usetube.searchChannel(search)
        let channelVideo = await usetube.getChannelVideos(search)

        const videosLength = channelVideo.length
        console.log(videosLength)
        
        res.json({channel:channelData, total_videos:videosLength, videos:channelVideo})
    } catch (error) {
        res.json(error)
    }
})
app.post('/channel2', async (req, res) => {
    try {
        let channelData = await usetube.searchChannel(channel2)
        let channelVideo = await usetube.getChannelVideos(channel2)

        const videosLength = channelVideo.length
        console.log(videosLength)
        
        res.json({channel:channelData, total_videos:videosLength, videos:channelVideo})
    } catch (error) {
        res.json(error)
    }
})
app.post('/channel3', async (req, res) => {
    try {
        let channelData = await usetube.searchChannel(channel3)
        let channelVideo = await usetube.getChannelVideos(channel3)
        
        const videosLength = channelVideo.length
        console.log(videosLength)

        res.json({channel:channelData, total_videos:videosLength, videos:channelVideo})
    } catch (error) {
        res.json(error)
    }
})
app.post('/channel4', async (req, res) => {
    try {
        let channelData = await usetube.searchChannel(channel4)
        let channelVideo = await usetube.getChannelVideos(channel4)
        
        const videosLength = channelVideo.length
        console.log(videosLength)

        res.json({channel:channelData,total_videos:videosLength, videos:channelVideo})
    } catch (error) {
        res.json(error)
    }
})
app.post('/channel5', async (req, res) => {
    try {
        let channelData = await usetube.searchChannel(channel5)
        let channelVideo = await usetube.getChannelVideos(channel5)
        
        const videosLength = channelVideo.length
        console.log(videosLength)

        res.json({channel:channelData,total_videos:videosLength, videos:channelVideo})
    } catch (error) {
        res.json(error)
    }
})

app.listen( process.env.PORT || PORT, (req, res) => {
    console.log("Server running...")
})

