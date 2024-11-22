export default [
    {
        label: "Welcome",
        children: [
            { label: "Using the Search Screen", children: [] },
            { label: "Password security", children: [] },
            { label: "Work Station Set Up", children: [] },
        ],
    },
    {
        label: "Administration",
        children: [
            {
                label: "System", children: [
                    {
                        label: "Site Configuration", children: [
                            { label: "Site Configuration Screen Reference", children: [] },
                            { label: "Setting Site Configurations", children: [] },
                        ]
                    },
                    {
                        label: "Edits", children: [
                            { label: "Edits Screen Reference", children: [] },
                            { label: "Modifying Lists of Values", children: [] },
                        ]
                    },
                ]
            },
            {
                label: "General", children: [
                    {
                        label: "Facility", children: [
                            { label: "Facility Screen Reference", children: [] },
                            { label: "Creating Your Facility", children: [] },
                        ]
                    },
                    {
                        label: "Action/Meeting", children: [
                            { label: "Action/Meeting Screen Reference", children: [] },
                            { label: "Creating Actions", children: [] },
                        ]
                    },
                ]
            },
            { label: "Material", children: [] },
            { label: "Waste", children: [] },
            { label: "Queries", children: [] },
        ],
    },
    {
        label: "Material",
        children: [
            {
                label: "Catalog",
                children: [
                    {
                        label: "Company", children: [
                            { label: "Company Screen Reference", children: [] },
                            { label: "Creating a company record", children: [] },
                        ]
                    },
                    {
                        label: "Product Groups", children: [
                            { label: "Product Groups Screen Reference", children: [] },
                            { label: "Creating Product Groups", children: [] },
                        ]
                    },
                ],
            },
            {
                label: "Requests",
                children: [],
            },
        ],
    },
    {
        label: "HMMS Waste",
        children: [
            { label: "Flow of Waste through HMMS", children: [] },
            {
                label: "Characterization",
                children: [
                    {
                        label: "Waste Steams", children: [
                            { label: "Waste Steam Screen Reference", children: [] },
                            { label: "Creating Waste Steam", children: [] },
                        ]
                    },
                    {
                        label: "Waste Profiles", children: [
                            { label: "Waste Profiles Screen Reference", children: [] },
                            { label: "Creating Waste Profiles", children: [] },
                        ]
                    },
                ],
            },
        ],
    },
    {
        label: "HMMS Reporting and Analytics",
        children: [
            {
                label: "Reports and Analytics", children: [
                    { label: "Reports and Analytics Screen Reference", children: [] },
                    { label: "Creating Reports and Analytics", children: [] },
                ]
            },
            {
                label: "Air", children: [
                    { label: "HAPS Report", children: [] },
                    { label: "VOC Report", children: [] },
                    { label: "Emissions", children: [] },
                ]
            },
        ],
    },
];