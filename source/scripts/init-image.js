const axios = require('axios');
const fs = require('fs');
const path = require('path');

const googleAlbumIds = {
    2020: 'TqtkorN3cWxrSwHe7',
    2019: 'K4M8s3gFrpq7xdkA7',
    2018: 'scYpuLpVvb5QnidF7',
    2017: 'aSNBNc9DLA2Q9vS98'
};

const retrievePhotoAlbum = async (id) => {
    const response = await axios.get(`https://photos.app.goo.gl/${id}`, {headers: {"Access-Control-Allow-Origin": "*"}
    });
    return response.data
};

const extractPhotos = (content) => {
    const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g
    const links = new Set();
    let match
    while (match = regex.exec(content)) {
        links.add(match[1])
    }
    return Array.from(links)
};

const googleImagesJson = {};
Object.keys(googleAlbumIds).map(year => {
    if (!googleAlbumIds[year]){
        return;
    }
    let y = year.toString();
    retrievePhotoAlbum(googleAlbumIds[y]).then( content => {
        const googleImages = extractPhotos(content);
        googleImagesJson[y] = googleImages;

        if (fs.existsSync(path.join(__dirname,'../src/data/google-images.json'))) {
            fs.unlink(path.join(__dirname,'../src/data/google-images.json'), function (err) {
                if (err) {
                    console.error(`Error deleting ${path.join(__dirname,'../src/data/google-images.json')}: ${err}`);
                }
                console.log(`${path.join(__dirname,'../src/data/google-images.json')} has been deleted.`);
            });
        }
        fs.writeFile(path.join(__dirname,'../src/data/google-images.json'), JSON.stringify(googleImagesJson), (err, res) => {
            if (err) {
                console.error(`Error creating ${path.join(__dirname,'../src/data/google-images.json')}: ${err}`)
            }
        })
    });
});
