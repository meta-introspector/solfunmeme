# My Nix Configurations

This repository contains my personal Nix configurations for Android (`nix-on-droid`) and other Linux systems (Ubuntu, GitHub Actions), managed via a central `flake.nix`.

The configuration is modular, allowing different package sets to be composed for different use cases.

## Getting Started

This section provides a quick guide to setting up and using this Nix configuration project.

### Prerequisites

*   **Nix Installation:** Ensure you have Nix installed on your system. If not, follow the official Nix installation guide.
*   **Nix Flakes Enabled:** Make sure Nix flakes are enabled. You can enable them by adding `experimental-features = nix-command flakes` to your `nix.conf` file (usually located at `/etc/nix/nix.conf` or `~/.config/nix/nix.conf`).
*   **Rust Toolchain (Nix-managed):** The project's Rust components are managed via Nix. Ensure you are in a `nix-shell` environment that provides the necessary Rust toolchain (e.g., by running `nix-shell` in the project root).

### 1. Clone the Repository

If you haven't already, clone this repository to your local machine:

```bash
git clone https://github.com/jmikedupont2/pick-up-nix.git
cd pick-up-nix
```

### 2. Apply the Nix-on-Droid Configuration

To apply the Nix configuration to your Android device (via Nix-on-Droid), or to other Linux systems, refer to the detailed instructions in the "Building Configurations" section below.

For Nix-on-Droid, the primary command you'll use is:

```bash
nix-on-droid switch --flake .#android
```

## Repository Structure

-   `flake.nix`: The heart of the configuration. It defines all inputs, manages overlays, and exposes the final system and home configurations.
-   `home/`: Contains modular Home Manager configurations for different package sets.
    -   `base.nix`: Core utilities needed in all environments.
    -   `emacs.nix`: Standalone Emacs package.
    -   `scientific.nix`: Toolchains for Coq, OCaml, and Haskell.
-   `configurations/`: Contains top-level modules imported by the flake.
    -   `android.nix`: Base configuration for the `nix-on-droid` mobile environment.
-   `.config/home-manager/`: Contains shared user-level settings managed by Home Manager.
-   `shell.nix`: A standalone, non-flake development shell for quick tasks, now managing the Rust toolchain.
-   `pick-up-nix-cli/`: Contains the Rust-based CLI application, including the `tracenix` command.

## Usage

### Building Configurations

To apply a configuration, run the appropriate command from the root of this repository:

**Nix-on-Droid (Android):**

```bash
nix-on-droid switch --flake .#android
```

**Home Manager (Ubuntu, etc.)**

You can build and activate a user environment on any Linux system using `home-manager`.

First, choose a profile based on your needs:
-   `github-runner`: Minimal profile for CI.
-   `linux-dev`: Standard development environment with Emacs.
-   `linux-sci`: Full scientific environment with all packages.

Then, run the switch command (replace `linux-dev` with your chosen profile):

```bash
home-manager switch --flake .#linux-dev
```
*Note: This assumes your local username is `user`. You may need to adjust `flake.nix` if your username is different.*

### Using `tracenix`

The `tracenix` command is a Rust-based CLI tool for tracing Nix commands. It's part of the `pick-up-nix-cli` package.

To run `tracenix`, ensure you are in a `nix-shell` environment (by running `nix-shell` in the project root) and then execute:

```bash
cargo run -p pick-up-nix-cli -- tracenix -- <NIX_COMMAND> [NIX_ARGUMENTS...]
```

**Example:** Trace `nix --version`

```bash
cargo run -p pick-up-nix-cli -- tracenix -- --version
```

For more details, refer to `docs/user_guide/tracenix_user_guide.md`.

## Package Management

Packages are managed by adding them to the appropriate module in the `home/` directory:

-   **Core Packages:** Add to `home/base.nix`.
-   **Emacs:** Managed in `home/emacs.nix`.
-   **Scientific Packages:** Add to `home/scientific.nix`.
-   **Shared Settings:** General settings (not packages) can be modified in `.config/home-manager/home.nix`.

## Livestreaming

We are livestreaming our development process on X (formerly Twitter) and other platforms. You can follow our progress and interact with us live at:

[https://x.com/introsp3ctor/status/1964663185539248630](https://x.com/introsp3ctor/status/1964663185539248630)

All our development steps are logged using `figlet` on the stream and written to a dedicated log stream.

### Social Media

Follow us on other platforms:

*   TikTok: [https://www.tiktok.com/@solfunmeme](https://www.tiktok.com/@solfunmeme)
*   Lemon8: Check out solfunmeme’s posts on Lemon8! [https://v.lemon8-app.com/al/OgsMsbfTMx](https://v.tiktok.com/@solfunmeme)
*   Linktree: [https://linktr.ee/h4km](https://linktr.ee/h4km)

## Building and Using `asciinema` Flake

This project includes a vendored `asciinema` flake. You can build it and use the resulting binary for recording terminal sessions.

To build the `asciinema` flake:

```bash
nix build ./vendor/external/asciinema
```

After a successful build, a symlink named `result` will be created in the root of this repository, pointing to the built `asciinema` package in the Nix store.

You can then use the `asciinema` executable located at `./result/bin/asciinema`. For example:

```bash
./result/bin/asciinema rec my_session.cast
```


## Task Status

This section provides an overview of the current status of key tasks within the project.

*   **Task 001: Initial Setup** - Completed
*   **Task 002: Core Feature Development** - In Progress
*   **Task 003: Documentation Review** - Pending

# emacs

cd source/github/meta-introspector/git-submodules-rs-nix/.emacs.d/nix-magit/
nix run .#nix-magit

# current task

~/pick-up-nix2/source/github/meta-introspector/git-submodule-tools-rs/runprompt2.sh

tasks in 
~/pick-up-nix2/source/github/meta-introspector/git-submodule-tools-rs/prompts/


# rust 
cd ~/nix2/vendor/external/rust/src/tools/nix-dev-shell
nix develop

cd ~/nix2/
~/pick-up-nix2/gemini_cli_recent.sh