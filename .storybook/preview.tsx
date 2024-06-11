import type { Preview } from '@storybook/react'
import '@/styles/globals.scss'

const customViewports = {
  desktop: {
    name: 'desktop',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
  laptop: {
    name: 'laptop',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
  tablet: {
    name: 'tablet',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  mobile: {
    name: 'mobile',
    styles: {
      width: '390px',
      height: '844px',
    },
  },
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: customViewports,
      defaultViewport: 'desktop',
    },
  },
}

export default preview
