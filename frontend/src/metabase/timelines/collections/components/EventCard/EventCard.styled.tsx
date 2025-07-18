// eslint-disable-next-line no-restricted-imports
import { css } from "@emotion/react";
// eslint-disable-next-line no-restricted-imports
import styled from "@emotion/styled";

import Markdown from "metabase/common/components/Markdown";
import { Icon } from "metabase/ui";

export const CardRoot = styled.div`
  display: flex;
  align-items: stretch;
  min-height: 5rem;
`;

export const CardThread = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  align-items: center;
`;

export const CardThreadIcon = styled(Icon)`
  color: var(--mb-color-brand);
  width: 1rem;
  height: 1rem;
`;

export const CardThreadIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border: 1px solid var(--mb-color-border);
  border-radius: 1rem;
`;

export const CardThreadStroke = styled.div`
  flex: 1 1 auto;
  border-left: 1px solid var(--mb-color-border);
`;

export const CardBody = styled.div`
  flex: 1 1 auto;
  padding: 0.25rem 0.75rem 0.5rem;
  min-width: 0;
`;

interface CardTitleProps {
  to?: string;
}

const cardTitleHoverStyles = css`
  &:hover {
    color: var(--mb-color-brand);
  }
`;

export const CardTitle = styled.div<CardTitleProps>`
  color: var(--mb-color-text-dark);
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: bold;
  word-wrap: break-word;
  ${(props) => props.to && cardTitleHoverStyles};
`;

export const CardDescription = styled(Markdown)`
  color: var(--mb-color-text-dark);
  margin-top: 0.25rem;
  word-wrap: break-word;
`;

export const CardDateInfo = styled.div`
  color: var(--mb-color-brand);
  font-size: 0.75rem;
  line-height: 1.5rem;
  font-weight: bold;
`;

export const CardCreatorInfo = styled.div`
  color: var(--mb-color-text-medium);
  margin-top: 0.25rem;
  font-size: 0.75rem;
`;

export const CardAside = styled.div`
  flex: 0 0 auto;
`;
