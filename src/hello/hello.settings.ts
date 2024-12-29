export const HelloAttributes = [
  {
    "method": "hour_cron",
    "description": "hourly cron",
    "title": "Hour",
    "meta": {
      "persist": true,
      "dialog": {
        "name": "hour_cron",
        "title": "hourly cron",
        "description": "Repeat Hourly",
        "params": [
          {

            "attr": {
              "regex_pattern": {
                "pattern": "^[pattern]$",
                "message": "Validation message"
              },
              "input_type": "string",
              "secret": false,
              "required": true
            },
            "options": [],
            "key": "p1",
            "placeholder": "Enter Number As Hour ",
            "value": [],
            "title": "How hour",
            "description": "Parameter description"
          }
        ]
      }
    }
  },
  {
    "method": "webhook",
    "description": "this method send events to given url",
    "title": "Url",
    "meta": {
      "persist": true,
      "dialog": {
        "name": "webhook",
        "title": "Url",
        "description": "this method send events to given url",
        "params": [
          {

            "attr": {
              "regex_pattern": {
                "pattern": "^[pattern]$",
                "message": "Validation message"
              },
              "input_type": "string",
              "secret": false,
              "required": true
            },
            "options": [],
            "key": "target_url",
            "placeholder": "Enter Url",
            "value": [],
            "title": "Url",
            "description": "Parameter description"
          },
          {

            "attr": {
              "regex_pattern": {
                "pattern": "^[pattern]$",
                "message": "Validation message"
              },
              "input_type": "string",
              "secret": true,
              "required": true
            },
            "options": [],
            "key": "authkey",
            "placeholder": "Enter Bearer Token",
            "value": [],
            "title": "Auth Key",
            "description": "Parameter description"
          }
        ]
      }
    }
  },
]



export function getActionByAttrName(action: string): any {
  return HelloAttributes.find(el => el.method == action) || null
}