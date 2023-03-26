<template>
    <aside v-if="links.length > 2">
        <h3 class="h5 font-bold toc-title">Table of contents</h3>
        <ul>
            <li v-for="(item, i) of links" :key="i" class="toc-item">
                <a :href="`#${item.id}`">{{item.text}}</a>
                <ul v-if="item.children && item.children.length > 0">
                    <span v-for="(subitem, j) of item.children" :key="j">
                        <li v-if="subitem.text" class="toc-item">
                            <a :href="`#${subitem.id}`">{{subitem.text}}</a>
                        </li>
                    </span>
                </ul>
            </li>
        </ul>
    </aside>
</template>

<script setup>
const props = defineProps({
    links: Object,
});
const {links} = toRefs(props);
</script>
