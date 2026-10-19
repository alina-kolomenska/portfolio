export { cn } from 'cn'

export function isCurrentPeriod(period: string) {
  return /present/i.test(period)
}

export function cleanUrl(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
}
