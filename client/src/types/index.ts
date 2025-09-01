export interface Project {
  id: string;
  clientName: string;
  title: string;
  description: string;
  status: 'draft' | 'sent' | 'negotiation' | 'approved' | 'rejected' | 'completed';
  budget: number;
  timeline: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Invoice {
  id: string;
  projectId: string;
  amount: number;
  status: 'draft' | 'sent' | 'paid' | 'overdue';
  dueDate: Date;
  items: InvoiceItem[];
}

export interface InvoiceItem {
  description: string;
  quantity: number;
  rate: number;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  company: string;
  phone?: string;
}
