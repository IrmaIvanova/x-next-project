export const PAGES = {
    HOME: `/x-project/`,
    EXPLORE: `/x-project/explore`,
    PROFILE: (userid: number) => `/x-project/user/${userid}`,
    SSR: `/x-project/shop/ssr`,
    SSG: `/x-project/shop/ssg`,
    ISR: `/x-project/shop/isr`,

    

}
export const REPAIRSHOP = {
    HOME:`/repair-shop/`

    

}



// Плюсы:
// ✅ Простота: Чистые функции без лишней обёртки.
// ✅ Удобство: Идеально для статических путей.
// ✅ Tree-shaking: Легко удалить неиспользуемые пути при сборке.

// Минусы:
// ❌ Ограниченность: Нет состояния и наследования.

// Когда использовать:

// Для простых SPA/SSR (Next.js, React Router).

// Если пути генерируются только на основе входных параметров.

// В небольших проектах или модулях.