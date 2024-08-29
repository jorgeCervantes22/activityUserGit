import { httpClientPlugins as http } from "../../src/shared/httpClient.plugin.js";

export class HttpRequest {
  async getData() {
    const url = "https://api.github.com/users/jorgeCervantes22/events";

    const config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-GitHub-Api-Version": "2022-11-28",
        //TODO:Pasar a variable de entorno
        Authorization: `Bearer ${process.env.TOKEN_GIT}`,
      },
    };

    const response = await http.getData(url, config);
    if (!response.ok) {
      throw new Error("WARN", response.status);
    }
    const data = await response.text();
    console.log(JSON.parse(data));
    return JSON.parse(data);
  }
}
const request = new HttpRequest();
request.getData();
