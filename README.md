# React & TypeScript Frontend Development Guidelines

A comprehensive guide for building modern, performant, and maintainable React applications with TypeScript. These guidelines establish standards for component architecture, state management, testing, and code quality to ensure consistency across your development team.

The frontend architecture is designed with performance, accessibility, and maintainability as core principles, following strict TypeScript enforcement and modern React best practices.

## 🏗 Architecture Overview

The frontend follows a component-based architecture with clear separation of concerns. The application is structured around:

- **Feature-based organization**: Related components, hooks, services, and utilities are grouped by feature or domain
- **Atomic design principles**: UI components follow atoms → molecules → organisms → templates → pages hierarchy
- **Type-safe development**: Strict TypeScript enforcement across all layers
- **Performance-first approach**: Code splitting, lazy loading, and memoization strategies
- **Centralized state management**: Global state handled through Redux Toolkit, Zustand, or Legend State
- **Service layer abstraction**: API calls isolated in dedicated service modules

## 📂 Project Layout

```
frontend/
├── public/                          # Static assets served directly
│   ├── index.html                   # HTML entry point
│   ├── favicon.ico
│   └── assets/                      # Public images, fonts, icons
│
├── src/
│   ├── components/                  # Reusable UI components (Atomic Design)
│   │   ├── atoms/                   # Basic building blocks
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.test.tsx
│   │   │   │   ├── Button.module.scss
│   │   │   │   └── index.ts
│   │   │   ├── Input/
│   │   │   └── Icon/
│   │   │
│   │   ├── molecules/               # Simple component combinations
│   │   │   ├── FormField/
│   │   │   ├── SearchBar/
│   │   │   └── Card/
│   │   │
│   │   ├── organisms/               # Complex UI sections
│   │   │   ├── Header/
│   │   │   ├── Sidebar/
│   │   │   ├── DataGrid/
│   │   │   └── Modal/
│   │   │
│   │   └── templates/               # Page-level layouts
│   │       ├── MainLayout/
│   │       └── DashboardLayout/
│   │
│   ├── features/                    # Feature-specific modules
│   │   ├── auth/
│   │   │   ├── components/          # Auth-specific components
│   │   │   │   ├── LoginForm/
│   │   │   │   └── RegisterForm/
│   │   │   ├── hooks/               # Auth hooks (useAuth, useLogin)
│   │   │   ├── services/            # Auth API calls
│   │   │   │   └── authService.ts
│   │   │   ├── store/               # Auth state management
│   │   │   │   └── authSlice.ts
│   │   │   └── types/               # Auth-related types
│   │   │       └── auth.types.ts
│   │   │
│   │   ├── dashboard/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   ├── store/
│   │   │   └── types/
│   │   │
│   │   └── user/
│   │       ├── components/
│   │       ├── hooks/
│   │       ├── services/
│   │       └── types/
│   │
│   ├── pages/                       # Route-level page components
│   │   ├── Home/
│   │   │   ├── Home.tsx
│   │   │   └── Home.module.scss
│   │   ├── Dashboard/
│   │   ├── Settings/
│   │   └── NotFound/
│   │
│   ├── routes/                      # Routing configuration
│   │   ├── AppRoutes.tsx            # Main route definitions
│   │   ├── PrivateRoute.tsx         # Protected route wrapper
│   │   └── routePaths.ts            # Route path constants
│   │
│   ├── hooks/                       # Shared custom hooks
│   │   ├── useAuth.ts
│   │   ├── useMediaDevices.ts
│   │   ├── useLocalStorage.ts
│   │   └── useDebounce.ts
│   │
│   ├── contexts/                    # React Context providers
│   │   ├── ThemeContext.tsx
│   │   ├── NotificationContext.tsx
│   │   └── WebSocketContext.tsx
│   │
│   ├── services/                    # Shared API services
│   │   ├── api/
│   │   │   ├── apiClient.ts         # Axios/Fetch instance
│   │   │   ├── interceptors.ts      # Request/response interceptors
│   │   │   └── endpoints.ts         # API endpoint constants
│   │   └── socket/
│   │       └── socketService.ts     # WebSocket connection
│   │
│   ├── store/                       # Global state management
│   │   ├── index.ts                 # Store configuration
│   │   ├── rootReducer.ts           # Combined reducers
│   │   └── slices/                  # Feature slices (Redux Toolkit)
│   │       ├── uiSlice.ts
│   │       └── deviceSlice.ts
│   │
│   ├── types/                       # Shared TypeScript types
│   │   ├── api.types.ts             # API request/response types
│   │   ├── common.types.ts          # Common app types
│   │   └── env.d.ts                 # Environment variable types
│   │
│   ├── utils/                       # Utility functions
│   │   ├── formatters/
│   │   │   ├── dateFormatter.ts
│   │   │   └── stringFormatter.ts
│   │   ├── validators/
│   │   │   └── formValidators.ts
│   │   ├── constants.ts             # App-wide constants
│   │   └── helpers.ts               # General helper functions
│   │
│   ├── styles/                      # Global styles
│   │   ├── global.scss              # Global CSS/SCSS
│   │   ├── variables.scss           # SCSS variables
│   │   ├── mixins.scss              # SCSS mixins
│   │   └── reset.css                # CSS reset
│   │
│   ├── assets/                      # Source assets (processed by build)
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   │
│   ├── App.tsx                      # Root component
│   ├── main.tsx                     # Application entry point
│   └── vite-env.d.ts                # Vite type definitions
│
├── .env.development                 # Development environment variables
├── .env.staging                     # Staging environment variables
├── .env.production                  # Production environment variables
├── .env.example                     # Environment template
│
├── .eslintrc.json                   # ESLint configuration
├── .prettierrc                      # Prettier configuration
├── tsconfig.json                    # TypeScript configuration
├── vite.config.ts                   # Vite build configuration
├── package.json                     # Dependencies and scripts
│
├── .husky/                          # Git hooks
│   ├── pre-commit                   # Lint-staged on commit
│   └── pre-push                     # Tests before push
│
└── README.md                        # Project documentation
```

