// eslint-disable-next-line no-restricted-imports
import styled from "@emotion/styled";

import AccordionList from "metabase/common/components/AccordionList";
import { color } from "metabase/lib/colors";
import type { ColorName } from "metabase/lib/colors/types";

export const StyledAccordionList = styled(AccordionList)<{ color: ColorName }>`
  color: ${(props) => color(props.color)};
`;
