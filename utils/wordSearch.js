const axios = require("axios");

exports.checkWordExistence = async (word) => {
  const apiResponse = await axios.get(
    `https://api.api-ninjas.com/v1/dictionary?word=${word}`,
    { headers: { "X-Api-Key": process.env.API_KEY } }
  );
  return apiResponse.data;
};
