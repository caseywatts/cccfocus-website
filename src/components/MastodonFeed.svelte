<script>
  import { XMLParser } from "fast-xml-parser";
  import rssFeedXml from "../../public/@cccfocus.rss?raw";
  import FormattedDate from "./FormattedDate.svelte";

  let parser = new XMLParser();
  let rssData = parser.parse(rssFeedXml).rss.channel;
  console.log(rssData);
  let rssJSON = JSON.stringify(rssData);
</script>

<div class="panel panel-main">
  <h3 class="text-2xl">Recent Updates (via Mastodon)</h3>
</div>
{#each rssData.item as toot}
  <div class="panel panel-main prose">
    <div class="text-right text-gray-700 text-sm">
      {rssData.title} on
      <a href={toot.link} class="">
        <FormattedDate date={toot.pubDate} />
      </a>
    </div>
    {@html toot.description}
  </div>
{/each}
<div class="panel panel-main text-center">
  <a class="link" href={rssData.link}>More updates on Mastodon</a>
</div>
