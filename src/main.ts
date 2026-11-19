import './style.css'
import { projects } from './data/projects'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('App element was not found')
}

const arrow = '<span aria-hidden="true">↗</span>'

const header = `
  <header class="bg-gray-800 py-4">
    <div class="mx-auto flex max-w-5xl items-center justify-between px-4">
      <a class="grid size-8 place-items-center rounded-full bg-white font-bold text-slate-700" href="/" aria-label="Shubhvrat home">S</a>
      <nav class="flex gap-2" aria-label="Main navigation">
        <a class="rounded bg-gray-700 px-4 py-2 text-sm font-medium text-gray-100 transition hover:bg-gray-600" href="/">Home</a>
        <a class="rounded bg-gray-700 px-4 py-2 text-sm font-medium text-gray-100 transition hover:bg-gray-600" href="/case-study">Case studies</a>
        <a class="rounded bg-gray-700 px-4 py-2 text-sm font-medium text-gray-100 transition hover:bg-gray-600" href="/#work">Work</a>
      </nav>
    </div>
  </header>
`

const footer = `
  <footer class="bg-gray-800 px-4 py-4 text-center text-sm text-gray-400">
    © ${new Date().getFullYear()} Shubhvrat
  </footer>
`

function projectArtwork(name: string, artClass: string, large = false): string {
  const sizeClass = large ? 'min-h-80' : 'min-h-48'

  return `
    <div class="relative grid aspect-[3/2] ${sizeClass} overflow-hidden place-items-center ${artClass}" role="img" aria-label="${name} project preview">
      <div class="absolute size-40 rounded-full border border-black/10 shadow-[0_0_0_18px_rgba(255,255,255,0.18),0_0_0_38px_rgba(255,255,255,0.12)]"></div>
      <div class="group relative z-10 w-4/5 -rotate-2 overflow-hidden rounded-md border border-stone-200 bg-white shadow-xl transition-transform duration-200 hover:rotate-0">
        <div class="relative flex h-6 items-center gap-1 border-b border-stone-100 px-2">
          <i class="size-1 rounded-full bg-stone-300"></i><i class="size-1 rounded-full bg-stone-300"></i><i class="size-1 rounded-full bg-stone-300"></i>
          <span class="absolute left-1/2 -translate-x-1/2 text-[7px] text-stone-500">${name}</span>
        </div>
        <div class="flex min-h-32">
          <div class="flex w-1/5 flex-col gap-2 border-r border-stone-100 p-3">
            <i class="mb-1 h-1 w-6 rounded bg-lime-300"></i><i class="h-1 w-4/5 rounded bg-stone-200"></i><i class="h-1 w-3/5 rounded bg-stone-200"></i><i class="h-1 w-4/5 rounded bg-stone-200"></i>
          </div>
          <div class="flex-1 p-4">
            <i class="block h-1.5 w-1/3 rounded bg-stone-600"></i><i class="mt-1 block h-1 w-1/4 rounded bg-stone-200"></i>
            <div class="mt-4 flex gap-2"><i class="h-7 flex-1 rounded border border-stone-100 bg-stone-50"></i><i class="h-7 flex-1 rounded border border-stone-100 bg-stone-50"></i><i class="h-7 flex-1 rounded border border-stone-100 bg-stone-50"></i></div>
            <div class="mt-3 flex h-10 items-end gap-1 border border-stone-100 px-2 pt-2"><i class="h-1/3 flex-1 rounded-t bg-lime-200"></i><i class="h-2/3 flex-1 rounded-t bg-lime-300"></i><i class="h-1/2 flex-1 rounded-t bg-lime-200"></i><i class="h-3/4 flex-1 rounded-t bg-lime-300"></i><i class="h-2/5 flex-1 rounded-t bg-lime-200"></i><i class="h-4/5 flex-1 rounded-t bg-lime-300"></i></div>
          </div>
        </div>
      </div>
    </div>
  `
}

