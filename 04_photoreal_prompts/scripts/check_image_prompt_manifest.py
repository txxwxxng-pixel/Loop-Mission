#!/usr/bin/env python3
"""Validate an image prompt manifest file.

This script is intentionally lightweight and has no external dependencies.
"""

from __future__ import annotations

import argparse
import json
from pathlib import Path

REQUIRED_KEYS = [
    "run_id",
    "loop",
    "backend",
    "status",
    "goal",
    "prompt_files",
    "output_files",
    "evaluation",
    "learning_update",
]


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("manifest", help="Path to manifest JSON file")
    args = parser.parse_args()

    path = Path(args.manifest)
    if not path.exists():
        print(f"ERROR: missing manifest file: {path}")
        return 1

    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:
        print(f"ERROR: invalid JSON: {exc}")
        return 1

    missing = [key for key in REQUIRED_KEYS if key not in data]
    if missing:
        print("ERROR: missing required keys:")
        for key in missing:
            print(f"- {key}")
        return 1

    print("OK: manifest structure is valid.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
