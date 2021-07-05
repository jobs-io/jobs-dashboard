export type Company<T> = {}

export type JobSummary = {
    title: string
    description: string[]
    company: Company<string>
}
