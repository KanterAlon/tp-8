export async function fetchCategories() {
  try {
    const res = await fetch('https://dummyjson.com/products/categories')
    const data = await res.json()
    if (Array.isArray(data)) {
      return data.map(slug => ({
        slug,
        name: typeof slug === 'string' ? slug.replace(/-/g, ' ') : ''
      }))
    }
    return []
  } catch {
    return []
  }
}
