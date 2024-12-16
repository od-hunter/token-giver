"use client";
import ControllerConnector from "@cartridge/connector/controller";
import { Connector } from "@starknet-react/core";

export const cartridgeInstance = new ControllerConnector({
  rpc: "https://api.cartridge.gg/x/starknet/sepolia",
}) as never as Connector;