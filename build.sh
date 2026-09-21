#!/usr/bin/env bash
set -Eeuo pipefail

project_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd -P)"
cd "$project_dir"

if [[ ! -f package.json ]]; then
  echo "Error: package.json was not found in $project_dir" >&2
  exit 1
fi

command -v node >/dev/null 2>&1 || { echo "Error: Node.js is required." >&2; exit 1; }
command -v npm >/dev/null 2>&1 || { echo "Error: npm is required." >&2; exit 1; }

# This repository intentionally does not require package-lock.json.
# Install from package.json, then run the site's existing build script.
if [[ "${PREFIX:-}" == /data/data/com.termux/files/usr* ]]; then
  command -v rsync >/dev/null 2>&1 || {
    echo "Error: rsync is required in Termux. Run: pkg install rsync" >&2
    exit 1
  }

  project_id="$(printf '%s' "$project_dir" | sha256sum | cut -c1-12)"
  build_dir="$PREFIX/var/tmp/michaelsboost-build-$project_id"
  npm_cache_dir="$PREFIX/var/cache/michaelsboost-npm"

  mkdir -p "$build_dir" "$npm_cache_dir"
  rsync -a --delete --exclude='.git/' --exclude='node_modules/' --exclude='dist/' "$project_dir/" "$build_dir/"
  cd "$build_dir"

  npm_config_cache="$npm_cache_dir" npm install --no-audit --no-fund --package-lock=false
  npm_config_cache="$npm_cache_dir" npm run build

  mkdir -p "$project_dir/dist"
  rsync -a --delete "$build_dir/dist/" "$project_dir/dist/"
else
  npm install --no-audit --no-fund --package-lock=false
  npm run build
fi

echo "Build complete: $project_dir/dist"
