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
                content='Reactive Accelarator'
            />
            <meta
                property='og:description'
                content='A documentation platform for developers'
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
        defaultMenuCollapseLevel: 2,
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