function projectCard(project: typeof projects[number]): string {
  return `
    <a class="group flex min-w-0 flex-col overflow-hidden rounded-md border border-gray-700 bg-gray-800 shadow-sm transition duration-150 hover:-translate-y-1 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400" href="/case-study/${project.slug}">
      ${projectArtwork(project.name, project.artClass)}
      <div class="flex flex-1 flex-col justify-between p-4">
        <div>
          <div class="flex items-center justify-between font-semibold text-gray-200 transition group-hover:text-teal-300">
            <h3 class="m-0 text-base">${project.name}</h3>
            <span aria-hidden="true" class="text-gray-400">${arrow}</span>
          </div>
          <p class="mt-2 text-sm leading-relaxed text-gray-500 transition group-hover:text-teal-200">${project.summary}</p>
        </div>
        <div class="mt-4 flex flex-wrap gap-2">
          ${project.services.slice(0, 2).map((service) => `<span class="rounded-full bg-gray-700 px-3 py-1 text-xs text-gray-300">${service}</span>`).join('')}
        </div>
      </div>
    </a>
  `
}

function homePage(): string {
  return `
    <div class="min-h-screen bg-gray-900 text-gray-100">
      ${header}
      <main>
        <section class="bg-gray-800">
          <div class="mx-auto flex max-w-5xl flex-col items-center px-4 py-12 text-center">
            <div class="mb-4 grid size-32 place-items-center rounded-full bg-orange-200 text-4xl font-medium text-gray-700" aria-label="Shubhvrat profile image placeholder">S</div>
            <h1 class="mb-1 text-4xl font-bold tracking-tight text-teal-100">Hey, I’m Shubhvrat!</h1>
            <p class="max-w-2xl text-xl leading-relaxed text-gray-100">I design and build digital products, and everything that comes with it.</p>
            <div class="mt-6 flex flex-wrap justify-center gap-2">
              <a class="rounded bg-blue-200 px-3 py-1 font-semibold text-blue-800 transition hover:bg-blue-300" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a class="rounded bg-gray-300 px-3 py-1 font-semibold text-gray-800 transition hover:bg-gray-400" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </section>

        <section class="bg-gray-900" id="work">
          <div class="mx-auto my-8 max-w-5xl px-4">
            <h2 class="text-4xl font-bold text-teal-300">Best Works</h2>
            <p class="text-2xl text-gray-500">Product Design · Frontend Development</p>
            <div class="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">${projects.map(projectCard).join('')}</div>
            <div class="mt-8 flex flex-col items-center justify-center py-4 text-center">
              <p class="mb-1 text-lg font-bold text-gray-400">See more of my work?</p>
              <a class="text-blue-400 hover:text-blue-300" href="/case-study">Explore my case studies</a>
              <a class="mt-3 rounded-md bg-gray-800 px-6 py-2 text-gray-100 transition hover:bg-gray-700" href="/case-study">View case studies</a>
            </div>
          </div>
        </section>

        <section class="bg-gray-900 px-4 py-10" id="about">
          <div class="mx-auto max-w-3xl">
            <h2 class="text-4xl font-bold text-teal-300">About me</h2>
            <p class="mt-4 leading-relaxed text-gray-300">I’m Shubhvrat, a product designer and developer who enjoys turning complicated ideas into useful, easy-to-use digital experiences. I work across product thinking, interface design, and frontend development.</p>
          </div>
        </section>
      </main>
      ${footer}
    </div>
  `
}

function caseStudiesPage(): string {
  return `
    <div class="min-h-screen bg-gray-900 text-gray-100">
      ${header}
      <main>
        <section class="mx-auto max-w-5xl px-4 py-12">
          <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-400">Case studies</p>
          <h1 class="text-4xl font-bold text-teal-300">Selected work</h1>
          <p class="mt-2 max-w-2xl text-xl text-gray-400">A closer look at the problems, design decisions, and details behind each product.</p>
        </section>
        <section class="mx-auto max-w-5xl px-4 pb-12">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">${projects.map(projectCard).join('')}</div>
        </section>
      </main>
      ${footer}
    </div>
  `
}

