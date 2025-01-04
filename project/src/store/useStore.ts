// src/store/useStore.ts
import { create } from 'zustand';
import { User, Project, Transaction } from '../types';

interface Store {
  user: User | null;
  projects: Project[];
  transactions: Transaction[];
  setUser: (user: User | null) => void;
  addProject: (newProject: Project) => void;
  updateProject: (updatedProject: Project) => void;
  logout: () => void; // Ensure this line is present
}

export const useStore = create<Store>((set) => ({
  user: null,
  projects: [],
  transactions: [],
  setUser: (user) => set({ user }),
  addProject: (newProject) => set((state) => ({
    projects: [...state.projects, newProject],
  })),
  updateProject: (updatedProject) => set((state) => ({
    projects: state.projects.map(project => 
      project.id === updatedProject.id ? updatedProject : project
    ),
  })),
  logout: () => set({ user: null }), // Ensure this line is present
}));
