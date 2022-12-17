import axios from "axios";

function generateDadJoke() {
  const config = {
    headers: {
      Accept: "application/json"
    }
  }

  axios.get("https://icanhazdadjoke.com", config).then(res => {
    document.querySelector("#joke").textContent = res.data.joke;
  })
}

export default generateDadJoke;