import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./styles.css";
import { config, Map, MapStyle } from "@maptiler/sdk";


async function init() {

  config.apiKey = "YOUR MAPTILER API KEY";

  const map = new Map({
    container: "map",
    style: MapStyle.OUTDOOR,
    hash: true
  });

  // The map instance needs some time to load content and get ready.
  // Make sure the map is ready by "awaiting" this specific function:
  await map.onReadyAsync();

  // Only then we can add elements to the map...
  console.log("The map instance is ready", map);
}

init();
