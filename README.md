# Advanced Challenge for ICP AI HackerHouse



1. **Deploy the Canister**
```bash
dfx start --background
dfx deploy
```

***Upload the Model***
```bash
ic-file-uploader icp_gpt2 append_model_bytes src/icp_gpt2/lib/models/gpt2_with_kv.onnx
dfx canister call icp_gpt2 setup_model
```

***Upload and Initialize Tokenizer***
```bash
# Upload tokenizer bytes
dfx canister call icp_gpt2 append_tokenizer_bytes <tokenizer_bytes>

# Initialize tokenizer
dfx canister call icp_gpt2 setup_tokenizer
```

##Usage
The canister exposes two main endpoints for text generation:
***Direct Token Generation***
```bash
#[ic_cdk::update]
fn model_inference(max_tokens: u8, numbers: Vec<i64>) -> Result<Vec<i64>, String> {
    create_tensor_and_run_model(max_tokens, numbers).map_err(|err| err.to_string())
}
```

***Text Generation with Tokenization***
```bash
#[ic_cdk::update]
fn generate_text(prompt: String, max_tokens: u8) -> Result<String, String> {
    // Encode the input text to tokens
    let input_tokens =
        tokenizer::encode(&prompt).map_err(|e| format!("Failed to encode text: {}", e))?;

    // Run the model inference
    let output_tokens = create_tensor_and_run_model(max_tokens, input_tokens)
        .map_err(|e| format!("Failed to run model: {}", e))?;

    // Decode the output tokens back to text
    tokenizer::decode(&output_tokens).map_err(|e| format!("Failed to decode tokens: {}", e))
}
```

***To generate text from a prompt:***
```bash
dfx canister call icp_gpt2 generate_text '("Tell me a story", 50)'
```
