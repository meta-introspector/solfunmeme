#!/usr/bin/env bash

# This boot.sh is tailored for the submodule to launch the Gemini CLI.

# Configuration
SESSION_NAME="submodule-gemini-session"
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

