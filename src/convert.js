const convert = require("yt-converter");

const getInfo = async (url) => {
  try {
    const res = await convert.getInfo(url);
    const { title } = res;
    return title
  } catch (error) {
    console.log(error);   
  }
}

const convertAudio = async (url, path) => {
  try {
    const title = await getInfo(url);
    const res = await convert.convertAudio({
      url,
      itag: 140,
      directoryDownload: path,
      title
    });

    return res
  } catch (error) {
    console.log(error);   
  }
}

const convertVideo = async (url, path) => {
  try {
    const title = await getInfo(url);
    const res = await convert.convertVideo({
      url,
      itag: 136,
      directoryDownload: path,
      title
    });

    return res
  } catch (error) {
    console.log(error);   
  }
}

module.exports = { getInfo, convertAudio, convertVideo };