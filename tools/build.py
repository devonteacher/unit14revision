#!/usr/bin/env python3
"""Build a single self contained HTML file from the source folder.

Usage:  python3 tools/build.py
Output: dist/unit14-revision-bot.html  (also copied to dist/index.html for hosting)

The output has no external files or links, so it can be opened from a USB stick,
uploaded to a website, or placed in an iframe.
"""
import os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "index.html")
OUT_DIR = os.path.join(ROOT, "dist")


def read(path):
    with open(os.path.join(ROOT, path), encoding="utf-8") as f:
        return f.read()


def main():
    html = read("index.html")

    def css(m):
        return "<style>\n" + read(m.group(1)) + "\n</style>"

    def js(m):
        code = read(m.group(1))
        if "</script" in code.lower():
            sys.exit("Found a closing script tag inside " + m.group(1) + ". Remove it before building.")
        return "<script>\n" + code + "\n</script>"

    html, n_css = re.subn(r'<link rel="stylesheet" href="([^"]+)">', css, html)
    html, n_js = re.subn(r'<script src="([^"]+)"></script>', js, html)
    if n_css == 0 or n_js == 0:
        sys.exit("Nothing was inlined. Check index.html.")
    if re.search(r'(href|src)="(?!#|data:|mailto:)[^"]*\.(css|js)"', html):
        sys.exit("An external file reference is still present.")

    os.makedirs(OUT_DIR, exist_ok=True)
    for name in ("unit14-revision-bot.html", "index.html"):
        with open(os.path.join(OUT_DIR, name), "w", encoding="utf-8") as f:
            f.write(html)
    size = os.path.getsize(os.path.join(OUT_DIR, "unit14-revision-bot.html"))
    print("Built dist/unit14-revision-bot.html (%d KB), %d stylesheet(s), %d script(s)." % (size // 1024, n_css, n_js))


if __name__ == "__main__":
    main()
