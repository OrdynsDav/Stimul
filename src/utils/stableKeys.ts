let counter = 0
const cache = new WeakMap<object, string>()

/**
 * Возвращает стабильный уникальный ключ.
 * Если передан объект — ключ кэшируется по ссылке на этот объект,
 * поэтому при повторных рендерах (пока объект — тот же самый,
 * например элемент статичного массива) вернётся тот же ключ.
 * Если аргумент не передан — просто возвращает новый уникальный
 * идентификатор (без гарантии стабильности между рендерами).
 */
export function stableKey(item?: unknown): string {
  if (item !== null && typeof item === "object") {
    let key = cache.get(item)
    if (!key) {
      key = `k${counter++}`
      cache.set(item, key)
    }
    return key
  }

  return `k${counter++}`
}