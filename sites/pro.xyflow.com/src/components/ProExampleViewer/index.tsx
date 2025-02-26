'use client';

import { useMemo } from 'react';
import { Resizable } from 're-resizable';
import { aquaBlue } from '@codesandbox/sandpack-themes';
import {
  SandpackProvider,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackOptions,
  SandpackSetup,
  SandpackFiles,
  SandpackLayout,
} from '@codesandbox/sandpack-react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Heading, Text } from 'xy-ui';

import { isDevelopment } from '@/utils';

import mdxComponents from './mdx-components';
import DownloadSandpackButton from './sandpack-downloader';
import OverviewButton from './overview-button';
import Toolbar from './toolbar';

export type ProCodeViewerProps = {
  id: string;
  files: SandpackFiles;
  name?: string;
  description?: string;
  dependencies?: SandpackSetup['dependencies'];
  sandpackOptions?: SandpackOptions;
  readme: MDXRemoteSerializeResult;
};

const hiddenBaseStyles = {
  '/styles.css': {
    code: `
html, body, #root {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
`,
    hidden: true,
  },
};

const defaultSetup = {
  dependencies: {
    reactflow: '11.4.0',
  },
};

const defaultSandpackOptions = {
  editorHeight: 800,
  editorWidthPercentage: 45,
  wrapContent: false,
};

const resizeRightEnabled = {
  top: false,
  right: true,
  bottom: false,
  left: false,
  topRight: false,
  bottomRight: false,
  bottomLeft: false,
  topLeft: false,
};

const resizeBottomEnabled = {
  top: false,
  right: false,
  bottom: true,
  left: false,
  topRight: false,
  bottomRight: false,
  bottomLeft: false,
  topLeft: false,
};

export default function ProCodeViewer({
  name,
  description,
  id,
  files,
  readme,
  dependencies,
  sandpackOptions,
}: ProCodeViewerProps) {
  const customSandpackOptions = useMemo(
    () => ({
      ...defaultSandpackOptions,
      ...sandpackOptions,
    }),
    []
  );

  const customSetup = useMemo(
    () => ({
      ...defaultSetup,
      dependencies: {
        ...defaultSetup.dependencies,
        ...dependencies,
      },
    }),
    []
  );

  const isLargeScreen = true;
  const textDefaultWidth = isLargeScreen ? '1000px' : '55%';

  // @todo fix the layout here and add resizable again
  return (
    <div className="relative grid grid-cols-2">
      {/* <Resizable
          defaultSize={{
            width: '300px',
            height: '100%',
          }}
          maxWidth="1000px"
          minWidth="10%"
          enable={resizeRightEnabled}
        > */}
      <div className="pr-4">
        <div className="space-y-1 mb-3">
          <OverviewButton />
          {name && (
            <Heading size="md" className="font-black">
              {name}
            </Heading>
          )}
          {description && <Text size="lg">{description}</Text>}
        </div>
        <div>
          <MDXRemote {...readme} components={mdxComponents} />
        </div>
        <div className="border-t mt-6 pt-4">
          <Heading size="sm">Feedback</Heading>
          <Text>
            We are always trying to improve the quality of the Pro examples and would be happy about your feedback. Feel
            free to reach out at <a href="mailto:info@xyflow.com">info@xyflow.com</a>.
          </Text>
        </div>
      </div>
      {/* </Resizable> */}
      <div className="sticky top-0 h-[100vh]">
        <SandpackProvider
          template="react-ts"
          customSetup={customSetup}
          files={{ ...files, ...hiddenBaseStyles }}
          options={customSandpackOptions}
          theme={aquaBlue}
          className="h-[100vh] relative"
        >
          <div className="flex flex-col h-[100vh]">
            <Toolbar exampleId={id} />
            <SandpackPreview className="h-[45%] flex-shrink-0" showOpenInCodeSandbox={isDevelopment()} />
            <SandpackCodeEditor className="flex-grow-1 flex-shrink-1 overflow-hidden" />
          </div>
        </SandpackProvider>
        {/* <Resizable
            defaultSize={{
              width: '100%',
              height: '50%',
            }}
            enable={resizeBottomEnabled}
            maxHeight="90%"
            minHeight="10%"
          >
            <div>
              <SandpackPreview showOpenInCodeSandbox={isDevelopment()} />
            </div>
          </Resizable>
          <SandpackCodeEditor
            showRunButton={false}
            style={{ flexGrow: 1, height: '50%' }}
            {...customSandpackOptions}
            // @todo re-enable this
            // readOnly={isReadOnly}
          /> */}
      </div>
    </div>
  );
}
