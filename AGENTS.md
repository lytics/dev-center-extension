# AGENTS.md

## Project Context

Chrome extension (Lytics Developer Tools) transitioning from v1→v2. React 18, TypeScript 5.2, Material-UI v5, Vite build system. Target: experienced developers familiar with modern React patterns.

**CRITICAL**: This is a v1→v2 migration project. ALL NEW CODE must follow v2 patterns. NO EXCEPTIONS.

## Setup Commands

### Prerequisites
- **Volta** (recommended): Automatically manages Node.js 20.19.0 and Yarn 1.22.19
  - Install: `curl https://get.volta.sh | bash`
  - Volta auto-switches versions when entering project directory
- **Manual**: Ensure Node.js 20.19.0 and Yarn 1.22.19 are installed

### Common Commands
- Install deps: `yarn install`
- Build: `yarn build`
- Dev server: `yarn dev`
- Dev with HMR: `yarn dev` (includes hot reload)
- Test: `yarn test`
- Lint: `yarn lint`
- Lint fix: `yarn lint:fix`
- Format: `yarn prettier`

### Version Management
- Check versions: `node --version && yarn --version`
- Update pinned versions: `volta pin node@<version> && volta pin yarn@<version>`

## Code Standards - v2 Migration (CRITICAL)

### Component Architecture Requirements

**MANDATORY pattern for ALL new components:**

```typescript
// ✅ REQUIRED: Complete component structure
import React from 'react';
import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { appColors } from '@root/src/theme/palette';
import { appContent } from '@root/src/shared/content/appContent';

interface ComponentProps {
  onAction: (id: string) => void;
  isLoading?: boolean;
  textContent?: typeof appContent.sectionName; // Always allow content override
}

const StyledContainer = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2), // Always use theme.spacing()
  backgroundColor: appColors.common.white, // Always use appColors
  gap: theme.spacing(1),
  cursor: 'default',
  transition: 'none',
  '&:hover': {
    boxShadow: 'none',
    transform: 'none',
  },
}));

export const Component = ({ 
  onAction, 
  isLoading = false,
  textContent = appContent.sectionName // Default parameter pattern
}: ComponentProps): JSX.Element => {
  return (
    <StyledContainer>
      <Typography>{textContent.title}</Typography>
    </StyledContainer>
  );
};
```

### Forbidden v1 Patterns - REJECT IMMEDIATELY

```typescript
// ❌ These patterns should trigger immediate rejection
style={{ padding: '16px' }}                    // Use theme.spacing()
sx={{ color: '#8848F9', fontSize: '14px' }}    // Use styled components + appColors
<div>Hardcoded text content</div>               // Use appContent with override capability
export const Comp = ({ prop }) =>              // Missing TypeScript interface
backgroundColor: '#ffffff'                      // Use appColors.common.white
const data: any = {}                           // Proper TypeScript typing required
<Button sx={{ marginTop: '8px' }}>             // Use styled components
```

### Import Organization (Strict Order)

```typescript
// 1. React core
import React from 'react';

// 2. Third-party libraries (MUI, etc.)
import { Box, Card, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// 3. Internal components & utilities
import Toggle from '@root/src/pages/sidepanel/components/Toggle';
import { ArrowPointer } from '@root/src/pages/sidepanel/assets/svg/ArrowPointer';

// 4. Theme system
import { appColors } from '@root/src/theme/palette';

// 5. Content & models
import { appContent } from '@root/src/shared/content/appContent';
```

## Material-UI Integration

### Styling Requirements
- **ALWAYS** use `styled` from `@mui/material/styles`
- **NEVER** use inline styles or `sx` props
- **ALWAYS** use `theme.spacing()` for spacing values
- **ALWAYS** use `appColors` for color values
- **DISABLE** hover effects on static components: `cursor: 'default', transition: 'none', '&:hover': { boxShadow: 'none', transform: 'none' }`
- **LEVERAGE** theme breakpoints for responsive design
- **USE** consistent border radius and shadow patterns from theme

### Theme Integration Pattern
```typescript
const StyledButton = styled(Button)(() => ({
  color: appColors.common.colors.accent,
  borderColor: appColors.common.colors.accent,
  fontWeight: appColors.common.fontWeight.bold,
  fontSize: appColors.common.fontSize.baseSmall,
}));
```

## Content Management Strategy

### Centralized Content (Critical for Testing)
- **ALL text** must come from `src/shared/content/appContent.ts` by default
- **ALWAYS allow overrides** via optional prop: `textContent?: typeof appContent.section`
- **USE default parameter**: `textContent = appContent.section`
- **EXTRACT types**: `typeof appContent.section`

### Content Integration Pattern
```typescript
interface ComponentProps {
  textContent?: typeof appContent.componentName;
}

export const Component = ({ 
  textContent = appContent.componentName 
}: ComponentProps): JSX.Element => {
  return <Typography>{textContent.title}</Typography>;
};
```

## State Management Patterns

- **LOCAL STATE**: `useState` for component state (current pattern)
- **CHROME STORAGE**: Custom hooks following `useStorage(extensionStateStorage)` pattern
- **GLOBAL STATE**: Context API with proper provider patterns
- **MULTIPLE STATE**: Group related state with multiple `useState` hooks rather than complex objects
- **AVOID** prop drilling - use context or custom hooks

