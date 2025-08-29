# Bank Mobile App (MVP)

## Table of Contents

- [Implementation](#implementation)
- [Technologies](#technologies)
- [How to Run Locally](#how-to-run-locally)
- [Run Unit Tests](#run-unit-tests)
- [Folder Structure](#folder-structure)
- [Reusable Styles](#reusable-styles)
- [Naming Conventions](#naming-conventions)

---

## Implementation

This mobile app implements MVP features including **Login**, **Home**, and **Transactions** pages:

**Login:**

- Username/password validation.

**Home:**

- Render accounts from API response; click an account to view its transactions.
- Slider to display cards dynamically from API data.

**Transactions:**

- Fixed header with a search field.
- Renders 10 transactions per page with infinite scroll pagination.
- Filters: Order by and Sort by.
- Pull-down refresh feature.

**Authentication & API Handling:**

- Auth context maintains username and login/logout state.
- Token management using [`expo-secure-store`](https://docs.expo.dev/versions/latest/sdk/securestore/).
- Refresh token 1 minute before expiration.
- Axios interceptors handle token injection for all API requests.
- React Query manages caching, pagination, and data fetching with `refetch`, `loading`, `data`, and `error` states.

---

## Technologies

- [Expo](https://docs.expo.dev/)
- [expo-secure-store](https://docs.expo.dev/versions/latest/sdk/securestore/)
- [jwt-decode](https://www.jwt.io/)
- [moment](https://momentjs.com/)
- [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [React](https://reactjs.org/docs/getting-started.html)
- [React Query](https://react-query.tanstack.com/overview)
- [Jest](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

---

## How to Run Locally

1. Install the latest [Node.js](https://nodejs.org/en/download/).

2. Install dependencies (use `--legacy-peer-deps` for compatibility with React 19):

```bash
npm install --legacy-peer-deps
```

3. Update API base URL in `src/config/api.ts`:

```ts
const API_CONFIG = {
  local: Platform.OS === 'web' ? 'localApiAddress:PORT' : 'IP-Address:PORT',
};
```

4. Start the app:

```bash
npm run start
```

---

## Run Unit Tests

```bash
npm run test

# Generate coverage report
npm run test:coverage
```

---

## Folder Structure

```
Cards-services/

  ├── src/                   # Source code
  │   ├── components/        # Reusable components
  │   │   └── ComponentName/
  │   │       ├── models/       # Component-specific models
  │   │       ├── components/   # Child components
  │   │       ├── contexts/     # Component context
  │   │       ├── utils/        # Component utils
  │   │       ├── hooks/        # Component hooks
  │   │       ├── constants/    # Component constants
  │   │       ├── tests/        # Component unit tests
  │   │       ├── style/        # Component-specific styles
  │   │       ├── component.tsx # Component parent file
  │   │       └── index.ts      # Default export
  │   ├── pages/             # Pages
  │   │   └── PageName/
  │   │       ├── models/       
  │   │       ├── components/   
  │   │       ├── contexts/     
  │   │       ├── utils/        
  │   │       ├── hooks/        
  │   │       ├── constants/    
  │   │       ├── tests/        
  │   │       ├── style/        
  │   │       ├── page.tsx      
  │   │       └── index.ts      
  │   ├── hooks/             # Common hooks
  │   ├── models/            # Common models
  │   ├── constants/         # Common constants
  │   ├── context/           # Auth provider with auth hook
  │   ├── config/            # API base url and Axios token interceptor 
  │   ├── util/              # Common utils
  │   ├── styles/            # Common styles
  │   ├── App.js             # Main application component
  │   |── assets             # Static files
  |   |── navigation         # Navigations of stack
  |   |── services         # Navigations common methods  
  │           ├── authService             # Manage token and refresh token
  │           ├── navigationService       # Common method to navigate
  │           ├── storageHelper           # Handle storage
  │          
  ├── .gitignore
  ├── package.json
  └── README.md
```

---

## Reusable Styles

- Each component has its **own style folder** for isolated styling.
- Common/global styles reside in `src/scss/` for colors, fonts, spacing, etc.
- Promotes **consistency** and **reduces duplication**.

---

## Naming Conventions

```
Types/Interfaces: PascalCase, optionally prefixed with T/I
  Example: TUserDetails, IUserDetails

Enums: PascalCase
  Example: UserDetails

Constants: Uppercase with underscores
  Example: USER_DETAILS

Variables/Functions: camelCase
  Example: userDetails
```

