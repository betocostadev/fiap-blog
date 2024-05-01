import { expect, test } from 'vitest'
import { getPostDateCard, getPostDate } from '@/lib/dateUtils'
import { describe } from 'node:test'

describe('getPostDateCard', () => {
  test('Gets today date as string Today', () => {
    const today = new Date().toString()
    expect(getPostDateCard(today)).toBe('Today')
  })

  test('Gets yesterday date as string Yesterday', () => {
    const yesterday = new Date(
      new Date().setDate(new Date().getDate() - 1)
    ).toString()
    expect(getPostDateCard(yesterday)).toBe('Yesterday')
  })

  test('Gets this week date as string This week', () => {
    const thisWeek = new Date(
      new Date().setDate(new Date().getDate() - 7)
    ).toString()
    expect(getPostDateCard(thisWeek)).toBe('This week')
  })

  test('Gets past week date as string Past week', () => {
    const pastWeek = new Date(
      new Date().setDate(new Date().getDate() - 14)
    ).toString()
    expect(getPostDateCard(pastWeek)).toBe('Past week')
  })

  test('Gets past date as pt-BR local string', () => {
    const date = new Date('2024-03-10T21:00:00.000-03:00').toString()
    expect(getPostDateCard(date)).toBe('10/03/2024')
  })
})

describe('getPostDate', () => {
  test('Gets date as string with full month name', () => {
    const date = new Date('2024-04-18T21:00:00.000-03:00').toString()
    expect(getPostDate(date)).toBe('Posted on April 18, 2024')
  })
})
