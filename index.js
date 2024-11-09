import { Actor, HttpAgent } from "@dfinity/agent";

// Define your canister's interface
const idlFactory = ({ IDL }) => {
  return IDL.Service({
    setup_model: IDL.Func([], [IDL.Result(IDL.Null, IDL.Text)], []),
    generate_text: IDL.Func(
      [IDL.Text, IDL.Nat8],
      [IDL.Result(IDL.Text, IDL.Text)],
      []
    ),
  });
};

class GPT2Client {
  constructor(canisterId) {
    this.canisterId = canisterId;
    this.agent = new HttpAgent({
      host: "https://ic0.app", // or your local replica for development
    });
    this.actor = Actor.createActor(idlFactory, {
      agent: this.agent,
      canisterId: this.canisterId,
    });
  }

  async setupModel() {
    const result = await this.actor.setup_model();
    if (result.Err) {
      throw new Error(result.Err);
    }
    return result.Ok;
  }

  async generateText(prompt, maxTokens) {
    const result = await this.actor.generate_text(prompt, maxTokens);
    if (result.Err) {
      throw new Error(result.Err);
    }
    return result.Ok;
  }
}