## 🧩 Component Architecture Guidelines

### File Naming Conventions

- **Components**: PascalCase (`UserProfile.tsx`, `DataGrid.tsx`)
- **Utilities**: camelCase (`formatDate.ts`, `validateEmail.ts`)
- **Hooks**: camelCase with `use` prefix (`useAuth.ts`, `useMediaDevices.ts`)
- **Types**: PascalCase with `.types.ts` suffix (`User.types.ts`)
- **Tests**: Same as source with `.test.tsx` or `.spec.tsx` suffix

### Folder Structure Standards

Organize code into feature-based modules:

- `/components` - Shared UI components following atomic design
- `/features` - Domain-specific modules with their own components, hooks, services
- `/hooks` - Shared custom React hooks
- `/routes` - Route configuration and protected routes
- `/types` - Shared TypeScript type definitions
- `/utils` - Pure utility functions
- `/contexts` - React Context providers
- `/services` - API clients and external service integrations
- `/store` - Global state management configuration

### Component Patterns

- **Composition over inheritance**: Use component composition and hooks
- **Single responsibility**: Each component should have one clear purpose
- **Presentational vs Container**: Separate UI components from data-fetching logic
- **Component size limits**: Maximum 250–300 lines per component for maintainability

### Atomic Design Principles

Follow the hierarchy:

- **Atoms**: Basic building blocks (Button, Input, Icon)
- **Molecules**: Simple combinations (FormField, SearchBar)
- **Organisms**: Complex sections (Header, Sidebar, DataGrid)
- **Templates**: Page layouts (MainLayout, DashboardLayout)
- **Pages**: Route-level components with business logic

## 🔷 TypeScript Enforcement

### Strict Type Definitions

- All props, state, and API responses must be properly typed
- Enable TypeScript strict mode in `tsconfig.json`
- Zero TypeScript errors or warnings allowed in production builds

### Type vs Interface Guidelines

- Use `interface` for object shapes that may be extended
- Use `type` for unions, intersections, and utility types
- Use `type` for function signatures and complex transformations

### No `any` Types Policy

- Prohibited without explicit justification and inline comments
- Use `unknown` for truly unknown types, then narrow with type guards
- Prefer generic types over `any`

### Event Handler Typing

```typescript
// ✅ Correct
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
};

// ❌ Incorrect
const handleClick = (event: any) => {
  event.preventDefault();
};
```

### Advanced TypeScript Patterns

Utilize utility types effectively:

- `Partial<T>` for optional properties
- `Omit<T, K>` to exclude properties
- `Pick<T, K>` to select specific properties
- `Record<K, T>` for mapped types

## 📊 State Management Standards

### Global State Guidelines

**When to use local vs global state:**

- **Local state** (`useState`): Component-specific UI state, form inputs, toggles
- **Global state**: User authentication, app-wide settings, shared data across routes

**Store Structure Conventions:**

