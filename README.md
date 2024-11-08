# 2024-ic-hackerhouse-advanced

Advanced challenge for ICP AI HackerHouse, held in Lisbon from 9-10th November 2024.










# Copy of ICP Hello World Rust

This repository provides a quick and easy way to start developing a canister smart contract for the [Internet Computer](https://internetcomputer.org/) in Rust.
The repository can be used with macOS, Windows or Linux.

## Getting Started

If you prefer running VS Code locally and not in the browser, click "Codespaces: ..." in the bottom left corner and select "Open in VS Code" in the menu that appears.
If prompted, proceed by installing the recommended plugins for VS Code.

### Running your Project

After the IDE has opened, run `dfx deploy` in the terminal to deploy the frontend and backend.
Click on the first green link at the end of the output to see your canister's frontend in the browser.
To interact with the backend canister, click on the second green link.
**NOTE**: When developing in GitHub Codespaces, run `./scripts/canister_urls.py` and use the links that are shown there.

For interactive development of the frontend canister, you can also start a node server by running `npm start`.
You can find your canister's frontend running under http://localhost:8080.

If you make changes to the backend canister, remember to call `dfx deploy` first; it suffices to reload the frontend canister's webpage to reflect the changes you've made.
If your environment was restarted or has been inactive over some time, you might need to run `dfx start --background` before running `dfx deploy`.

## Testing your Project

To run the [integration tests](/src/icp_hello_world_rust_backend/tests/integration_tests.rs#L18) for your backend canister, first run `dfx build` to build the canister Wasm, and then `cargo test --test integration_tests`.
If the canisters have not yet been created, run `dfx canister create --all` before `dfx build`.

## Local Development

If you prefer to develop locally, first install [Docker](https://www.docker.com/get-started/) and [VS Code](https://code.visualstudio.com/) and start them on your machine.
Next, click the following button to open the dev container locally:

[![Open locally in Dev Containers](https://img.shields.io/static/v1?label=Dev%20Containers&message=Open&color=blue&logo=visualstudiocode)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/dfinity/icp-hello-world-rust)

If prompted, install the required/recommended plugins for VS Code.

## Documentation and Guides

To learn more before you start working on this project, see the following documentation available online:

- [Quick Start](https://internetcomputer.org/docs/current/developer-docs/setup/deploy-locally)
- [SDK Developer Tools](https://internetcomputer.org/docs/current/developer-docs/setup/install)
- [Rust Canister Development Guide](https://internetcomputer.org/docs/current/developer-docs/backend/rust/)
- [ic-cdk](https://docs.rs/ic-cdk)
- [ic-cdk-macros](https://docs.rs/ic-cdk-macros)
- [Candid Introduction](https://internetcomputer.org/docs/current/developer-docs/backend/candid/)

If you want to start working on your project right away, you might want to try the following commands to familiarize yourself with `dfx`:

```bash
dfx help
dfx canister --help
```

# COPY from rust-connect-py-ai-to-ic

https://github.com/modclub-app/rust-connect-py-ai-to-ic/blob/main/README.md

Seamlessly Bridge Python AI Models with the Internet Computer.

## Overview

"Python (design and train), Rust (upload), IC (run)" - this succinct mantra captures the essence of `rust-connect-py-ai-to-ic`. Our toolkit is an open-source solution designed to enable AI researchers and developers to effortlessly upload and deploy Python-based machine learning models for inference on the Internet Computer (IC) platform.

Focused on ease of use and versatility, `rust-connect-py-ai-to-ic` aims to streamline the integration of advanced AI capabilities into the decentralized environment of the IC. This project represents a pivotal step towards harnessing the power of the IC for AI, with potential future expansions into model training and user-friendly drag-and-drop functionalities.

## Features

- **Effortless Upload**: Simplify the process of uploading Python-based AI models to the IC using Rust.
- **Inference on IC**: Run your machine learning models on a decentralized platform, leveraging the unique capabilities of the Internet Computer.
- **Future Expansion**: Potential for extending the toolkit to include model training and easy-to-use drag-and-drop features.

## Getting Started

This section guides you through the initial setup of the necessary tools and environments for this project. We are using Rust with WebAssembly, Python with PyTorch, and the Dfinity platform.

### Rust Setup

First, ensure you have Rust installed. We will then set the default toolchain to stable and add the WebAssembly target.

1. Install "wasm-opt" and wait (average time ~22 minutes)
   ```bash
   cargo install wasm-opt
   ```
2. Deploy single_call canister
   ```bash
   cd src/rubriks/single_call
   dfx deploy
   ```
3. Upload model
   ```bash
   ic-file-uploader single_call_backend upload_model_bytes_chunks ../../../lib/models/gpt2_with_kv.onnx
   dfx canister call single_call_backend upload_wasm_ref_cell_to_stable
   dfx canister call single_call_backend setup_model
   ```

### Python and PyTorch Setup

Ensure you have Python installed and then set up PyTorch.

1. Install Python (if not already installed): Visit [Python's download page](https://www.python.org/downloads/).
2. Install PyTorch using pip:
   ```bash
   pip install torch
   ```

### Dfinity's DFX Setup

We will be using Dfinity's `dfx` for our development environment.

1. Install Dfinity's `dfx`: Follow the instructions on [Dfinity's SDK documentation](https://sdk.dfinity.org/docs/quickstart/quickstart.html).

## Contributing

We welcome contributions! Please read our contributing guidelines to get started.

## License

Apache 2.0/MIT
All original work licensed under either of

Apache License, Version 2.0 (LICENSE-APACHE or http://www.apache.org/licenses/LICENSE-2.0)
MIT license (LICENSE-MIT or http://opensource.org/licenses/MIT) at your option.
