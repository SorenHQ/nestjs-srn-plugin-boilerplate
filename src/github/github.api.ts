export const githubApi = [
    {
        "action": "commits",
        "description": "get commits od repo",
        "title": "commit list ",
        "meta": {
            "path": "GET /repos/{owner}/{repo}/commits",
            "dialog": {
                name: "Commit ",
                "description": "",
                title: "Commits related ",
                params: [{
                    attr: { multi: false, ref: "" },
                    key: "owner",
                    value: [],
                    title: "Enter Repo Owner",
                    type: "string"

                },{
                    attr: { multi: false, ref: "" },
                    key: "repo",
                    value: [],
                    title: "Enter Repo name",
                    type: "string"

                }]
            }
        }
    },
    {
        "action": "repolist",
        "description": "github repo list",
        "title": "repo list ",
        "meta": {
            "path": "GET /orgs/{org}/repos",
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