/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderSlot, g as renderComponent, h as renderHead } from '../astro_vLib2m8l.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'cssesc';
import 'clsx';

const $$Astro$3 = createAstro();
const $$HeaderButtom = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HeaderButtom;
  const { url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="flex-row justify-center text-white cursor-pointer
 hover:bg-sky-600 focus:ring-4 focus:outline-none
  focus:ring-[#1da1f2]/50 font-medium rounded-lg px-5 py-2.5
  text-center inline-flex items-center
   dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg
    transition-all duration-200 ease-in-out hover:scale-110
    scale-90 gap-x-2 opacity-90 hover:opacity-100"${addAttribute(url, "href")}> ${renderSlot($$result, $$slots["before"])} ${renderSlot($$result, $$slots["default"])} ${renderSlot($$result, $$slots["after"])} </a>`;
}, "/home/lsubiabre/astro-midulive/curso-astro-demo/src/components/HeaderButtom.astro", void 0);

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="py-8 px-4 mx-auto max-w-xl lg:py-16 lg:px-16"> <div class="mx-auto text-center mb-8 lg:mb-16"> <h2 class="mb-4 text-5xl tracking-tight font-extrabold text-white">
SpaceX Launches 🚀
</h2> <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
All the information about SpaceX Launches
</p> </div> <nav class="flex flex-col items-center justify-between w-full text-center md:flex-row"> ${renderComponent($$result, "HeaderButtom", $$HeaderButtom, { "url": "/ " }, { "before": ($$result2) => renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"></path><path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"></path><path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path></svg>`, "default": ($$result2) => renderTemplate` 
New Launches
` })} ${renderComponent($$result, "HeaderButtom", $$HeaderButtom, { "url": "/about" }, { "before": ($$result2) => renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M12 9h.01"></path><path d="M11 12h1v4h1"></path></svg>`, "default": ($$result2) => renderTemplate` 
About
` })} ${renderComponent($$result, "HeaderButtom", $$HeaderButtom, { "url": "/oldest " }, { "before": ($$result2) => renderTemplate`<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 6a3 3 0 1 0 -6 0v7h6v-7z"></path><path d="M14 13h6v-7a3 3 0 0 0 -6 0v7z"></path><path d="M5 16c0 2.333 .667 4 2 5c1.333 -1 2 -2.667 2 -5"></path><path d="M15 16c0 2.333 .667 4 2 5c1.333 -1 2 -2.667 2 -5"></path><path d="M10 8h4"></path><path d="M10 11h4"></path></svg>`, "default": ($$result2) => renderTemplate` 
Older Launches
` })} </nav> </header>`;
}, "/home/lsubiabre/astro-midulive/curso-astro-demo/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-gray-900 min-h-screen pb-32"> ${renderComponent($$result, "Header", $$Header, {})} <main class="max-w-5xl px-4 m-auto"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/home/lsubiabre/astro-midulive/curso-astro-demo/src/layouts/Layout.astro", void 0);

const getLatestLaunches = async () => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: "asc"
        },
        limit: 12
      }
    })
  });
  const { docs: launches } = await res.json();
  return launches;
};
const getLaunchBy = async ({ id }) => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
  const launch = await res.json();
  return launch;
};

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  console.log({ id });
  let launch;
  if (id) {
    launch = await getLaunchBy({ id });
    console.log(launch?.name);
  }
  const launchStatus = launch?.success ? "Success" : "Failure";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Launch #${launch?.flight_number}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="flex gap-y-4 flex-col text-justify items-center"> <img class="w-52 h-auto"${addAttribute(launch?.links.patch.small, "src")}${addAttribute(launch?.name, "alt")}> <small>
Launch #${launch?.flight_number} <span${addAttribute([
    "text-xs font-semibold mr-2 px-2.5 py-0.5 rounded",
    {
      "bg-green-400 text-green-900": launch?.success,
      "bg-red-400 text-red-900": !launch?.success
    }
  ], "class:list")}> ${launchStatus} </span> </small> <h2 class="text-4xl text-white font-bold">${launch?.name} </h2> <p class="text-lg">${launch?.details}</p> </article> ` })}`;
}, "/home/lsubiabre/astro-midulive/curso-astro-demo/src/pages/launch/[id].astro", void 0);

const $$file = "/home/lsubiabre/astro-midulive/curso-astro-demo/src/pages/launch/[id].astro";
const $$url = "/launch/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _id_ as _, getLatestLaunches as g };
