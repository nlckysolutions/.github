#!/usr/bin/env bash
set -e

REPO="nlckysolutions/ndownload"
BRANCH="main"
BIN_DIR="$HOME/.local/bin"
TMP_DIR="$(mktemp -d)"

echo "[!] Checking for python3..."

if ! command -v python3 >/dev/null 2>&1; then
    echo "[!] python3 is not installed."
    read -rp "[!] Install python3 now? [y/N] " answer

    if [[ "$answer" =~ ^[Yy]$ ]]; then
        if command -v apt >/dev/null 2>&1; then
            sudo apt update
            sudo apt install -y python3
        elif command -v dnf >/dev/null 2>&1; then
            sudo dnf install -y python3
        elif command -v pacman >/dev/null 2>&1; then
            sudo pacman -Sy --noconfirm python
        else
            echo "[!] No supported package manager found."
            exit 1
        fi
    else
        echo "[!] python3 is required."
        exit 1
    fi
fi

echo "[!] Downloading ndownload..."

cd "$TMP_DIR"
curl -L "https://github.com/$REPO/archive/refs/heads/$BRANCH.zip" -o ndownload.zip

echo "[!] Extracting..."

python3 - <<'PY'
import zipfile
with zipfile.ZipFile("ndownload.zip", "r") as z:
    z.extractall(".")
PY

echo "[!] Installing..."

mkdir -p "$BIN_DIR"

SCRIPT_PATH="$(find "$TMP_DIR" -type f -name ndownload | head -n 1)"

if [ -z "$SCRIPT_PATH" ]; then
    echo "[!] Could not find ndownload script."
    exit 1
fi

cp "$SCRIPT_PATH" "$BIN_DIR/ndownload"
chmod +x "$BIN_DIR/ndownload"

if [[ ":$PATH:" != *":$BIN_DIR:"* ]]; then
    echo 'export PATH="$HOME/.local/bin:$PATH"' >> "$HOME/.bashrc"
    export PATH="$HOME/.local/bin:$PATH"
fi

rm -rf "$TMP_DIR"

echo "[!] Installed ndownload."
echo "[!] Run: ndownload"
echo "[!] Restart terminal if command is not found."
