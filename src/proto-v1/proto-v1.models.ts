export interface PluginDefinition {
    name: string
    author: string
    version: string
    proto: string
    category: string
    repo: string
    icon: string
    description: string
    tag: string[]
    readme: string
    additionalInfo: AdditionalInfo
    accessDomains: any[]
    actions: Action[]
  }
  
  export interface AdditionalInfo {}
  
  export interface Action {
    selected: boolean
    name: string
    title: string
    description: string
    params: Param[]
  }
  
  export interface Param {
    title: string
    help: string
    key: string
    value: string
    type: string
    attr: Attr
  }
  
  export interface Attr {
    regex_pattern?: string
    ref?: string
  }
  