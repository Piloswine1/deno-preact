async function build() {
  await Deno.run({
    cmd: ["deno", "run","--unstable","--allow-write", "--allow-read", "--importmap=import_map.json", "src/app.ts"]
  });
}
await build();