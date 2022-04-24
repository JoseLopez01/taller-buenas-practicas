export interface Collection {
  id: string;
  name: string;
  tasks: Task[];
}

export interface Task {
  id: string;
  name: string;
  description: string;
  completed: boolean;
  startDate: string;
  endDate: string;
}
