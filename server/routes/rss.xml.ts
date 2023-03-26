import {serverQueryContent} from "#content/server";
import {Feed} from "feed";

// Parsing function by szadoww - https://github.com/szadoww

const parse = (json) => {

    const type = json["type"];
    const tag = json["tag"];
    const children = json["children"];

    let result = "";

    if(tag) {
        
        result += `<${tag}`;
        const props = json["props"];

        if(props) {
            for(const prop of Object.entries(props)) {
                const key = prop[0];
                const value = prop[1];

                if(key == "code") continue;

                result += ' ' + key + '="' + value + '"';
            }
        }

        result += ">";
    }

    if(type == "text") result += json["value"];

    if(children) {
        for(const child of children) result += parse(child);
    }

    if(tag) result += `</${tag}>`;

    return result
        .replaceAll("\r\n", "<br>")
        .replaceAll("\n", "<br>");
}

export default defineEventHandler(async (event) => {

    const visible = await serverQueryContent(event).where({visibility: 1}).find();
    const limited = await serverQueryContent(event).where({visibility: 2}).find();
    const posts = visible.concat(limited);

    const feed = new Feed({
        id: "rss",
        title: `Blog - ${process.env.title}`,
        description: process.env.description,
        link: `https://${process.env.domain}`,
        image: process.env.favicon,
        copyright: `Copyright ${new Date().getFullYear()} - ${process.env.title}`
    });

    for(const post of posts) {
        feed.addItem({
            title: post.title,
            id: `https://${process.env.domain}${post._path}`,
            link: `https://${process.env.domain}${post._path}`,
            image: post.image,
            description: post.description,
            published: new Date(post.created * 1000),
            content: `
                <p>
                    <img alt="Cover image" src="${post.image}">
                </p>
                <p>You are viewing an article as a preview for RSS readers and it may be slightly different from the original article. <a href='https://${process.env.domain}${post._path}'>Click here</a> to see full article.</p> 
                ${parse(post.excerpt)}
                <p>For more articles, visit <a href="https://${process.env.domain}">${process.env.domain}</a> or subscribe this RSS channel - <a href="https://${process.env.domain}/rss.xml">${process.env.domain}/rss.xml</a>.</p>
            `,
            date: undefined
        });
    }

    appendHeader(event, "Content-Type", "application/xml");
    return feed.rss2();

});