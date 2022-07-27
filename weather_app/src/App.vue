<template>
  <div class="container">
    <div class="appClass" :id="customID">
      <main>
        <div class="search-box">
          <input
            v-model="query"
            @keypress="fetchWeather"
            type="text"
            class="search-bar"
            placeholder="Search..."
          />
        </div>
        <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
          <div class="location-box">
            <div class="location">
              {{ weather.name }}, {{ weather.sys.country }}
            </div>
            <div class="date">{{ dateBuilder() }}</div>
          </div>

          <div class="weather-box">
            <div class="temp">{{ weather.main.temp.toFixed(1) }}°c</div>
            <div class="weather">{{ weather.weather[0].main }}</div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      api_key: "a46f33595dcc1b2d32ae2645dfe42df2",
      url_base: "https://api.openweathermap.org/data/2.5/",
      query: "",
      weather: {},
      customID: "appp",
    };
  },
  methods: {
    fetchWeather(e) {
      if (e.key == "Enter") {
        fetch(
          `${this.url_base}weather?q=${this.query}&units=metric&appid=${this.api_key}`
        )
          .then((res) => {
            return res.json();
          })
          .then(this.setResults);
      }
    },
    setResults(results) {
      this.weather = results;

      if (this.weather.main.temp > 20) {
        this.customID = "appHot";
      } else {
        this.customID = "appp";
      }
    },
    dateBuilder() {
      let d = new Date();
      let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      let days = ["Sun", "Mon", "Tus", "Wed", "Thu", "Fri", "Sat"];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`;
    },
  },
  //https://api.openweathermap.org/data/2.5/weather?q=London&appid=a46f33595dcc1b2d32ae2645dfe42df2
};
</script>