- Use Redux Toolkit for complex state with multiple slices
- Use Zustand for lightweight global state
- Use TanStack Query for server state and caching
- Use Legend State for fine-grained reactivity

**Async State Management:**

- Handle loading, success, and error states consistently
- Use Redux Toolkit's `createAsyncThunk` for async operations
- Implement optimistic updates where appropriate

**Immutability Requirements:**

- Never mutate state directly
- Redux Toolkit's `createSlice` uses Immer for safe mutations
- For vanilla React state, use spread operators or immutability helpers

### Custom Hooks Standards

**Naming Convention:** Start with `use` prefix (`useAuth`, `useFetch`, `useMediaDevices`)

**Single Responsibility:** Each hook should have one clear purpose

```typescript
// ✅ Good - focused hook
const useLocalStorage = (key: string, initialValue: any) => {
  /* ... */
};

// ❌ Bad - too many responsibilities
const useEverything = () => {
  /* auth, storage, API, theme... */
};
```

**Dependency Arrays:** Properly manage `useEffect` dependencies to prevent stale closures and memory leaks

**Cleanup Functions:** Always clean up subscriptions, timers, and event listeners

```typescript
useEffect(() => {
  const subscription = socketService.subscribe(handleMessage);

  return () => {
    subscription.unsubscribe();
  };
}, []);
```

## ⚡ Performance & Optimization Rules

### Mandatory Performance Requirements

**React.memo():** Use for expensive components that receive the same props frequently

```typescript
export const DataTile = React.memo(({ data, id }: DataTileProps) => {
  // Component implementation
});
```

**useMemo and useCallback:** Optimize expensive computations and prevent unnecessary re-renders

```typescript
const sortedItems = useMemo(
  () => items.sort((a, b) => a.name.localeCompare(b.name)),
  [items]
);

const handleUpdate = useCallback(() => {
  updateData(newValue);
}, [newValue]);
```

**Code Splitting:** Lazy load routes and heavy components

```typescript
const Dashboard = React.lazy(() => import('./pages/Dashboard'));

<Suspense fallback={<LoadingSpinner />}>
  <Dashboard />
</Suspense>
```

**Bundle Size Limits:**

- Initial bundle < 200KB gzipped
- Main bundle < 500KB
- Monitor with webpack-bundle-analyzer or Vite's rollup-plugin-visualizer

### Anti-patterns to Reject in PRs

❌ Inline function definitions in JSX for event handlers  
❌ Missing key props in lists  
❌ Mutating state directly instead of using setState  
❌ useEffect dependency array issues  
❌ Memory leaks from uncleared intervals, subscriptions, or event listeners  
❌ Creating objects/arrays in component body that should be memoized  
❌ Prop drilling beyond 2–3 levels (use context or global state instead)

## 🧪 Testing Requirements

### React Testing Standards

**Unit Tests:** Component unit tests using React Testing Library

```typescript
test('renders submit button', () => {
  render(<LoginForm />);
  const button = screen.getByRole('button', { name: /submit/i });
  expect(button).toBeInTheDocument();
});
```

**Integration Tests:** Complex user flows and multi-component interactions

**Accessibility Testing:** Use jest-axe for automated accessibility checks

**Visual Regression Testing:** For UI-critical components using tools like Chromatic or Percy

**API Mocking:** Use MSW (Mock Service Worker) for realistic API mocking

### Test Coverage Targets

- 70% minimum for components
- 90% for utilities and hooks
- Error Scenarios: Test failure paths, loading states, and edge cases

## ✅ Code Quality Gates

### Linting & Formatting

- **ESLint**: With React hooks plugin and TypeScript rules
- **Prettier**: Automatic code formatting on save
- **Pre-commit hooks**: Husky + lint-staged to enforce quality before commit
- **Console cleanup**: No `console.log` statements in production builds (use proper logging service)
- **Import organization**: React → third-party → local modules

### Build-Time Checks

- TypeScript strict mode: Enabled in `tsconfig.json`
- Zero TypeScript errors: No errors or warnings allowed
- Bundle analyzer: Check for unexpected size increases
- Unused dependencies: Detect and remove with depcheck
- Accessibility audits: Run react-axe in development
- Dead code detection: Remove unused imports, variables, functions

## 📋 PR Requirements

### Frontend PR Checklist

