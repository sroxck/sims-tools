export interface Intermediary {
  dir: string,
  include?: includeOptins[]
  output: string,
  scan: boolean
}
export type includeOptins = 'ts' | 'js' | 'vue'
