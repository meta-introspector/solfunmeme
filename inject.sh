#!/usr/bin/env bash

set -euo pipefail

# The target directory for injection is the current directory where this script resides.
TARGET_DIR="$(dirname "$0")"
ROOT_DIR="/data/data/com.termux.nix/files/home/pick-up-nix2"

if [ -z "$1" ]; then
  echo "Usage: $0 <CRQ_NUMBER>"
  echo "Example: $0 123"
  exit 1
fi

CRQ_NUMBER="$1"

echo "Preparing Gemini CLI environment in $TARGET_DIR"

# Create a tailored boot.sh for the submodule
cat << 'EOF' > "$TARGET_DIR/boot.sh"
#!/usr/bin/env bash

# This boot.sh is tailored for the solfunmeme submodule to launch the Gemini CLI.

# Configuration
SESSION_NAME="solfunmeme-gemini-session"
LOG_DIR=".gemini_logs"
mkdir -p "$LOG_DIR"

# Ensure log directory exists
mkdir -p "$LOG_DIR"

# Asciinema recording
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
ASCIINEMA_REC_FILE="$LOG_DIR/session_$TIMESTAMP.cast"

echo "Starting asciinema recording to $ASCIINEMA_REC_FILE..."
# The actual command to run inside asciinema
ASCIINEMA_COMMAND="nix develop --command bash -c \"/data/data/com.termux.nix/files/home/pick-up-nix2/gemini_cli_recent.sh\""

# Start asciinema recording in the current pane
ascinema rec "$ASCIINEMA_REC_FILE" --command "$ASCIINEMA_COMMAND"

# Initiate Crash Recovery Checks (adjusted for submodule context)
echo "--- Initiating Crash Recovery Checks ---" | tee -a "$LOG_DIR/crash_recovery_log.txt"
echo "Git Status:" | tee -a "$LOG_DIR/crash_recovery_log.txt"
git status --ignore-submodules | tee -a "$LOG_DIR/crash_recovery_log.txt"
echo "" | tee -a "$LOG_DIR/crash_recovery_log.txt"

echo "Git Diff HEAD:" | tee -a "$LOG_DIR/crash_recovery_log.txt"
git diff HEAD | tee -a "$LOG_DIR/crash_recovery_log.txt"
echo "" | tee -a "$LOG_DIR/crash_recovery_log.txt"

echo "--- Crash Recovery Checks Complete ---" | tee -a "$LOG_DIR/crash_recovery_log.txt"

EOF

# Make the generated boot.sh executable
chmod +x "$TARGET_DIR/boot.sh"

# Create docs directory in the target submodule
mkdir -p "$TARGET_DIR/docs"

# Copy a placeholder standard doc (e.g., README.md from root) to the submodule's docs
echo "Copying standard docs..."
cp "$ROOT_DIR/README.md" "$TARGET_DIR/docs/README.md"

# Create crqs directory in the target submodule's docs
mkdir -p "$TARGET_DIR/docs/crqs"

# Find and copy the specified CRQ file
CRQ_GLOB="${ROOT_DIR}/docs/crqs/CRQ_${CRQ_NUMBER}_*.md"
CRQ_FILE=$(compgen -G "$CRQ_GLOB")

if [ -n "$CRQ_FILE" ]; then
  echo "Copying $(basename "$CRQ_FILE")..."
  cp "$CRQ_FILE" "$TARGET_DIR/docs/crqs/$(basename "$CRQ_FILE")"
else
  echo "Warning: CRQ_${CRQ_NUMBER}_*.md not found at ${ROOT_DIR}/docs/crqs/. Skipping copy."
fi

echo "Preparation script finished."
