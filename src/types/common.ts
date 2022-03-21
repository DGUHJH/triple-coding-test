type MarginType = {
  marginTop?: number
  marginBottom?: number
  marginLeft?: number
  marginRight?: number
}

export type FontType = {
  fontFamily: 'sans-serif'
  fontSize: number
  fontWeight?: number
  color?: string
  lineHeight?: string
  onClick?: () => void
  animationstart?: 'true' | 'false'
  animationtype?: string
  textDecoration?: string
  transition?: string
} & MarginType

export type ImageType = {
  src: string
  width?: number
  height?: number
  borderRadius?: number
  animationstart?: 'true' | 'false'
  animationtype?: string
  rotate?: 90 | 180 | 270
  opacity?: number
  onClick?: () => void
  transition?: string
} & MarginType

export type DividerType = {
  width: number
  height?: number
  background: string
} & MarginType

export type DotType = {
  width: number
  height?: number
  background: string
} & MarginType

export type CheckboxType = {
  checked: boolean
  onClick?: () => void
} & MarginType

export type TodoType = {
  id: number
  content: string
}

export type RequestType = 'post' | 'get' | 'patch' | 'delete'
