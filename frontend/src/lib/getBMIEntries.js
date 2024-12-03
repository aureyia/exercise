import axios from "axios";

export const getBMIEntries = async () => {
  const { data } = await axios.get("/bmi-log");
  return data;
};
