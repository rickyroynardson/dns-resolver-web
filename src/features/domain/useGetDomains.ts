import { axiosInstance } from "@/lib/axios";
import { useQuery } from "react-query";

export const useGetDomains = (query: {
  page?: number;
  limit?: number;
  name?: string;
}) => {
  return useQuery({
    queryKey: ["domains", query],
    queryFn: () => {
      return axiosInstance.get("/domains", { params: query });
    },
  });
};
