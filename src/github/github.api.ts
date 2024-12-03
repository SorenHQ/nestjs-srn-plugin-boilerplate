export const githubApi = [
    {
        "action": "repolist",
        "description": "",
        "title": "",
        "meta": {
            "path": "GET /orgs/{org}/repos",
            "requiredParamsKey": { org: "org" },
            "dialog": {
                name: "Organization",
                "description": "Set Selected Organization that Associated With Access Token",
                title: "org",
                params: [{
                    attr: { multi: false, ref: "" },
                    key: "org",
                    value: [],
                    title: "Enter Github Organization",
                    type: "string"

                }]
            }
        }
    },
    {
        "action": "access_token",
        "description": "",
        "title": "",
        "meta": {

            "persist": true,
            "dialog":
            {
                name: "access token",
                "description": "Set Access Token ",
                title: "access token",
                params: [{
                    "attr": {
                        "multi": false,
                        "ref": ""
                    },
                    "key": "git_token",
                    "value": [
                    ],
                    "title": "Enter your Github Access Token",
                    "type": "string"
                }]
            },
        }
    },

]



export function getApiByAction(action: string): any {
    return githubApi.find(el => el.action == action) || null
}