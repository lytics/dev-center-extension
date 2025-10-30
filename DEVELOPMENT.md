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

## Message Broker

### Overview
The Message Broker provides a type-safe, error-handled abstraction over Chrome's messaging API, enabling reliable communication between extension components (background scripts, content scripts, and sidepanel).

### Architecture
Located in `src/shared/message-broker/`, the broker consists of:
- **`broker.ts`** - Core `MessageBroker` class with send/receive capabilities
- **`types.ts`** - Message type definitions and keys
- **`index.ts`** - Singleton instance export

### Core Concepts

#### Message Structure
```typescript
interface IMessage<T = any> {
  key: MessageKey;
  payload?: T;
}

type MessageKey = 'GET_CONFIG';
```

Messages are strongly typed with a `key` (for routing) and optional `payload` (for data).

#### Singleton Pattern
```typescript
import { messageBroker } from '@root/src/shared/message-broker';
```

Use the singleton instance exported from the message broker module. This ensures consistent message handling across the extension.

### API Methods

#### 1. Sending Messages - `send<T>()`
Sends a message to the background script and awaits a response.

```typescript
const response = await messageBroker.send<ConfigType>({
  key: 'GET_CONFIG',
  payload: { option: 'value' }
});
```

**Features:**
- Generic return type for type-safe responses
- Automatic error handling for invalid contexts
- User-friendly error messages for common failures

**Error Handling:**
```typescript
try {
  const result = await messageBroker.send({ key: 'GET_CONFIG' });
} catch (error) {
  console.error('Message failed:', error.message);
}
```

Common errors:
- `Invalid message: key is required` - Missing message key
- `Chrome runtime is not available` - Extension context unavailable
- `Extension context invalidated` - Extension needs reload

#### 2. Handling Messages - `handle<T>()`
Registers a handler for incoming messages with a specific key.

```typescript
messageBroker.handle('GET_CONFIG', async (message: IMessage) => {
  const config = await fetchConfiguration();
  return { success: true, data: config };
});
```

**Features:**
- Async handler support with automatic promise resolution
- Automatic error serialization
- Key-based message routing

**Handler Requirements:**
- Must return a Promise (use `async` or return `Promise.resolve()`)
- Errors thrown in handler are caught and sent as error responses
- Handler is called only when message key matches

#### 3. Sending to Specific Tab - `sendToTab<T>()`
Sends a message to a specific tab's content script.

```typescript
const response = await messageBroker.sendToTab<EntityData>(
  tabId,
  { key: 'GET_CONFIG' }
);
```

**Features:**
- Tab ID validation (must be positive integer)
- Tab existence checking
- Content script availability validation

### Usage Patterns

#### Background Script (Message Handler)
```typescript
import { messageBroker } from '@root/src/shared/message-broker';

messageBroker.handle('GET_CONFIG', async (message: IMessage) => {
  const tabId = message.payload.currentTabId;
  
  return await messageBroker.sendToTab(tabId, {
    key: 'GET_CONFIG'
  });
});
```

#### Content Script (Message Handler)
```typescript
import { messageBroker } from '@root/src/shared/message-broker';

export const setupChromeMessageListener = () => {
  messageBroker.handle('GET_CONFIG', async () => {
    return new Promise((resolve, reject) => {
      window.postMessage({ action: 'getConfig' }, '*');
      
      const configHandler = (event: CustomEvent) => {
        const config = JSON.parse(event.detail.data);
        resolve(config);
      };
      
      document.addEventListener('config', configHandler as EventListener);
    });
  });
};
```

### Adding New Message Types

#### 1. Define the Message Key
```typescript
type MessageKey = 'GET_CONFIG' | 'NEW_MESSAGE_TYPE';
```

#### 2. Define Payload Types (Optional)
```typescript
interface NewMessagePayload {
  data: string;
  options: Record<string, any>;
}
```

#### 3. Register Handler
```typescript
messageBroker.handle('NEW_MESSAGE_TYPE', async (message: IMessage<NewMessagePayload>) => {
  const { data, options } = message.payload;
  return { success: true };
});
```

#### 4. Send Messages
```typescript
const result = await messageBroker.send<ResponseType>({
  key: 'NEW_MESSAGE_TYPE',
  payload: { data: 'test', options: {} }
});
```

### Best Practices

#### Type Safety
Always specify generic types for send operations:
```typescript
const config = await messageBroker.send<ConfigType>({ key: 'GET_CONFIG' });
```

#### Error Handling
Always wrap broker calls in try-catch blocks:
```typescript
try {
  const result = await messageBroker.send({ key: 'GET_CONFIG' });
} catch (error) {
  console.error('Config fetch failed:', error);
}
```

#### Message Key Management
- Define all message keys in `types.ts`
- Use descriptive, action-oriented names
- Follow naming convention: `VERB_NOUN` (e.g., `GET_CONFIG`, `UPDATE_SETTINGS`)

#### Handler Registration
- Register handlers once during initialization
- Don't register handlers inside loops or conditionally
- Ensure handlers are registered before messages are sent

#### Response Structure
Maintain consistent response structures:
```typescript
{ success: true, data: any }

{ error: 'Error message' }
```

### Testing

#### Mocking the Broker
```typescript
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { MessageBroker } from '@root/src/shared/message-broker/broker';

describe('Component with message broker', () => {
  let mockBrowser: typeof chrome;
  
  beforeEach(() => {
    mockBrowser = {
      runtime: {
        sendMessage: vi.fn().mockResolvedValue({ success: true }),
        lastError: undefined,
        onMessage: {
          addListener: vi.fn()
        }
      }
    } as unknown as typeof chrome;
  });
  
  it('sends message successfully', async () => {
    const broker = new MessageBroker(mockBrowser);
    const result = await broker.send({ key: 'GET_CONFIG' });
    
    expect(result).toEqual({ success: true });
  });
});
```

### Common Patterns

#### Request-Response with Timeout
```typescript
const fetchWithTimeout = async (timeoutMs: number) => {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error(`Request timeout after ${timeoutMs}ms`));
    }, timeoutMs);
    
    messageBroker.send({ key: 'GET_CONFIG' })
      .then(result => {
        clearTimeout(timeout);
        resolve(result);
      })
      .catch(error => {
        clearTimeout(timeout);
        reject(error);
      });
  });
};
```

#### Broadcasting to All Tabs
```typescript
const broadcastToAllTabs = async (message: IMessage) => {
  const tabs = await chrome.tabs.query({});
  const results = await Promise.allSettled(
    tabs.map(tab => messageBroker.sendToTab(tab.id, message))
  );
  return results;
};
```

### Troubleshooting

#### "Receiving end does not exist"
- **Cause**: Content script not loaded or tab closed
- **Solution**: Check tab state before sending, handle error gracefully

#### "Extension context invalidated"
- **Cause**: Extension was reloaded or updated
- **Solution**: Prompt user to reload page or refresh extension

#### Handler not called
- **Cause**: Message key mismatch or handler not registered
- **Solution**: Verify key matches exactly, ensure handler registered before message sent

#### Response not received
- **Cause**: Handler didn't return true (async listener pattern)
- **Solution**: `handle()` method automatically returns true, ensure handler returns a Promise

## Code Quality
- ESLint and Prettier configurations
- TypeScript strict mode
- Pre-commit hooks with Husky
- Consistent naming conventions
- **Volta-managed Node.js and Yarn versions**

