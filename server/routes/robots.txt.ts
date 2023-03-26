export default defineEventHandler((event) => {
    appendHeader(event, "Content-Type", "text/plain");
    return `User-agent: *\nSitemap: https://${process.env.domain}/sitemap.xml`;
});