import { serve } from "https://deno.land/std/http/server.ts";
import {render} from "preact-render-to-string";
import {html , Component} from "htm/preact";
import Test from "./test.jsx";

const body = render(html`<${Test} />`);

const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
  	req.respond({ body: `
    	<!doctype html>
		<html lang="ru">
		<head>
		  <meta charset="utf-8" />
		  <title></title>
		</head>
		<body>
		${body}
		</body>
		</html>
    	`
    });
}