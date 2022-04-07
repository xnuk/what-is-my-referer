/// <reference no-default-lib="true" />
/// <reference types="https://cdn.skypack.dev/@cloudflare/workers-types@^3.4.0/index.d.ts" />
/// <reference lib="esnext" />

const exports: ExportedHandler = {
	fetch: (req, _env, _context) => {
		const referer = req.headers.get('referer')
		return new Response(referer, { status: 200 })
	},
}

export default exports
