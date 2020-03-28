import { getKey } from "./utils";

const baseUrl = "https://api.everhour.com";

export default {
  getClients: async () => {
    const key = await getKey();

    const res = await fetch(`${baseUrl}/clients`, {
      headers: {
        "X-Api-Key": key
      }
    });

    const json = await res.json();

    return json;
  },
  getProjects: async () => {
    const key = await getKey();

    const res = await fetch(`${baseUrl}/projects`, {
      headers: {
        "X-Api-Key": key
      }
    });

    const json = await res.json();
    console.log(json);

    return json;
  }
};
