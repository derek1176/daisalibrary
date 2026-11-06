import React from 'react';
import { ExternalLink, Tag } from 'lucide-react';

export interface ComponentHeaderProps {
  category: string;
  title: string;
  description: string;
  figmaNode?: {
    fileKey: string;
    nodeId: string;
    label: string;
  };
  version?: string;
}

export const ComponentHeader: React.FC<ComponentHeaderProps> = ({
  category,
  title,
  description,
  figmaNode,
  version = 'v1.2',
}) => {
  return (
    <div className="border-b border-etc-03 pb-6 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-[12px] font-bold bg-main-04 text-main-01 border border-main-02/20">
            {category}
          </span>
          <span className="px-2 py-0.5 rounded text-[11px] font-mono text-text-04 bg-etc-04 border border-etc-02">
            {version}
          </span>
        </div>

        {figmaNode && (
          <a
            href={`https://www.figma.com/design/${figmaNode.fileKey}?node-id=${figmaNode.nodeId.replace(':', '-')}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[12px] font-medium text-text-03 hover:text-main-01 transition-colors group bg-white border border-etc-02 px-2.5 py-1 rounded-[6px] shadow-xs"
          >
            <Tag className="w-3.5 h-3.5 text-main-01" />
            <span>Figma: #{figmaNode.label}</span>
            <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </a>
        )}
      </div>

      <h1 className="text-[28px] md:text-[32px] font-extrabold text-text-01 tracking-da24 leading-[1.2]">
        {title}
      </h1>
      <p className="text-[15px] md:text-[16px] text-text-03 leading-[24px] tracking-da24 max-w-3xl">
        {description}
      </p>
    </div>
  );
};
