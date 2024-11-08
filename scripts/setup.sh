#!/bin/sh

npm i
dfx identity new codespace_dev --storage-mode=plaintext
dfx identity use codespace_dev
dfx start --background
dfx stop
# c++ will be required on install wasm-opt
apt update
apt install g++
# commands for rust setup
cargo install ic-file-uploader
export PATH="$PATH:~/.cargo/bin"
cargo install wasi2ic
cargo install wasm-opt
