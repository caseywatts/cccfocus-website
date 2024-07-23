import fs from "fs";

const mastodonURL = "https://dmv.community/@cccfocus.rss";

fetch(mastodonURL).then((response) => {
  response.text().then((rssXml) => {
    fs.writeFileSync("public/@cccfocus.rss", rssXml);
  });
});
