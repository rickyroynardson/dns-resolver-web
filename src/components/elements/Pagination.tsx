import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  prevPage: number | null;
  nextPage: number | null;
  onChangePage: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  prevPage,
  nextPage,
  onChangePage,
}) => {
  return (
    <div className="flex items-center gap-1">
      <Button
        variant="outline"
        size="icon"
        onClick={() => onChangePage(Number(prevPage))}
        disabled={!prevPage}
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>
      <Button variant="outline" size="icon">
        {currentPage}
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => onChangePage(Number(nextPage))}
        disabled={!nextPage}
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
};
