module.exports = {
    docs: [
        {
            type: 'category',
            label: "AgileTs",
            collapsed: false,
            items: ["main/introduction", "main/style-guide", "main/installation", "main/contributing"]
        },
        {
            type: 'category',
            label: 'Quick Start',
            collapsed: false,
            items: ["quick_start/react"],
        },
        {
            type: 'category',
            label: "Packages",
            items: [
                {
                    type: 'category',
                    label: 'core',
                    items: ["packages/core/introduction", "packages/core/installation"]
                },
                {
                    type: 'category',
                    label: 'api',
                    items: ["packages/api/introduction", "packages/api/installation"]
                },
                {
                    type: 'category',
                    label: 'multieditor',
                    items: ["packages/multieditor/introduction", "packages/multieditor/installation"]
                },
                {
                    type: 'category',
                    label: 'react',
                    items: [
                        "packages/react/introduction",
                        "packages/react/installation",
                        {
                            type: 'category',
                            label: 'Functionalities',
                            items: ["packages/react/functionalities/useAgile", "packages/react/functionalities/agileHOC"]
                        }
                    ]
                }
            ]
        }
    ]
};
