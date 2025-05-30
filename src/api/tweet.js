import { v4 as uuidV4 } from "uuid";
import { TWEETS } from "../utils/constants";

export function saveTweetApi(tweet, userName) {
    const tweets = getTweetsApi();

  const tweetTemp = {
    id: uuidV4(),
    tweet,
    userName,
    createAt: new Date(),
  };
  localStorage.setItem(TWEETS, JSON.stringify(tweetTemp));
}

export function getTweetsApi() {
  const tweets = localStorage.getItem(TWEETS);
  if (tweets) {
    return JSON.parse(tweets);
  }
  return [];
}
