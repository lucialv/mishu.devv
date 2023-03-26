import {serverQueryContent} from "#content/server";
import {SitemapStream, streamToPromise} from "sitemap";

export default defineEventHandler(async (event) => {

    const visible = await serverQueryContent(event).where({visibility: 1}).only("_path").find();
    const limited = await serverQueryContent(event).where({visibility: 2}).only("_path").find();
    const posts = visible.concat(limited);

    posts.push(
        {
            _path: "/"
        }
    );

    const sitemap = new SitemapStream({
        hostname: `https://${process.env.domain}`
    });

    for(const post of posts) {
        sitemap.write({
            url: post._path,
            changefreq: "weekly"
        });
    }

    sitemap.end();
    return streamToPromise(sitemap);

});