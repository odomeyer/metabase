import {
  type ReactNode,
  useCallback,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { t } from "ttag";

import { resetParameterMapping } from "metabase/dashboard/actions";
import { isQuestionDashCard } from "metabase/dashboard/utils";
import { useDispatch } from "metabase/lib/redux";
import {
  getDashboardParameterSections,
  getDefaultOptionForParameterSectionMap,
} from "metabase/parameters/utils/dashboard-options";
import type { EmbeddingParameterVisibility } from "metabase/public/lib/types";
import {
  Box,
  type BoxProps,
  Button,
  Radio,
  Select,
  Stack,
  Text,
  TextInput,
} from "metabase/ui";
import type { ParameterSectionId } from "metabase-lib/v1/parameters/utils/operators";
import { canUseCustomSource } from "metabase-lib/v1/parameters/utils/parameter-source";
import { isTemporalUnitParameter } from "metabase-lib/v1/parameters/utils/parameter-type";
import {
  getIsMultiSelect,
  parameterHasNoDisplayValue,
} from "metabase-lib/v1/parameters/utils/parameter-values";
import type {
  DashboardCard,
  Parameter,
  TemporalUnit,
  ValuesQueryType,
  ValuesSourceConfig,
  ValuesSourceType,
} from "metabase-types/api";

import { isSingleOrMultiSelectable } from "../../utils/parameter-type";
import { ParameterValueWidget } from "../ParameterValueWidget";
import { RequiredParamToggle } from "../RequiredParamToggle";
import { ValuesSourceSettings } from "../ValuesSourceSettings";

import S from "./ParameterSettings.module.css";
import { TemporalUnitSettings } from "./TemporalUnitSettings";

export interface ParameterSettingsProps {
  parameter: Parameter;
  hasMapping: boolean;
  isParameterSlugUsed: (value: string) => boolean;
  onChangeName: (name: string) => void;
  onChangeType: (type: string, sectionId: string) => void;
  onChangeDefaultValue: (value: unknown) => void;
  onChangeIsMultiSelect: (isMultiSelect: boolean) => void;
  onChangeQueryType: (queryType: ValuesQueryType) => void;
  onChangeSourceType: (sourceType: ValuesSourceType) => void;
  onChangeSourceConfig: (sourceConfig: ValuesSourceConfig) => void;
  onChangeRequired: (value: boolean) => void;
  onChangeTemporalUnits: (temporalUnits: TemporalUnit[]) => void;
  embeddedParameterVisibility: EmbeddingParameterVisibility | null;
  editingParameterInlineDashcard?: DashboardCard;
}

const parameterSections = getDashboardParameterSections();
const dataTypeSectionsData = parameterSections.map((section) => ({
  label: section.name,
  value: section.id,
}));
const defaultOptionForSection = getDefaultOptionForParameterSectionMap();

export const ParameterSettings = ({
  parameter,
  editingParameterInlineDashcard,
  isParameterSlugUsed,
  onChangeName,
  onChangeType,
  onChangeDefaultValue,
  onChangeIsMultiSelect,
  onChangeQueryType,
  onChangeSourceType,
  onChangeSourceConfig,
  onChangeRequired,
  onChangeTemporalUnits,
  embeddedParameterVisibility,
  hasMapping,
}: ParameterSettingsProps): JSX.Element => {
  const dispatch = useDispatch();
  const [tempLabelValue, setTempLabelValue] = useState(parameter.name);
  // TODO: sectionId should always be present, but current type definition presumes it's optional in the parameter.
  // so we might want to remove all checks related to absence of it
  const sectionId = parameter.sectionId as ParameterSectionId;

  useLayoutEffect(() => {
    setTempLabelValue(parameter.name);
  }, [parameter.name]);

  const labelError = getLabelError({
    labelValue: tempLabelValue,
    isParameterSlugUsed,
  });

  const handleLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempLabelValue(event.target.value);
  };

  const handleLabelBlur = (event: { target: HTMLInputElement }) => {
    if (labelError) {
      // revert to the value before editing
      setTempLabelValue(parameter.name);
    } else {
      onChangeName(event.target.value);
    }
  };

  const handleSourceSettingsChange = useCallback(
    (sourceType: ValuesSourceType, sourceConfig: ValuesSourceConfig) => {
      onChangeSourceType(sourceType);
      onChangeSourceConfig(sourceConfig);
    },
    [onChangeSourceType, onChangeSourceConfig],
  );

  const isEmbeddedDisabled = embeddedParameterVisibility === "disabled";
  const isMultiValue = getIsMultiSelect(parameter) ? "multi" : "single";

  const handleTypeChange = (sectionId: ParameterSectionId) => {
    const defaultOptionOfNextType = defaultOptionForSection[sectionId];

    onChangeType(defaultOptionOfNextType.type, sectionId);
  };

  const handleOperatorChange = (operatorType: string) => {
    if (!sectionId) {
      return;
    }

    onChangeType(operatorType, sectionId);
  };

  const filterOperatorData = useMemo(() => {
    if (!sectionId) {
      return [];
    }

    const currentSection = parameterSections.find(
      (section) => section.id === sectionId,
    );

    if (!currentSection) {
      return [];
    }

    const options = currentSection.options;

    return options.map((option) => ({
      label: option.menuName ?? option.name,
      value: option.type,
    }));
  }, [sectionId]);

  return (
    <Box p="1.5rem 1rem 0.5rem">
      <Box mb="xl">
        <SettingLabel>{t`Label`}</SettingLabel>
        <TextInput
          onChange={handleLabelChange}
          value={tempLabelValue}
          onBlur={handleLabelBlur}
          error={labelError}
          aria-label={t`Label`}
        />
      </Box>
      {sectionId && (
        <>
          <Box mb="xl">
            <SettingLabel>{t`Filter or parameter type`}</SettingLabel>
            <Select
              data={dataTypeSectionsData}
              value={sectionId}
              onChange={handleTypeChange}
            />
          </Box>
          {filterOperatorData.length > 1 && (
            <Box mb="xl">
              <SettingLabel>{t`Filter operator`}</SettingLabel>
              <Select
                data={filterOperatorData}
                value={parameter.type}
                onChange={handleOperatorChange}
              />
            </Box>
          )}
        </>
      )}
      {isTemporalUnitParameter(parameter) && (
        <Box mb="xl">
          <SettingLabel>{t`Time grouping options`}</SettingLabel>
          <TemporalUnitSettings
            parameter={parameter}
            onChangeTemporalUnits={onChangeTemporalUnits}
          />
        </Box>
      )}
      {canUseCustomSource(parameter) && (
        <Box mb="xl">
          <SettingLabel>{t`How should people filter on this column?`}</SettingLabel>
          <ValuesSourceSettings
            parameter={parameter}
            onChangeQueryType={onChangeQueryType}
            onChangeSourceSettings={handleSourceSettingsChange}
          />
        </Box>
      )}

      {isSingleOrMultiSelectable(parameter) && (
        <Box mb="xl">
          <SettingLabel>{t`People can pick`}</SettingLabel>
          <Radio.Group
            value={isMultiValue}
            onChange={(val) => onChangeIsMultiSelect(val === "multi")}
          >
            <Stack gap="xs">
              <Radio
                checked={isMultiValue === "multi"}
                label={t`Multiple values`}
                value="multi"
              />
              <Radio
                checked={isMultiValue === "single"}
                label={t`A single value`}
                value="single"
              />
            </Stack>
          </Radio.Group>
        </Box>
      )}

      <Box mb="lg">
        <SettingLabel id="default-value-label">
          {t`Default value`}
          {parameter.required &&
            parameterHasNoDisplayValue(parameter.default) && (
              <span className={S.SettingLabelError}> ({t`required`})</span>
            )}
        </SettingLabel>

        <div aria-labelledby="default-value-label">
          <ParameterValueWidget
            className={S.SettingValueWidget}
            parameter={parameter}
            value={parameter.default}
            placeholder={t`No default`}
            setValue={onChangeDefaultValue}
            mimicMantine
          />
        </div>

        <RequiredParamToggle
          // This forces the toggle to be a new instance when the parameter changes,
          // so that toggles don't slide, which is confusing.
          key={`required_param_toggle_${parameter.id}`}
          uniqueId={parameter.id}
          disabled={isEmbeddedDisabled}
          value={parameter.required ?? false}
          onChange={onChangeRequired}
          disabledTooltip={
            <>
              <Text lh={1.4}>
                {t`This filter is set to disabled in an embedded dashboard.`}
              </Text>
              <Text lh={1.4}>
                {t`To always require a value, first visit embedding settings,
                    make this filter editable or locked, re-publish the
                    dashboard, then return to this page.`}
              </Text>
              <Text size="sm">
                {t`Note`}:{" "}
                {t`making it locked, will require updating the
                    embedding code before proceeding, otherwise the embed will
                    break.`}
              </Text>
            </>
          }
        ></RequiredParamToggle>
      </Box>

      {hasMapping && (
        <Box>
          <Button
            variant="subtle"
            pl={0}
            onClick={() => {
              dispatch(resetParameterMapping(parameter.id));
            }}
          >
            {editingParameterInlineDashcard != null &&
            isQuestionDashCard(editingParameterInlineDashcard)
              ? t`Disconnect from card`
              : t`Disconnect from cards`}
          </Button>
        </Box>
      )}
    </Box>
  );
};

function getLabelError({
  labelValue,
  isParameterSlugUsed,
}: {
  labelValue: string;
  isParameterSlugUsed: (value: string) => boolean;
}) {
  if (!labelValue) {
    return t`Required`;
  }
  if (isParameterSlugUsed(labelValue)) {
    return t`This label is already in use.`;
  }
  if (labelValue.toLowerCase() === "tab") {
    return t`This label is reserved for dashboard tabs.`;
  }
  return null;
}

function SettingLabel(props: BoxProps & { id?: string; children?: ReactNode }) {
  return (
    <Box
      component="label"
      className={S.SettingLabel}
      mb="sm"
      fw="bold"
      display="block"
      {...props}
    />
  );
}
