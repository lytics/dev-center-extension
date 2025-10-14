# Chrome Extension Development Guide

## Project Overview
This Chrome extension is transitioning from v1 to v2, using React 18, TypeScript, Material-UI v5, and follows modern functional component patterns with emphasis on testability, consistency, and maintainability.

> **For AI Coding Agents**: See `AGENTS.md` for project-specific instructions following the [agents.md](https://agents.md/) standard.

## Architecture & Standards

### Component Architecture
- **Stateless functional components** with React hooks
- **Composition over inheritance**
- **Single responsibility principle**
- **Custom hooks for reusable logic**

### TypeScript Standards
- Explicit interfaces for all component props
- `JSX.Element` return types
- Prefer `interface` over `type` for object shapes
- Export types alongside components

### Styling Standards
- **Styled components** with `@mui/material/styles`
- **Theme integration** for all values
- **Centralized colors** via `appColors`
- **Consistent spacing** with `theme.spacing()`

### Content Management
- **Centralized text** in `src/shared/content/appContent.ts`
- **Type-safe content** with `typeof` extraction
- **Override capability** for testing

## File Organization

### Import Order
1. React imports
2. Third-party libraries (MUI, etc.)
3. Internal components
4. Theme and styling
5. Content and models

### Project Structure
```
src/
├── pages/           # Extension pages (sidepanel, popup, etc.)
├── shared/          # Shared utilities and components
├── theme/           # Theme configuration
└── assets/          # Static assets
```

## Migration from v1 to v2

### Code Quality Enforcement
- **ALL NEW CODE** must follow v2 patterns
- **EXISTING CODE** refactored when modified
- **NO EXCEPTIONS** for new components
- **CODE REVIEWS** enforce standards

### v1 vs v2 Patterns

#### ❌ v1 Legacy Patterns (Avoid)
```typescript
// Inline styles
<div style={{ padding: '16px', color: '#8848F9' }} />

// Hardcoded text
<Typography>Enable Extension</Typography>

// sx prop usage
<Button sx={{ marginTop: '8px' }} />

// Untyped props
export const Component = ({ prop }) => { ... }
```

#### ✅ v2 Modern Patterns (Required)
```typescript
// Styled components with theme
const Container = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  color: appColors.common.colors.accent,
}));

// Centralized content
<Typography>{textContent.enableLabel}</Typography>

// Proper TypeScript
interface ComponentProps {
  prop: string;
}
export const Component = ({ prop }: ComponentProps): JSX.Element => { ... }
```

### Migration Checklist
When modifying existing components:

- [ ] Remove inline styles and `sx` props
- [ ] Replace hardcoded colors with `appColors`
- [ ] Replace hardcoded spacing with `theme.spacing()`
- [ ] Move text to `appContent.ts`
- [ ] Add TypeScript interfaces
- [ ] Use styled components
- [ ] Add error handling
- [ ] Include accessibility attributes
- [ ] Write/update tests

## Reference Components

### v2 Standard Examples
- `DisabledState.tsx` - Perfect v2 implementation
- `EnabledState.tsx` - Content integration patterns
- `Toggle.tsx` - Complex styled component

### Component Template
```typescript
import React from 'react';
import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { appColors } from '@root/src/theme/palette';
import { appContent } from '@root/src/shared/content/appContent';

interface ComponentProps {
  title: string;
  onAction: () => void;
}

const Container = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: appColors.common.white,
  gap: theme.spacing(1),
}));

const StyledTitle = styled(Typography)(() => ({
  fontSize: appColors.common.fontSize.base,
  fontWeight: appColors.common.fontWeight.semiBold,
  color: appColors.common.colors.textSecondary,
}));

export const Component = ({ 
  title, 
  onAction 
}: ComponentProps): JSX.Element => {
  return (
    <Container>
      <StyledTitle variant="h6">
        {title}
      </StyledTitle>
      {/* Component content */}
    </Container>
  );
};
```

## Testing Strategy
- **Vitest** and **React Testing Library**
- Test behavior, not implementation
- Mock external dependencies
- Test-specific content overrides

## Performance & Accessibility
- `React.memo` for stable props
- Proper dependency arrays
- ARIA labels and semantic HTML
- Keyboard navigation support

## Tools & Dependencies
- React 18.2.0
- @mui/material ^5.15.1
- TypeScript 5.2.2
- Vitest for testing
- ESLint + Prettier
- **Volta** for Node.js and Yarn version management

### Version Management with Volta

This project uses [Volta](https://volta.sh/) to pin Node.js and Yarn versions, ensuring consistent development environments across the team and CI/CD pipelines.

**Pinned Versions:**
- Node.js: `20.19.0`
- Yarn: `1.22.19`

**Installing Volta:**
```bash
curl https://get.volta.sh | bash
```

**How Volta Works:**
- Automatically switches to the correct Node.js and Yarn versions when you enter the project directory
- No manual version management needed (no `nvm use` or switching required)
- Versions are defined in `package.json` under the `volta` section
- Eliminates "works on my machine" issues

**Without Volta:**
If you prefer not to use Volta, ensure you have Node.js 20.19.0 and Yarn 1.22.19 installed manually. You can check with:
```bash
node --version  # Should output: v20.19.0
yarn --version  # Should output: 1.22.19
```

**Updating Versions:**
To update pinned versions (requires team consensus):
```bash
volta pin node@<new-version>
volta pin yarn@<new-version>
```
This will update the `volta` section in `package.json`.

## Code Quality
- ESLint and Prettier configurations
- TypeScript strict mode
- Pre-commit hooks with Husky
- Consistent naming conventions
- **Volta-managed Node.js and Yarn versions**

