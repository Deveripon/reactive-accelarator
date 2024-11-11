import { useRouter } from "next/router";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    logo: (
        <span style={{ color: "", fontSize: "30px" }}>
            Devripon<span style={{ color: "red", fontSize: "50px" }}>.</span>
            <span
                style={{
                    color: "red",
                    fontSize: "30px",
                    fontWeight: "bolder",
                }}></span>
        </span>
    ),
    project: {
        link: "https://github.com/Deveripon/reactive-accelarator",
    },
    docsRepositoryBase:
        "https://github.com/Deveripon/reactive-accelarator/tree/main/",
    // ... other theme options
    useNextSeoProps() {
        const { asPath } = useRouter();
        if (asPath !== "/") {
            return {
                titleTemplate: "%s – Reactive Accelarator",
            };
        }
    },
    head: (
        <>
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1.0'
            />
            <meta
                property='og:title'
                content='রিয়াক্টিভ এক্সিলারেটর'
            />
            <meta
                property='og:description'
                content='রিয়াক্ট ও নেক্সট জে এস এর বাংলায় লিখা ডকুমেন্টেশন যা একজন ডেভেলপারকে রিয়াক্ট ও নেক্সট জে এস নিজের ভাষায় আরও সহজ করে বুঝতে সাহায্য করবে।'
            />
        </>
    ),

    banner: {
        key: "2.0-release",
        text: (
            <a
                href='https://github.com/deveripon/'
                target='_blank'>
                🎉 follow my github →
            </a>
        ),
        dismissible: true,
    },
    toc: {
        backToTop: true,
    },
    sidebar: {
        defaultMenuCollapseLevel: 0,
       /*  autoCollapse: true, */
    },
    footer: {
        text: (
            <span>
                copyright {new Date().getFullYear()} ©{" "}
                <a
                    href='https://github.com/deveripon'
                    target='_blank'>
                    devripon
                </a>
                .
            </span>
        ),
    },
};

