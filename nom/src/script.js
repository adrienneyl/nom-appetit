import { Client } from "@notionhq/client"

const notion = new Client({ auth: process.env.NOTION_KEY });

(async () => {
    const databaseId = '0aa2d8d685d64362a99611e319d0d61d';
    const response = await notion.databases.query({
        database_id: databaseId,
        filter: {
            or: [
                {
                    property: 'testing',
                    checkbox: {
                        equals: true,
                    },
                },
            ],
        },
        sorts: [
            {
                property: 'name',
                direction: 'ascending',
            },
        ],
    });

    console.log(response.results[0].properties.name.title[0].plain_text)

})();
