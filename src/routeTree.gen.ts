/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as TransactionsIndexImport } from './routes/transactions/index'
import { Route as SettingsIndexImport } from './routes/settings/index'
import { Route as ReportsIndexImport } from './routes/reports/index'
import { Route as AddIndexImport } from './routes/add/index'
import { Route as TransactionsNewImport } from './routes/transactions/new'
import { Route as TransactionsIdImport } from './routes/transactions/$id'
import { Route as SettingsCategoriesImport } from './routes/settings/categories'
import { Route as ReportsMonthlyImport } from './routes/reports/monthly'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const TransactionsIndexRoute = TransactionsIndexImport.update({
  id: '/transactions/',
  path: '/transactions/',
  getParentRoute: () => rootRoute,
} as any)

const SettingsIndexRoute = SettingsIndexImport.update({
  id: '/settings/',
  path: '/settings/',
  getParentRoute: () => rootRoute,
} as any)

const ReportsIndexRoute = ReportsIndexImport.update({
  id: '/reports/',
  path: '/reports/',
  getParentRoute: () => rootRoute,
} as any)

const AddIndexRoute = AddIndexImport.update({
  id: '/add/',
  path: '/add/',
  getParentRoute: () => rootRoute,
} as any)

const TransactionsNewRoute = TransactionsNewImport.update({
  id: '/transactions/new',
  path: '/transactions/new',
  getParentRoute: () => rootRoute,
} as any)

const TransactionsIdRoute = TransactionsIdImport.update({
  id: '/transactions/$id',
  path: '/transactions/$id',
  getParentRoute: () => rootRoute,
} as any)

const SettingsCategoriesRoute = SettingsCategoriesImport.update({
  id: '/settings/categories',
  path: '/settings/categories',
  getParentRoute: () => rootRoute,
} as any)

const ReportsMonthlyRoute = ReportsMonthlyImport.update({
  id: '/reports/monthly',
  path: '/reports/monthly',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/reports/monthly': {
      id: '/reports/monthly'
      path: '/reports/monthly'
      fullPath: '/reports/monthly'
      preLoaderRoute: typeof ReportsMonthlyImport
      parentRoute: typeof rootRoute
    }
    '/settings/categories': {
      id: '/settings/categories'
      path: '/settings/categories'
      fullPath: '/settings/categories'
      preLoaderRoute: typeof SettingsCategoriesImport
      parentRoute: typeof rootRoute
    }
    '/transactions/$id': {
      id: '/transactions/$id'
      path: '/transactions/$id'
      fullPath: '/transactions/$id'
      preLoaderRoute: typeof TransactionsIdImport
      parentRoute: typeof rootRoute
    }
    '/transactions/new': {
      id: '/transactions/new'
      path: '/transactions/new'
      fullPath: '/transactions/new'
      preLoaderRoute: typeof TransactionsNewImport
      parentRoute: typeof rootRoute
    }
    '/add/': {
      id: '/add/'
      path: '/add'
      fullPath: '/add'
      preLoaderRoute: typeof AddIndexImport
      parentRoute: typeof rootRoute
    }
    '/reports/': {
      id: '/reports/'
      path: '/reports'
      fullPath: '/reports'
      preLoaderRoute: typeof ReportsIndexImport
      parentRoute: typeof rootRoute
    }
    '/settings/': {
      id: '/settings/'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsIndexImport
      parentRoute: typeof rootRoute
    }
    '/transactions/': {
      id: '/transactions/'
      path: '/transactions'
      fullPath: '/transactions'
      preLoaderRoute: typeof TransactionsIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/reports/monthly': typeof ReportsMonthlyRoute
  '/settings/categories': typeof SettingsCategoriesRoute
  '/transactions/$id': typeof TransactionsIdRoute
  '/transactions/new': typeof TransactionsNewRoute
  '/add': typeof AddIndexRoute
  '/reports': typeof ReportsIndexRoute
  '/settings': typeof SettingsIndexRoute
  '/transactions': typeof TransactionsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/reports/monthly': typeof ReportsMonthlyRoute
  '/settings/categories': typeof SettingsCategoriesRoute
  '/transactions/$id': typeof TransactionsIdRoute
  '/transactions/new': typeof TransactionsNewRoute
  '/add': typeof AddIndexRoute
  '/reports': typeof ReportsIndexRoute
  '/settings': typeof SettingsIndexRoute
  '/transactions': typeof TransactionsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/reports/monthly': typeof ReportsMonthlyRoute
  '/settings/categories': typeof SettingsCategoriesRoute
  '/transactions/$id': typeof TransactionsIdRoute
  '/transactions/new': typeof TransactionsNewRoute
  '/add/': typeof AddIndexRoute
  '/reports/': typeof ReportsIndexRoute
  '/settings/': typeof SettingsIndexRoute
  '/transactions/': typeof TransactionsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/reports/monthly'
    | '/settings/categories'
    | '/transactions/$id'
    | '/transactions/new'
    | '/add'
    | '/reports'
    | '/settings'
    | '/transactions'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/reports/monthly'
    | '/settings/categories'
    | '/transactions/$id'
    | '/transactions/new'
    | '/add'
    | '/reports'
    | '/settings'
    | '/transactions'
  id:
    | '__root__'
    | '/'
    | '/reports/monthly'
    | '/settings/categories'
    | '/transactions/$id'
    | '/transactions/new'
    | '/add/'
    | '/reports/'
    | '/settings/'
    | '/transactions/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ReportsMonthlyRoute: typeof ReportsMonthlyRoute
  SettingsCategoriesRoute: typeof SettingsCategoriesRoute
  TransactionsIdRoute: typeof TransactionsIdRoute
  TransactionsNewRoute: typeof TransactionsNewRoute
  AddIndexRoute: typeof AddIndexRoute
  ReportsIndexRoute: typeof ReportsIndexRoute
  SettingsIndexRoute: typeof SettingsIndexRoute
  TransactionsIndexRoute: typeof TransactionsIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ReportsMonthlyRoute: ReportsMonthlyRoute,
  SettingsCategoriesRoute: SettingsCategoriesRoute,
  TransactionsIdRoute: TransactionsIdRoute,
  TransactionsNewRoute: TransactionsNewRoute,
  AddIndexRoute: AddIndexRoute,
  ReportsIndexRoute: ReportsIndexRoute,
  SettingsIndexRoute: SettingsIndexRoute,
  TransactionsIndexRoute: TransactionsIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/reports/monthly",
        "/settings/categories",
        "/transactions/$id",
        "/transactions/new",
        "/add/",
        "/reports/",
        "/settings/",
        "/transactions/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/reports/monthly": {
      "filePath": "reports/monthly.tsx"
    },
    "/settings/categories": {
      "filePath": "settings/categories.tsx"
    },
    "/transactions/$id": {
      "filePath": "transactions/$id.tsx"
    },
    "/transactions/new": {
      "filePath": "transactions/new.tsx"
    },
    "/add/": {
      "filePath": "add/index.tsx"
    },
    "/reports/": {
      "filePath": "reports/index.tsx"
    },
    "/settings/": {
      "filePath": "settings/index.tsx"
    },
    "/transactions/": {
      "filePath": "transactions/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
