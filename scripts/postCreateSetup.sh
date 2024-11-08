#!/bin/sh

# c++ will be required on install wasm-opt
apt update
apt install g++ -y
# commands for rust setup
cargo install ic-file-uploader
export PATH="$PATH:~/.cargo/bin"
# Reload the shell configuration
export PATH="$PATH:/usr/bin"
# continue with rust setup
cargo install wasi2ic