function projectPage(slug: string): string {
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return `
      <div class="min-h-screen bg-gray-900 text-gray-100">
        ${header}
        <main class="mx-auto min-h-[65vh] max-w-5xl px-4 py-24">
          <p class="text-sm font-semibold uppercase tracking-wide text-gray-400">Page not found</p>
          <h1 class="mt-3 text-4xl font-bold text-teal-300">Let’s get you back on track.</h1>
          <a class="mt-6 inline-block text-blue-400 hover:text-blue-300" href="/case-study">View case studies ${arrow}</a>
        </main>
        ${footer}
      </div>
    `
  }

  return `
    <div class="min-h-screen bg-gray-900 text-gray-100">
      ${header}
      <main class="mx-auto max-w-5xl px-4">
        <section class="py-8">
          <a class="mb-8 inline-block text-sm text-blue-400 hover:text-blue-300" href="/case-study">← All case studies</a>
          <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-400">${project.category} · ${project.year}</p>
          <h1 class="text-4xl font-bold text-teal-300">${project.name}</h1>
          <p class="mt-2 max-w-2xl text-xl text-gray-300">${project.summary}</p>
          <div class="mt-6 grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2">
            <div><h2 class="text-xs font-semibold uppercase tracking-wide text-gray-400">My role</h2><p class="mt-1 text-sm text-gray-200">${project.role}</p></div>
            <div><h2 class="text-xs font-semibold uppercase tracking-wide text-gray-400">Services</h2><p class="mt-1 text-sm text-gray-200">${project.services.join(' · ')}</p></div>
          </div>
        </section>
        <section class="overflow-hidden rounded-md border border-gray-700">${projectArtwork(project.name, project.artClass, true)}</section>
        <section class="grid grid-cols-1 gap-4 border-b border-gray-700 py-10 sm:grid-cols-[180px_1fr]">
          <p class="text-sm font-semibold uppercase tracking-wide text-gray-400">01 / The challenge</p>
          <div><h2 class="text-2xl font-bold text-teal-300">Starting with the real problem.</h2><p class="mt-3 leading-relaxed text-gray-300">${project.challenge}</p></div>
        </section>
        <section class="grid grid-cols-1 gap-4 border-b border-gray-700 py-10 sm:grid-cols-[180px_1fr]">
          <p class="text-sm font-semibold uppercase tracking-wide text-gray-400">02 / The approach</p>
          <div><h2 class="text-2xl font-bold text-teal-300">Clarity at every step.</h2><p class="mt-3 leading-relaxed text-gray-300">${project.approach}</p></div>
        </section>
        <section class="grid grid-cols-1 gap-4 py-10 sm:grid-cols-[180px_1fr]">
          <p class="text-sm font-semibold uppercase tracking-wide text-gray-400">03 / The outcome</p>
          <div><h2 class="text-2xl font-bold text-teal-300">Made for what comes next.</h2><p class="mt-3 leading-relaxed text-gray-300">${project.outcome}</p></div>
        </section>
        <section class="border-t border-gray-700 py-8">
          <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">Keep exploring</p>
          <div class="mt-3 flex flex-wrap gap-6">${projects.filter((item) => item.slug !== project.slug).map((item) => `<a class="text-teal-300 hover:text-teal-100" href="/case-study/${item.slug}">${item.name} ${arrow}</a>`).join('')}</div>
        </section>
      </main>
      ${footer}
    </div>
  `
}

function renderPage(): void {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const projectMatch = path.match(/^\/case-study\/([^/]+)$/)

  if (projectMatch) {
    app.innerHTML = projectPage(projectMatch[1])
  } else if (path === '/case-study') {
    app.innerHTML = caseStudiesPage()
  } else {
    app.innerHTML = homePage()
  }

  window.scrollTo(0, 0)
}

document.addEventListener('click', (event) => {
  const target = event.target
  const link = target instanceof Element ? target.closest('a') : null

  if (!link || link.origin !== window.location.origin || link.target === '_blank') {
    return
  }

  const url = new URL(link.href)

  if (url.hash && url.pathname === window.location.pathname) {
    return
  }

  event.preventDefault()
  window.history.pushState({}, '', `${url.pathname}${url.hash}`)
  renderPage()

  if (url.hash) {
    document.querySelector(url.hash)?.scrollIntoView({ behavior: 'smooth' })
  }
})

window.addEventListener('popstate', renderPage)

renderPage()
