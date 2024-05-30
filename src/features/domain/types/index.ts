export interface DomainItem {
  id: number;
  name: string;
  presence: boolean;
  spf?: string;
  dkim?: string;
  dmarc?: string;
}
