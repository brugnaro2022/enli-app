import axios from "axios";
const BASE_URL = "http://localhost:3003/api";

export function getSummary() {
  const request = axios.get(`${BASE_URL}/wallet/summary`);
  return {
    type: "WALLET_SUMMARY_FETCHED",
    payload: request
  };
}
