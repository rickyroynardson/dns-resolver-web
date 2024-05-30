"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useGetDomains } from "../useGetDomains";
import { DomainItem } from "../types";
import { LimitSelect } from "@/components/elements/LimitSelect";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DomainListItem } from "./DomainListItem";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Pagination } from "@/components/elements";

export const DomainList: React.FC = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const currentLimit = searchParams.get("limit") || "10";
  const currentPage = Number(searchParams.get("page")) || 1;
  const searchName = searchParams.get("name") || "";
  const { data: domains, isLoading } = useGetDomains({
    page: currentPage,
    limit: Number(currentLimit),
    name: searchName,
  });

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ("code" in e && e.code !== "Enter") return;

    const params = new URLSearchParams(searchParams);
    params.set("name", search);
    params.delete("page");
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleChangeLimit = (limit: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("limit", limit);
    params.delete("page");
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleChangePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="w-full space-y-4">
      <div className="w-1/2 sm:w-1/3">
        <Input
          placeholder="Search domain..."
          defaultValue={searchName}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleSearch}
        />
      </div>
      <div className="border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Domain Name</TableHead>
              <TableHead>Presence</TableHead>
              <TableHead>SPF</TableHead>
              <TableHead>DKIM</TableHead>
              <TableHead>DMARC</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  Loading...
                </TableCell>
              </TableRow>
            ) : domains?.data.data.domains.length ? (
              domains.data.data.domains.map((domain: DomainItem) => (
                <DomainListItem key={domain.id} {...domain} />
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  No entries found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between">
        <LimitSelect
          currentPage={currentPage}
          totalRecords={domains?.data.data.meta.totalRecords}
          limit={currentLimit}
          onLimitChange={handleChangeLimit}
        />
        <Pagination
          currentPage={currentPage}
          prevPage={domains?.data.data.meta.prevPage}
          nextPage={domains?.data.data.meta.nextPage}
          onChangePage={handleChangePage}
        />
      </div>
    </div>
  );
};
