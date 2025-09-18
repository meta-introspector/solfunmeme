#!/usr/bin/env bash

# This script launches a new tmux session for a specific CRQ within the solfunmeme submodule,
# splits the window, and starts the Gemini CLI in the solfunmeme's context.

set -euo pipefail

if [ -z "$2" ]; then
  echo "Usage: $0 <SUBMODULE_PATH> <CRQ_NUMBER>"
  echo "Example: $0 source/github/meta-introspector/solfunmeme 123"
  exit 1
fi

SUBMODULE_PATH="$1"
CRQ_NUMBER="$2"

# Extract submodule name from path
SUBMODULE_NAME=$(basename "$SUBMODULE_PATH")

SESSION_NAME="crq-${CRQ_NUMBER}-${SUBMODULE_NAME}"

ROOT_DIR="/data/data/com.termux.nix/files/home/pick-up-nix2"
FULL_SUBMODULE_PATH="${ROOT_DIR}/${SUBMODULE_PATH}"

echo "Launching CRQ session for ${SUBMODULE_NAME} (CRQ: ${CRQ_NUMBER}) in tmux session: ${SESSION_NAME}"

# Check if tmux session already exists
tmux has-session -t "$SESSION_NAME" 2>/dev/null

if [ $? -eq 0 ]; then
  echo "Attaching to existing tmux session: ${SESSION_NAME}"
  tmux attach-session -t "$SESSION_NAME"
else
  echo "Creating new tmux session: ${SESSION_NAME}"
  tmux new-session -d -s "$SESSION_NAME"

  # Send commands to the new tmux session
  # Split window horizontally
  tmux send-keys -t "$SESSION_NAME" "tmux split-window -h" C-m

  # Navigate to the lower pane and run boot.sh
  tmux send-keys -t "$SESSION_NAME" "tmux select-pane -D" C-m
  tmux send-keys -t "$SESSION_NAME" "cd ${FULL_SUBMODULE_PATH} && ./boot.sh" C-m

  # Attach to the newly created session
  tmux attach-session -t "$SESSION_NAME"
fi
