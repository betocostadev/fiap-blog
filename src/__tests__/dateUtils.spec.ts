import { expect, test } from 'vitest'
import { getPostDate } from '@/lib/dateUtils'
import { describe } from 'node:test'

describe('getPostDate', () => {
  test('Gets today date as string Today', () => {
    const today = new Date().toString()
    expect(getPostDate(today)).toBe('Today')
  })

  test('Gets yesterday date as string Yesterday', () => {
    const yesterday = new Date(
      new Date().setDate(new Date().getDate() - 1)
    ).toString()
    expect(getPostDate(yesterday)).toBe('Yesterday')
  })

  test('Gets past date as pt-BR local string', () => {
    const date = new Date('2024-04-18T21:00:00.000-03:00').toString()
    expect(getPostDate(date)).toBe('18/04/2024')
  })
})