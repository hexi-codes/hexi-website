import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const DEFAULT_PACKAGE_NAME = 'hexicodes'
const packageName = process.env.PYPI_PACKAGE_NAME || DEFAULT_PACKAGE_NAME

const scriptDir = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(scriptDir, '..')
const outputPath = resolve(repoRoot, 'src/generated/version.json')
const pypiUrl = `https://pypi.org/pypi/${encodeURIComponent(packageName)}/json`

const response = await fetch(pypiUrl, {
  headers: { accept: 'application/json' },
})

if (!response.ok) {
  throw new Error(`PyPI lookup failed for ${packageName}: HTTP ${response.status}`)
}

const payload = await response.json()
const version = payload?.info?.version

if (typeof version !== 'string' || !version.trim()) {
  throw new Error(`Invalid PyPI payload for ${packageName}: missing info.version`)
}

const generated = {
  packageName,
  version: version.trim(),
  source: pypiUrl,
  syncedAt: new Date().toISOString(),
}

await mkdir(dirname(outputPath), { recursive: true })
await writeFile(outputPath, `${JSON.stringify(generated, null, 2)}\n`, 'utf8')

console.log(`Synced ${packageName} version: v${generated.version}`)
console.log(`Wrote ${outputPath}`)
