
export type SearchParams = "jobDescriptor" | "jobLocation"
"fullTime"

export type ButtonType = "button" | "reset" | "submit" ;

export interface ButtonSize {
  width : string,
  height : string
}

export interface JobData {
    id : number,
    company: string,
    logo: string,
    logoBackground: string,
    position: string,
    postedAt: string,
    contract: string,
    location: string,
    website: string,
    apply: string,
    description:  string,
    requirements: {
      content: string,
      items: string []
    },
    role: {
      content: string,
      items: string[]
    }
}