- [ ] All components properly typed with TypeScript (no implicit `any`)
- [ ] No prop drilling beyond 2 levels
- [ ] Performance optimizations applied (memo, useMemo, useCallback)
- [ ] Responsive design tested across breakpoints (320px, 768px, 1024px+)
- [ ] Browser compatibility verified (Chrome, Firefox, Safari, Edge)
- [ ] Accessibility standards met (keyboard nav, screen reader, ARIA)
- [ ] No hardcoded strings (use i18n if applicable)
- [ ] Error boundaries for error-prone components
- [ ] Loading and error states handled gracefully
- [ ] Component prop defaults documented
- [ ] Test coverage maintained or improved
- [ ] Storybook stories added for new shared components

## 🔌 API Integration Standards

### Frontend Service Layer

**Centralized API calls:** Place in `/services` directory organized by domain

**Request Interceptors:** Handle auth tokens, headers, standardization

```typescript
apiClient.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

**Response Interceptors:** Centralized error handling, response transformation, token refresh

```typescript
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      handleTokenRefresh();
    }
    return Promise.reject(error);
  }
);
```

**Type Definitions:** Maintain API types in `/types` directory

**Error Handling:** Standardized with retry logic for transient failures

**Loading State Management:** Consistent pattern for loading/success/error states

**Data Transformation:** Transform API responses in service layer, not components

## 🔒 Security Standards

- **XSS Prevention**: Sanitize user inputs with DOMPurify before rendering
- **Sensitive Data Handling**: Use secure httpOnly cookies, not localStorage for tokens
- **Content Security Policy**: Implement CSP headers at server level
- **Input Validation**: Validate all inputs before API submission
- **Dependency Security**: Regular audits with npm audit or Snyk
- **Environment Variables**: Use correct prefix (REACT*APP*, VITE\_)
- **Source Maps**: Never expose in production builds
- **Third-party Scripts**: Review permissions and consider alternatives

## 📖 Documentation Requirements

### Component Documentation

**JSDoc Comments:** For complex components with examples and props

```typescript
/**
 * DataCard component displays structured data in a card layout
 * @param {DataCardProps} props - Component props
 * @param {object} props.data - Data object to display
 * @param {string} props.title - Card title
 * @example
 * <DataCard data={userData} title="User Information" />
 */
