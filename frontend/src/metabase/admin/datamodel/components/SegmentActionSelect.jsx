import cx from "classnames";
import PropTypes from "prop-types";
import { Component, createRef } from "react";
import { t } from "ttag";

import ModalWithTrigger from "metabase/common/components/ModalWithTrigger";
import PopoverWithTrigger from "metabase/common/components/PopoverWithTrigger";
import AdminS from "metabase/css/admin.module.css";
import CS from "metabase/css/core/index.css";
import { Icon } from "metabase/ui";

import { ActionLink, TriggerIconContainer } from "./SegmentActionSelect.styled";
import SegmentRetireModal from "./SegmentRetireModal";

export default class SegmentActionSelect extends Component {
  constructor(props) {
    super(props);

    this.retireModal = createRef();
  }

  static propTypes = {
    object: PropTypes.object.isRequired,
    onRetire: PropTypes.func.isRequired,
  };

  async onRetire(object) {
    await this.props.onRetire(object);
    this.retireModal.current.close();
  }

  render() {
    const { object } = this.props;
    return (
      <div>
        <PopoverWithTrigger
          triggerElement={
            <TriggerIconContainer>
              <Icon name="ellipsis" />
            </TriggerIconContainer>
          }
        >
          <ul className={AdminS.UserActionsSelect}>
            <li>
              <ActionLink to={`/admin/datamodel/segment/${object.id}`}>
                {t`Edit Segment`}
              </ActionLink>
            </li>
            <li>
              <ActionLink
                to={`/admin/datamodel/segment/${object.id}/revisions`}
              >
                {t`Revision History`}
              </ActionLink>
            </li>
            <li className={cx(CS.mt1, CS.borderTop)}>
              <ModalWithTrigger
                ref={this.retireModal}
                triggerElement={t`Retire Segment`}
                triggerClasses={cx(
                  CS.block,
                  CS.p2,
                  CS.bgErrorHover,
                  CS.textError,
                  CS.textWhiteHover,
                  CS.cursorPointer,
                )}
              >
                <SegmentRetireModal
                  object={object}
                  onRetire={this.onRetire.bind(this)}
                  onClose={() => this.retireModal.current.close()}
                />
              </ModalWithTrigger>
            </li>
          </ul>
        </PopoverWithTrigger>
      </div>
    );
  }
}
