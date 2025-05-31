import { v4 as uuidV4 } from "uuid";
import { TWEETS } from "../utils/constants";
import { size, remove } from "lodash";

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
    localStorage.setItem(TWEETS, JSON.stringify(tweets));
  }
}

export function getTweetsApi() {
  const tweets = localStorage.getItem(TWEETS);
  if (tweets) {
    return JSON.parse(tweets);
  }
  return [];
}

export function deleteTweetApi(id) {
  const tweets = getTweetsApi();

  remove(tweets, function (tweet) {
    return tweet.id === id;
  });

  localStorage.setItem(TWEETS, JSON.stringify(tweets));
}
