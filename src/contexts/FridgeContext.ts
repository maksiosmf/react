import { createContext } from "react";

type FridgeContextResult = unknown | null | undefined;

export const FridgeContext = createContext<FridgeContextResult>(null);

FridgeContext.displayName = "FridgeContext";