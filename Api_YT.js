
var id_video
var tags_video

fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=old%20town%20road&type=video&videoDuration=short&videoType=any&key=${token}`)
    .then(async resp => {
        let a = (await resp.json())
        a.items.forEach(element => {
            var id_video = element.id.videoId
            //console.log(id_video)
            fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${id_video}&key=${token}`)
                .then(async type => {
                    console.log(await type.json())
                    let b = (await type.json())
                    b.items.forEach(element => {
                        tags_video = element.snippet.tags
                        console.log(tags_video)
                    })
                });
        });
    });



/*
fetch(`https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&id=10&key=${token}`)
.then(async cat => {
    console.log(await cat.json())
})
*/