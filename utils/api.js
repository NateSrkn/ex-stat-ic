const axios = require("axios");

const getJSON = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return { error };
  }
};

module.exports = getJSON;
