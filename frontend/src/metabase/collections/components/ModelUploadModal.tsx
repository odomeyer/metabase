import { useEffect, useMemo, useState } from "react";
import { t } from "ttag";

import { useListCollectionItemsQuery } from "metabase/api";
import {
  Button,
  Flex,
  Icon,
  Modal,
  Radio,
  Select,
  Stack,
  Text,
} from "metabase/ui";
import type { CollectionId, TableId } from "metabase-types/api";
import { UploadMode } from "metabase-types/store/upload";

import type { OnFileUpload } from "../types";

import { findLastEditedCollectionItem } from "./utils";

export function ModelUploadModal({
  opened,
  onClose,
  onUpload,
  collectionId,
}: {
  opened: boolean;
  onClose: () => void;
  onUpload: OnFileUpload;
  collectionId: CollectionId;
}) {
  const [uploadMode, setUploadMode] = useState<UploadMode>(UploadMode.create);
  const [tableId, setTableId] = useState<TableId | null>(null);

  const { data, isLoading } = useListCollectionItemsQuery({
    id: collectionId,
    models: ["dataset"],
  });

  const uploadableModels = useMemo(
    () => data?.data?.filter((model) => !!model.based_on_upload),
    [data],
  );
  const hasNoUploadableModels = !isLoading && uploadableModels?.length === 0;

  useEffect(
    function setDefaultTableId() {
      if (!uploadableModels?.length) {
        return;
      }

      const latestModel = findLastEditedCollectionItem(uploadableModels);
      setTableId(Number(latestModel.based_on_upload));
    },
    [uploadableModels],
  );

  const handleUpload = () => {
    if (uploadMode !== UploadMode.create && tableId) {
      const modelForTableId = uploadableModels?.find(
        (model) => model.based_on_upload === Number(tableId),
      );

      return onUpload({
        tableId: Number(tableId),
        modelId: modelForTableId?.id as number,
        uploadMode: uploadMode,
      });
    }

    return onUpload({ collectionId, uploadMode: UploadMode.create });
  };

  useEffect(() => {
    // if we trigger the modal, and there's no uploadable models, just
    // automatically upload a new one

    if (opened && hasNoUploadableModels) {
      onUpload({ collectionId, uploadMode: UploadMode.create });
      onClose();
    }
  }, [onUpload, onClose, collectionId, opened, hasNoUploadableModels]);

  if (!uploadableModels?.length) {
    return null;
  }

  const isFormValid = uploadMode === UploadMode.create || !!tableId;

  const buttonText = (() => {
    switch (uploadMode) {
      case UploadMode.create:
        return t`Create model`;
      case UploadMode.append:
        return t`Append to model`;
      case UploadMode.replace:
        return t`Replace model data`;
    }
  })();

  return (
    <Modal
      opened={opened}
      title={t`Select upload destination`}
      onClose={onClose}
    >
      <Stack mb="lg">
        <Text>
          {t`If your CSV has the same columns as a model from a previously uploaded file, you can append data to that model. Otherwise, you can create a new model.`}
        </Text>
        <Radio.Group
          value={uploadMode}
          onChange={(val) => setUploadMode(val as UploadMode)}
          pl="1px"
        >
          <Radio label={t`Create a new model`} value={UploadMode.create} />
          <Radio
            mt="md"
            label={t`Append to a model`}
            value={UploadMode.append}
          />
          <Radio
            mt="md"
            label={t`Replace data in a model`}
            value={UploadMode.replace}
          />
        </Radio.Group>
        {uploadMode !== UploadMode.create && (
          <Select
            aria-label={t`Select a model`}
            leftSection={<Icon name="model" />}
            placeholder={t`Select a model`}
            value={tableId ? String(tableId) : ""}
            data={
              uploadableModels.map((model) => ({
                value: String(model.based_on_upload),
                label: model.name,
              })) ?? []
            }
            onChange={setTableId}
          />
        )}
      </Stack>

      <Flex justify="flex-end" gap="sm">
        <Button onClick={onClose}>{t`Cancel`}</Button>
        <Button onClick={handleUpload} variant="filled" disabled={!isFormValid}>
          {buttonText}
        </Button>
      </Flex>
    </Modal>
  );
}
