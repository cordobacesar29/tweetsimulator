import { v4 as uuidV4 } from "uuid";
import { TWEETS } from "../utils/constants";
import {size} from "lodash"

export function saveTweetApi(tweet, userName) {
  const tweets = getTweetsApi();

  if (size(tweets) === 0) {
    const tweetTemp = [
      {
        id: uuidV4(),
        tweet,
        userName,
        createdAt: new Date(),
      },
    ];
    localStorage.setItem(TWEETS, JSON.stringify(tweetTemp));
  } else {
    tweets.push({
      id: uuidV4(),
      tweet,
      userName,
      createdAt: new Date(),
    });
  }
}

export function getTweetsApi() {
  const tweets = localStorage.getItem(TWEETS);
  if (tweets) {
    return JSON.parse(tweets);
  }
  return [];
}
