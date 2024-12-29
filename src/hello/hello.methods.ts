export const HelloMethods = [
  {
    "method": "mirror",
    "description": "im return given param value",
    "title": "Mirror ",
    "meta": {
      "dialog": {
        "name": "mirror",
        "title": "im return given param value",
        "description": "Mirror",
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
            "options": [{
              "value": "hi",
              "title": "hello"
            }],
            "key": "p1",
            "placeholder": "Placeholder text",
            "value": [],
            "title": "Parameter Title",
            "description": "Parameter description"
          },
          {

            "attr": {
              "regex_pattern": {
                "pattern": "^[pattern]$",
                "message": "Validation message"
              },
              "input_type": "number",
              "secret": false,
              "required": true
            },
            "options": [{
              "value": "hi",
              "title": "hello"
            }],
            "key": "p2",
            "placeholder": "tell me",
            "value": [],
            "title": "Parameter Title",
            "description": "Parameter description"
          }
        ]
      }
    }
  },
  {
    "method": "plus",
    "description": "this method do add given numbes",
    "title": "Plus",
    "meta": {
      "dialog": {
        "name": "plus",
        "title": "this method do add given numbes",
        "description": "Plus",
        "params": [
          {

            "attr": {
              "regex_pattern": {
                "pattern": "^[pattern]$",
                "message": "Validation message"
              },
              "input_type": "number",
              "secret": false,
              "required": true
            },
            "options": [],
            "key": "digit1",
            "placeholder": "Enter Number 1",
            "value": [],
            "title": "Number 1",
            "description": "Parameter description"
          },
          {

            "attr": {
              "regex_pattern": {
                "pattern": "^[pattern]$",
                "message": "Validation message"
              },
              "input_type": "number",
              "secret": false,
              "required": true
            },
            "options": [],
            "key": "digit2",
            "placeholder": "Enter Number 2",
            "value": [],
            "title": "Number 2",
            "description": "Parameter description"
          }
        ]
      }
    }
  },
]



export function getActionByMethodName(action: string): any {
  return HelloMethods.find(el => el.method == action) || null
}