## Testing Strategy

### Component Testing Requirements
- **USE** Vitest and React Testing Library
- **TEST** component behavior, not implementation details
- **PROVIDE** test-specific content overrides when needed

### Testing Pattern with Content Override
```typescript
const testContent = {
  title: 'Test Title',
  description: 'Test Description',
  buttonText: 'Test Action'
};

render(
  <Component 
    onAction={mockFn} 
    textContent={testContent} 
  />
);

// Mock chrome APIs when needed
global.chrome = {
  storage: { local: { get: jest.fn(), set: jest.fn() } },
  tabs: { query: jest.fn() }
};
```

## Chrome Extension Specific Considerations

- **MANIFEST V3**: Follow latest Chrome extension standards
- **CONTENT SCRIPTS**: Isolate DOM manipulation, handle dynamic content
- **BACKGROUND SCRIPTS**: Efficient event handling, proper lifecycle management
- **STORAGE**: Use extension storage APIs properly, implement data migration
- **PERMISSIONS**: Request minimal necessary permissions
- **CSP**: Content Security Policy compliant code only
- **LEVERAGE** extension APIs efficiently (background scripts, content scripts, storage)
- **HANDLE** cross-origin communication properly
- **IMPLEMENT** proper error boundaries for extension contexts
- **USE** extension storage hooks pattern (`useStorage`)
- **CONSIDER** manifest v3 limitations and best practices

## Advanced TypeScript Patterns

- **PREFER** `interface` over `type` for object shapes
- **EXTRACT** types from existing objects when appropriate
- **USE** strict mode - no `any` types
- **IMPLEMENT** proper generic constraints where needed
- **LEVERAGE** utility types (Partial, Pick, Omit) appropriately

## Performance & Accessibility Standards

### Performance
- **USE** `React.memo` judiciously for components with stable props
- **IMPLEMENT** proper dependency arrays in hooks
- **AVOID** inline object/function creation in render

### Accessibility
- **INCLUDE** ARIA labels: `aria-label`, `aria-hidden="true"` for decorative elements
- **ENSURE** keyboard navigation support
- **USE** semantic HTML elements

## Error Handling & Resilience

```typescript
// ✅ Error boundary integration
export default withErrorBoundary(Component, ErrorFallback);

// ✅ Async error handling
try {
  const result = await chromeAPI.someMethod();
  // handle success
} catch (error) {
  console.error('Chrome API error:', error);
  // provide user feedback
}
```

## Code Review Standards

### Immediate Rejection Criteria
- Any hardcoded colors, spacing, or text content
- Missing TypeScript interfaces
- Use of `any` type without justification
- Inline styles or `sx` props
- Class components (unless error boundaries)
- Missing accessibility attributes

### Approval Requirements
- Follows v2 component template exactly
- Proper theme integration throughout
- Centralized content with override capability
- Comprehensive TypeScript typing
- Error handling implemented
- Tests written/updated for new functionality

## Migration Guidelines

### For New Components
- **MANDATORY**: Follow all v2 patterns from the start
- **NO COMPROMISES**: Code reviews will reject non-compliant code
- **REFERENCE**: Use `DisabledState.tsx`, `EnabledState.tsx` as templates

### For Modified Components
- **INCREMENTAL**: Refactor touched areas to v2 standards
- **DOCUMENT**: Mark remaining v1 patterns with `// TODO: v2 migration`
- **PRIORITIZE**: High-traffic components first

## Quick Reference: v1 to v2 Conversion

| v1 Anti-Pattern | v2 Required Replacement |
| --------------- | ---------------------- |
| `padding: '24px'` | `padding: theme.spacing(3)` |
| `color: '#8848F9'` | `color: appColors.common.colors.accent` |
| `fontSize: '16px'` | `fontSize: appColors.common.fontSize.base` |
| `<Button sx={...}>` | `const StyledButton = styled(Button)(() => ({...}))` |
| `<div>Enable Extension</div>` | `<Typography>{textContent.enableLabel}</Typography>` |

## Reference Components (v2 Gold Standards)

- **`src/pages/sidepanel/components/DisabledState.tsx`** - Perfect example of v2 patterns
- **`src/pages/sidepanel/components/EnabledState.tsx`** - Content integration and styling
- **`src/pages/sidepanel/components/Toggle.tsx`** - Complex styled component with theme integration

## Documentation References

- **`DEVELOPMENT.md`** - Comprehensive development guide for humans
- **`README.md`** - Project overview and setup
- **Reference Components** - See gold standard components listed above

## Security Considerations

- Follow Chrome extension security best practices
- Validate all data from content scripts
- Use proper CSP headers
- Minimize permissions requested in manifest

## Developer Experience Notes

Remember: You're working with experienced TypeScript/React developers familiar with modern patterns. Focus on:
- **Enforcing standards** rather than explaining basics
- **Catching subtle issues** that experienced developers might overlook  
- **Ensuring consistency** across the v1→v2 migration
- **Providing context** for Chrome extension specific patterns
