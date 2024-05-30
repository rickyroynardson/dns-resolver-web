import { TableCell, TableRow } from "@/components/ui/table";
import { DomainItem } from "../types";
import { CheckIcon, MinusIcon } from "lucide-react";

interface DomainListItemProps extends DomainItem {}

export const Check = () => {
  return (
    <div className="bg-green-100 w-fit p-1 rounded-full border border-green-600">
      <CheckIcon className="w-5 h-5 text-green-600" />
    </div>
  );
};

export const Minus = () => {
  return (
    <div className="bg-gray-100 w-fit p-1 rounded-full border border-gray-600">
      <MinusIcon className="w-5 h-5 text-gray-600" />
    </div>
  );
};

export const DomainListItem: React.FC<DomainListItemProps> = ({
  id,
  name,
  presence,
  spf,
  dkim,
  dmarc,
}) => {
  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{presence ? <Check /> : <Minus />}</TableCell>
      <TableCell>{spf ? <Check /> : <Minus />}</TableCell>
      <TableCell>{dkim ? <Check /> : <Minus />}</TableCell>
      <TableCell>{dmarc ? <Check /> : <Minus />}</TableCell>
    </TableRow>
  );
};
