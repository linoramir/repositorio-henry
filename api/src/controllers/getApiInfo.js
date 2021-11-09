const axios = require("axios");
const { API_KEY } = process.env;

const getApiInfo = () => {
  const apiUrl = axios
    .get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    .then((res) =>
      res.data.map((el) => {
        return {
          id: el.id,
          name: el.name,
          heightMin: el.height.metric.split(" - ")[0],
          heightMax: el.height.metric.split(" - ")[1]
            ? el.height.metric.split(" - ")[1]
            : Math.round(el.height.metric.split(" - ")[0] * 1.1),
          weightMin:
            el.weight.metric.split(" - ")[0] !== "NaN"
              ? el.weight.metric.split(" - ")[0]
              : el.weight.metric.split(" - ")[1]
              ? Math.round(el.weight.metric.split(" - ")[1] * 0.6)
              : "30",
          weightMax: el.weight.metric.split(" - ")[1]
            ? el.weight.metric.split(" - ")[1]
            : "39",
          life_span: el.life_span,
          temperaments: el.temperament ? el.temperament : null,
          image: el.image.url,
        };
      })
    );
  return apiUrl;
};

module.exports = {
  getApiInfo,
};
