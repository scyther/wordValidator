const { checkWordExistence } = require("../utils/wordSearch");

exports.searchWord = async (req, res) => {
    const word = req.params.word;
    try {
      results = await checkWordExistence(word);
      res.json({ valid: results.valid });
      
    } catch (error) {
      console.error(error);
      res.status(404).send("External API not working");
    }
};


