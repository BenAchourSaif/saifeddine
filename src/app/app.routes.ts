import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.component').then((m) => m.ProjectsComponent),
  },
  {
    path: 'experience',
    loadComponent: () =>
      import('./pages/experience/experience.component').then((m) => m.ExperienceComponent),
  },
  {
    path: 'task-1-story-creation',
    loadComponent: () =>
      import('./pages/task1-story/task1-story.component').then((m) => m.Task1StoryComponent),
  },
  {
    path: 'task-2-search',
    loadComponent: () =>
      import('./pages/task2-search/task2-search.component').then((m) => m.Task2SearchComponent),
  },
  {
    path: 'architecture',
    loadComponent: () =>
      import('./pages/architecture/architecture.component').then((m) => m.ArchitectureComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  { path: '**', redirectTo: '' },
];
