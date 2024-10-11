<script lang="ts" setup>
// meta tages for nuxt seo

// seo
useSeoMeta({
    title: "Your title", // if dynamic () => data.title
    description: "Your description", // if dynamic () => data.description
    twitterTitle: "Your title", // if dynamic () => data.title
    twitterDescription: "Your description", // if dynamic () => data.description
    twitterImage: "/favicon.ico", // if dynamic () => data.image
    twitterCard: "summary", // summary_large_image | summary
    twitterSite: "https://site.url.com", // site url
});

useHead({
    link: [
        {
            rel: "icon",
            type: "image/x-icon",
            href: "/favicon.ico",
        },
    ],
});
</script>
<template>
    <div></div>
</template>

<style></style>
