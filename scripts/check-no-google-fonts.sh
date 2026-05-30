#!/usr/bin/env bash
# Fail the build if any Google Fonts URL leaks into the static output.
# Run after `npm run build`:
#   bash scripts/check-no-google-fonts.sh
set -euo pipefail

DIST_DIR="${1:-dist}"

if [ ! -d "$DIST_DIR" ]; then
  echo "check-no-google-fonts: '$DIST_DIR' not found — run 'npm run build' first." >&2
  exit 2
fi

if grep -rE "fonts\.googleapis\.com|fonts\.gstatic\.com" "$DIST_DIR" >/dev/null 2>&1; then
  echo "FAIL: Google Fonts URL found in build output" >&2
  grep -rE "fonts\.googleapis\.com|fonts\.gstatic\.com" "$DIST_DIR" >&2 || true
  exit 1
fi

echo "OK: no Google Fonts references in $DIST_DIR"
