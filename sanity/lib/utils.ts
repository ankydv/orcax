import { client } from './client'
import { homeFullQuery, siteSettingsQuery } from './queries'

export async function getHome() {
  return client.fetch(homeFullQuery)
}

export async function getSiteSettings() {
  return client.fetch(siteSettingsQuery)
}