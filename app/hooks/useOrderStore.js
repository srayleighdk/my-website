import { create } from "zustand";

const useOrderStore = create((set) => ({
  response: null,
  setResponse: (data) => set({ response: data }),
}));

export default useOrderStore;
