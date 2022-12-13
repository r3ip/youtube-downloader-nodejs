const { getInfo, convertAudio, convertVideo } = require('./convert');
const os = require('os')

const pathBase = os.homedir();
const path = `${pathBase}/Downloads/`;

const url = 'https://www.youtube.com/watch?v=RxCEMy022Do&list=RDRxCEMy022Do&start_radio=1';

const getInfoMusic = async (url) => {
  const res = await getInfo(url);
  console.log(res)
}

const convertMusic = async (url, path) => {
  const res = await convertAudio(url, path);
  console.log(`download... ${res} - mp3`)
}

const convertVideoMusic = async (url, path) => {
  const res = await convertVideo(url, path);
  console.log(`download... ${res} - mp4`)
}

convertVideoMusic(url,path);