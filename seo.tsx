import { Metadata } from "next";


const metadataBase = new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000");

// static meta tages for next seo

export const metadata: Metadata = {
    title: {
        default: "Your title",
        template: "%s | Site name", // ?
    },
    description: "Your description",
    openGraph: {
        title: "Your title",
        description: "Your description",
        url: "https://apps.com/", // site url
        siteName: "Site Name",
        images: [
            {
                url: "image url",
                type: "image/svg", // image type
                width: 1080,
                height: 630,
                alt: "Your title",
            },
            {
                url: "image url",
                type: "image/svg", // image type
                width: 600,
                height: 314,
                alt: "Your title",
            },
        ],
        locale: "your locale",
        type: "website",
        phoneNumbers: "phoen number",
    },
    twitter: {
        card: "summary_large_image", // summary | summary_large_image
        title: "Your title",
        description: "Your description",
        site: "Site name",
        images: {
            url: "image url",
            type: "image/svg", // image type
            alt: "Your title",
        },
    },

    metadataBase,
    robots: {
        index: false,
    },
    icons: "/favicon.ico",
    alternates: {
        canonical: "site url",
        languages: {
            "uz-UZ": "/",
            "kr-KR": "/kr",
            "en-US": "/en",
            "ru-RU": "/ru",
        },
    },
    verification: {
        google: "google",
        yandex: "yandex",
        yahoo: "yahoo",
        other: {
            me: [
                "gamil@gmail.com",
                "https://t.me/gamil",
                "https://www.youtube.com/@gamil",
                "http://instagram.com/gamil",
                "https://www.facebook.com/gamil",
                "http://x.com/gamil",
            ],
        },
    },
    applicationName: "site title",
    referrer: "origin-when-cross-origin",
    keywords: ["keywords", "keywords"],
    authors: [{ name: "authors name" }, { name: "authors name", url: "authors url" }],
    creator: "creator",
    publisher: "publisher",
    formatDetection: {
        email: true,
        address: true,
        telephone: true,
    },

    // @ts-ignore
    prefix: "og: http://ogp.me/ns#",
};

// dynamic seo meta data

export async function generateMetadata() {
    const { data } = (await getData()) ?? [];

    const sharedMeta = {
        title: data?.get_title || "protsess.uz",
        description: data?.get_description || "Default description",
        images: data?.detail_image?.original_url || "/favicon.ico",
    };

    return {
        title: sharedMeta.title,
        description: sharedMeta.description,
        category: data?.section.title_uz,
        keywords: data.tags,
        openGraph: {
            ...sharedMeta,
            url: "https://apps.com/", // site url
            siteName: "Site name",
            images: [
                {
                    url: sharedMeta.images,
                    alt: sharedMeta.title,
                    type: "image/png", // image type
                    width: 1200,
                    height: 630,
                },
                {
                    url: sharedMeta.images,
                    alt: sharedMeta.title,
                    type: "image/png", // image type
                    width: 900,
                    height: 450,
                },
            ],
            tags: data.tags,
            publishedTime: data.publish_date,
            locale: "your locale",
            type: "article", // your card type
            phoneNumbers: "phone number",
        },
        twitter: {
            ...sharedMeta,
            card: "summary_large_image", // summary | summary_large_image
            images: {
                url: sharedMeta.images,
                alt: sharedMeta.title,
                type: "image/png", // image type
            },
            site: "Site name",
        },
        // @ts-ignore
        prefix: "og: http://ogp.me/ns#",
    };
}

function page() {
    return <div> Home </div>;
}

export default page;
