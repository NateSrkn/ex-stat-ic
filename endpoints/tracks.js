const getJSON = require("../utils/api");

const grabTrackList = async () => {
  const {
    recenttracks: { track: recentTracks },
  } = await getJSON(
    `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=n8bytes&api_key=${process.env.LAST_FM_TOKEN}&format=json`
  );

  const trackList = recentTracks.reduce(
    (obj, track) => {
      const {
        artist: { "#text": artist },
        name: song,
        album: { "#text": album },
        date: { uts: date },
      } = track;
      let isPlaying = false;
      if (track["@attr"]) {
        isPlaying = true;
      }
      const data = { artist, song, album, date };
      if (isPlaying) {
        obj["nowPlaying"] = data;
      }

      if (!obj["recentArtists"].includes(artist)) {
        obj["recentArtists"].push(artist);
      }
      obj["recentTracks"].push(data);
      return obj;
    },
    {
      nowPlaying: null,
      recentArtists: [],
      recentTracks: [],
    }
  );
  return trackList;
};

module.exports = grabTrackList;