```

**Storybook Stories:** For all shared/library components with variants

**Frontend README:** Setup, architecture, deployment, troubleshooting

**API Integration Docs:** Endpoints, request/response examples, error codes

**Environment Setup:** Node.js version, package manager, environment variables

**Architecture Decision Records:** Document significant technical decisions

## ⚙️ Environment & Build Configuration

### Development Standards

- **Node.js Version**: Lock to specific LTS (Node 18.x or 20.x recommended)
- **Package Manager**: Define npm, yarn, or pnpm usage consistently
- **Environment Files**:
  - `.env.development` - Local development
  - `.env.staging` - Staging environment
  - `.env.production` - Production environment
  - `.env.example` - Template for required variables
- **Source Maps**: Enabled in development, disabled in production
- **Code Splitting Strategy**: Route-based and component-based splitting
- **CDN Integration**: For assets, fonts, third-party libraries
- **Build Optimization**: Tree-shaking, minification, asset optimization

## ❌ Rejection Criteria

### PRs Will Be Rejected If They Include:

- Components without proper TypeScript types or implicit `any`
- Unused imports, variables, or dead code
- Missing loading or error states for async operations
- Accessibility violations (failing jest-axe tests)
- Mobile responsiveness not tested
- Browser console errors or warnings
- Performance issues (unnecessary re-renders, large bundles)
- Direct DOM manipulation instead of React APIs
- Uncontrolled form inputs without justification
- CSS-in-JS without proper theming
- Hardcoded config values or API endpoints
- Missing error boundaries for error-prone sections
- Test coverage decreased without justification

## 📊 Monitoring & Debugging

### Frontend Observability

- **Error Tracking**: Sentry, LogRocket, or similar service
- **Performance Monitoring**: Core Web Vitals (LCP, FID, CLS)
- **User Analytics**: Track standard events for user interactions
- **Console Logging**: Standardized log levels (development only)
- **Source Map Uploads**: For production debugging with error tracking service
- **Real User Monitoring**: Track UX metrics in production
- **Session Recording**: Consider for debugging user-reported issues

## 🛡️ Error Handling & Accessibility

### Error Handling Best Practices

**Error Boundaries:** Implement for graceful error handling

```typescript
class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <FallbackUI />;
    }
    return this.props.children;
  }
}
```

- **Fallback UI**: Provide meaningful fallback experiences
- **Error Logging**: Log errors with context to monitoring service
- **User Feedback**: Show user-friendly error messages

### Accessibility (WCAG 2.1 AA Minimum)

- **Semantic HTML**: Use proper elements (`<button>`, `<nav>`, `<main>`)
- **ARIA Labels**: For interactive elements and regions
- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Color Contrast**: 4.5:1 for normal text, 3:1 for large text
- **Focus Management**: Proper focus on modals, alerts, page transitions
- **Screen Reader Testing**: Test with NVDA, JAWS, or VoiceOver

### Performance Monitoring

- **Lighthouse Scores**: Target 90+ across all metrics
- **Core Web Vitals**: Monitor LCP, FID, CLS continuously
- **Time to Interactive**: Measure and optimize
- **Bundle Impact**: Review before adding new dependencies

## 🛠️ Recommended Tools & Libraries

### Development Tools

| Category   | Tool                | Purpose                    |
| ---------- | ------------------- | -------------------------- |
| Build      | Vite or Bun         | Fast build and development |
| TypeScript | Strict mode enabled | Type safety                |
| Linting    | ESLint with React   | Code quality enforcement   |
| Formatting | Prettier            | Consistent code style      |
| Git Hooks  | Husky + lint-staged | Pre-commit quality checks  |

### State Management

| Use Case      | Tool                | When to Use                          |
| ------------- | ------------------- | ------------------------------------ |
| Complex state | Redux Toolkit       | Multiple slices, complex async logic |
| Lightweight   | Zustand             | Simple global state                  |
| Server state  | TanStack Query      | API data fetching and caching        |
| Atomic state  | Recoil/Jotai        | Fine-grained reactivity              |
| Local state   | useState/useReducer | Component-specific state             |

### Testing

| Type          | Tool                  | Purpose                        |
| ------------- | --------------------- | ------------------------------ |
| Unit          | Jest/Vitest           | Component and function testing |
| Component     | React Testing Library | User-centric component tests   |
| API Mocking   | MSW                   | Realistic API mocking          |
| E2E           | Cypress/Playwright    | End-to-end user flows          |
| Accessibility | jest-axe              | Automated a11y testing         |

### Monitoring & Analytics

| Purpose        | Tool               | Use Case                    |
| -------------- | ------------------ | --------------------------- |
| Error tracking | Sentry             | Production error monitoring |
| Session replay | LogRocket          | User session debugging      |
| Performance    | web-vitals library | Core Web Vitals measurement |
| Analytics      | Amplitude/Segment  | User behavior tracking      |

## 🔄 Governance & Escalation

### Code Review Process

All frontend PRs require:

- [ ] Approval from module owner or designated reviewer
- [ ] All automated checks passing (lint, type-check, tests, build)
- [ ] Performance impact verified (bundle size, Lighthouse scores)
- [ ] Accessibility review for UI changes

### Escalation Path

- **Performance concerns**: Alert performance reviewer or tech lead
- **Accessibility violations**: Alert accessibility champion
- **Security issues**: Alert security reviewer immediately
- **Major refactors**: Require architecture review and RFC (Request for Comments)

### Documentation Updates

- Update component documentation when APIs change
- Update README for new tools, processes, or architectural decisions
- Keep Storybook up-to-date with component changes
- Document breaking changes in CHANGELOG.md

## 📈 Continuous Improvement

### Metrics to Track

- Average PR review time
- Build failure rate
- Test coverage trends
- Bundle size trends over time
- Accessibility violation density
- Performance metric trends (Lighthouse, Core Web Vitals)
- Developer satisfaction and feedback

### Quarterly Reviews

- Update guidelines based on team feedback and retrospectives
- Update tool versions and evaluate new best practices
- Share learnings from production incidents
- Evaluate emerging technologies and frameworks
- Review and refine component library

## 🎯 Benefits of These Guidelines

These standards help the team:

- Maintain consistent code quality across all contributors
- Reduce bugs through strict typing and comprehensive testing
- Ensure accessibility and performance meet industry standards
- Onboard new developers quickly with clear conventions
- Scale the team while maintaining code excellence
- Build a culture of continuous improvement and code review

**Implementation Tip**: Adopt these standards incrementally, starting with high-impact items like TypeScript strict mode, ESLint configuration, and testing requirements.

## 📞 Support & Resources

For questions about these guidelines:

- Contact your module owner or frontend lead
- Raise questions in team communication channels
- Escalate to engineering leadership for architectural decisions
- Review past ADRs (Architecture Decision Records) for context

---

**Version**: 1.0.0  
**Last Updated**: January 2026  
**Maintained By**: Frontend Engineering Team
