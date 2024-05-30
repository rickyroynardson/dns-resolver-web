import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LimitSelectProps {
  currentPage: number;
  totalRecords: number;
  limit: string;
  onLimitChange: (limit: string) => void;
}

export const LimitSelect: React.FC<LimitSelectProps> = ({
  currentPage,
  totalRecords,
  limit,
  onLimitChange,
}) => {
  const start = (currentPage - 1) * Number(limit) + 1;
  const end = Math.min(currentPage * Number(limit), totalRecords);

  return (
    <div className="flex items-center gap-2">
      <Select defaultValue={limit} onValueChange={onLimitChange}>
        <SelectTrigger className="w-16">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="5">5</SelectItem>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="15">15</SelectItem>
        </SelectContent>
      </Select>
      <p className="text-sm">
        Showing {start} to {end} of {totalRecords} entries
      </p>
    </div>
  );
};
