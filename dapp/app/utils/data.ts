import { Contract, RpcProvider } from "starknet";
import campaign_contract_abi from "../../public/abi/campaign_abi.json";
import nft_contract_abi from "../../public/abi/nft_abi.json";
import token_abi from "../../public/abi/token_abi.json";
import { STRK_SEPOLIA } from "./constant";

export const TOKEN_GIVER_Nft_CONTRACT_ADDRESS =
  "0x67fd21199c54c2c27acb69399de8e1c20398c8cc1f2f8abed7e8952b209c6ab";
export const REGISTRY_HASH =
  "0x46163525551f5a50ed027548e86e1ad023c44e0eeb0733f0dab2fb1fdc31ed0";
export const IMPLEMENTATION_HASH =
  "0x45d67b8590561c9b54e14dd309c9f38c4e2c554dd59414021f9d079811621bd";
export const CAMPAIGN_CONTRACT_ADDRESS =
  "0xfa0d85277f220f231be51568352ab355ac78f0fbebbda30781bcb4bb2e66e5";

export const BEARER_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjOWU2MDAxNy00YTgwLTQ4ZWEtYmY3MS1kYTZlMDM0NjBjMTIiLCJlbWFpbCI6InNhbGFraTE5MDJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImZmY2NmNzY3MWM4ZjZmOTI5Yzg0Iiwic2NvcGVkS2V5U2VjcmV0IjoiMmE4NzRhNjVmY2I3OGIwOTAzNWMxMmNhNWYzMGU2MTU0YWUzMDBiNTkzNGVmZGYwMzYyNjQwNmEwOTY4ODIwYiIsImV4cCI6MTc1MTc4OTg4NH0.Ppobgyjslmtq59sngD6i2Dg7pCvGZT4dyXFbhQWKUQg";

export const provider = new RpcProvider({
  nodeUrl: "https://starknet-sepolia.public.blastapi.io",
});

export const campaign_contract = new Contract(
  campaign_contract_abi,
  CAMPAIGN_CONTRACT_ADDRESS,
  provider
);

export const nft_contract = new Contract(
  nft_contract_abi,
  TOKEN_GIVER_Nft_CONTRACT_ADDRESS,
  provider
);

export const strk_contract = new Contract(token_abi, STRK_SEPOLIA, provider);
