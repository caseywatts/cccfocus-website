<script>
  import { XMLParser } from "fast-xml-parser";
  import rssFeedXml from "../data/@cccfocus.rss?raw";
  import FormattedDate from "./FormattedDate.svelte";

  let parser = new XMLParser({
    attributes: {
      ignore: false,
    },
  });
  let rssData = parser.parse(rssFeedXml).rss.channel;
  console.log(rssData);
  let rssJSON = JSON.stringify(rssData);
</script>

<div class="panel panel-main sm:flex justify-between">
  <h3 class="text-3xl inline-block">Recent Updates</h3>
  <span>RSS: <code>dmv.community/@cccfocus.rss</code> <a target="_blank" class="ml-2 link-color outline outline-2 rounded-full" href="https://www.lifewire.com/what-is-an-rss-feed-4684568">❓</a></span>
</div>
{#each rssData.item as toot}
  <div class="panel panel-main prose">
    {@html toot.description}
    <div class="text-right text-gray-700 text-sm">
      <a href={toot.link} class="">
        <FormattedDate date={toot.pubDate} />
      </a>
    </div>
  </div>
{/each}
<div class="panel panel-main text-center">
  <a class="link" href={rssData.link}>More updates on Mastodon</a>
</div>
